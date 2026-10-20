// Portfolio preview of the public 2023 project CSV; no external services.
const regionGroups={
 Asia:['South Korea','Japan','China','India','Indonesia','Vietnam','Thailand','Malaysia','Philippines','Pakistan','Bangladesh','Singapore'],
 Europe:['Germany','France','United Kingdom','Italy','Spain','Netherlands','Sweden','Poland','Greece','Portugal','Russia','Switzerland','Norway','Denmark','Finland','Turkey'],
 'North America':['United States','Canada','Mexico','Costa Rica','Cuba'],
 'Latin America':['Brazil','Argentina','Colombia','Chile','Peru'],
 Africa:['South Africa','Nigeria','Kenya','Egypt','Ghana','Morocco'],
 Oceania:['Australia','New Zealand'],
 'Middle East':['Saudi Arabia','United Arab Emirates','Israel','Iran']
};
const variableLabels={gdp_pc:'GDP per capita',gii:'Gender Inequality Index',flfpr:'Female labor-force participation (%)',beauty_pc:'Spending per capita',beauty_pct:'Spending (% of household income)'};
const regionSelect=document.getElementById('region');
const xSelect=document.getElementById('xvar');
const ySelect=document.getElementById('yvar');
const summary=document.getElementById('explorer-summary');
const chart=document.getElementById('scatter');
const svgNS='http://www.w3.org/2000/svg';
function svgNode(tag,attrs={},text){const n=document.createElementNS(svgNS,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);if(text!==undefined)n.textContent=text;return n;}
function axisMaximum(value){const magnitude=10**Math.floor(Math.log10(value||1));return Math.ceil(value/magnitude)*magnitude;}
function format(n){return n.toLocaleString('en-US',{maximumFractionDigits:3});}
function correlation(rows,x,y){
 if(rows.length<3)return null;
 const mx=rows.reduce((a,r)=>a+r[x],0)/rows.length,my=rows.reduce((a,r)=>a+r[y],0)/rows.length;
 let cov=0,vx=0,vy=0;for(const r of rows){const dx=r[x]-mx,dy=r[y]-my;cov+=dx*dy;vx+=dx*dx;vy+=dy*dy;}
 return vx&&vy?cov/Math.sqrt(vx*vy):null;
}
async function startExplorer(){
 try{
  const response=await fetch('../assets/beauty-data.csv');if(!response.ok)throw Error('Dataset unavailable');
  const lines=(await response.text()).trim().split(/\r?\n/),keys=lines.shift().split(',');
  const data=lines.map(line=>Object.fromEntries(line.split(',').map((v,i)=>[keys[i],i===0?v:Number(v)])));
  for(const row of data)row.region=Object.entries(regionGroups).find(([,countries])=>countries.includes(row.country))?.[0]||'Other';
  for(const name of [...new Set(data.map(r=>r.region))].sort()){const o=document.createElement('option');o.value=name;o.textContent=name;regionSelect.append(o);}
  function render(){
   const x=xSelect.value,y=ySelect.value;
   const rows=data.filter(r=>(regionSelect.value==='all'||r.region===regionSelect.value)&&Number.isFinite(r[x])&&Number.isFinite(r[y]));
   const r=correlation(rows,x,y);
   const mean=rows.length?rows.reduce((total,row)=>total+row[y],0)/rows.length:null;
   summary.textContent=`${rows.length} countries · 2023 · Pearson r: ${r===null?'not reported for fewer than 3 countries or constant values':r.toFixed(2)} · Mean spending: ${mean===null?'not available':format(mean)}. Unweighted country sample; descriptive associations.`;
   const svg=svgNode('svg',{viewBox:'0 0 760 460',role:'group','aria-labelledby':'plot-title plot-desc'});
   svg.append(svgNode('title',{id:'plot-title'},`${variableLabels[y]} versus ${variableLabels[x]}`),svgNode('desc',{id:'plot-desc'},`${rows.length} countries in ${regionSelect.value==='all'?'all regions':regionSelect.value}. Full values are available in the table below.`));
   const maxX=axisMaximum(Math.max(...rows.map(r=>r[x]),0.001)),maxY=axisMaximum(Math.max(...rows.map(r=>r[y]),0.001));
   for(let i=0;i<=4;i++){
    const px=90+i*620/4,py=385-i*335/4;
    svg.append(svgNode('line',{x1:90,y1:py,x2:710,y2:py,stroke:'#deddd4'}),svgNode('text',{x:78,y:py+4,'text-anchor':'end'},format(maxY*i/4)),svgNode('text',{x:px,y:408,'text-anchor':'middle'},format(maxX*i/4)));
   }
   svg.append(svgNode('text',{x:400,y:445,'text-anchor':'middle'},variableLabels[x]),svgNode('text',{x:90,y:27},variableLabels[y]));
   const detail=svgNode('text',{x:90,y:430,'aria-hidden':'true'},'Focus a point to see its country and values.');svg.append(detail);
   const points=svgNode('g',{role:'group','aria-label':'Countries'});
   for(const row of rows){
    const label=`${row.country}: ${variableLabels[x]} ${format(row[x])}; ${variableLabels[y]} ${format(row[y])}`;
    const c=svgNode('circle',{cx:90+row[x]/maxX*620,cy:385-row[y]/maxY*335,r:5,fill:'#315f55','fill-opacity':'.72',tabindex:0,role:'img','aria-label':label});
    c.append(svgNode('title',{},label));
    c.addEventListener('focus',()=>{detail.textContent=`${row.country} · ${format(row[x])} / ${format(row[y])}`;});
    c.addEventListener('mouseenter',()=>{detail.textContent=`${row.country} · ${format(row[x])} / ${format(row[y])}`;});
    points.append(c);
   }svg.append(points);chart.replaceChildren(svg);
   document.getElementById('x-heading').textContent=variableLabels[x];document.getElementById('y-heading').textContent=variableLabels[y];
   const tbody=document.getElementById('data-rows');tbody.replaceChildren();
   for(const row of [...rows].sort((a,b)=>a.country.localeCompare(b.country))){const tr=document.createElement('tr');for(const value of [row.country,format(row[x]),format(row[y])]){const td=document.createElement('td');td.textContent=value;tr.append(td);}tbody.append(tr);}
  }
  for(const control of [regionSelect,xSelect,ySelect])control.addEventListener('change',render);
  render();
 }catch(error){summary.textContent='The preview could not load. Download the CSV below or view the R Shiny source on GitHub.';}
}
startExplorer();
