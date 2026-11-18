// Redraw the Beauty case-study scatter in the site palette from the unchanged project CSV.
import {readFileSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {parseCSV, numericValue} from '../csv.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const [header, ...records] = parseCSV(readFileSync(root + 'assets/beauty-data.csv', 'utf8'));
const col = name => header.indexOf(name);
const rows = records.map(f => ({country: f[col('country')], gdp_pc: numericValue(f[col('gdp_pc')]),
  beauty_pct: numericValue(f[col('beauty_pct')]), flfpr: numericValue(f[col('flfpr')])}))
  .filter(r => Number.isFinite(r.gdp_pc) && Number.isFinite(r.beauty_pct) && Number.isFinite(r.flfpr));

const W = 900, H = 560, m = {top: 110, right: 40, bottom: 70, left: 72};
const xMax = 100000, yMin = 1, yMax = 3.5;
const x = v => m.left + (v / xMax) * (W - m.left - m.right);
const y = v => H - m.bottom - ((v - yMin) / (yMax - yMin)) * (H - m.top - m.bottom);
const r = v => 4 + (v - 15) / (65 - 15) * 8;
const fmt = n => n === 0 ? '$0' : `$${n / 1000}k`;
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;');

const xTicks = [0, 25000, 50000, 75000, 100000];
const yTicks = [1, 1.5, 2, 2.5, 3, 3.5];
const labelled = new Set(['South Korea', 'United States']);
const points = [...rows].sort((a, b) => b.flfpr - a.flfpr).map(d => {
  const hl = labelled.has(d.country);
  return `<circle cx="${x(d.gdp_pc).toFixed(1)}" cy="${y(d.beauty_pct).toFixed(1)}" r="${r(d.flfpr).toFixed(1)}" fill="${hl ? '#19201c' : '#315f55'}" fill-opacity="${hl ? 0.9 : 0.55}" stroke="#fcfbf7" stroke-width="1"><title>${esc(d.country)}: ${d.beauty_pct}% of income, GDP per capita ${d.gdp_pc.toLocaleString('en-US')}, female LFP ${d.flfpr}%</title></circle>`;
}).join('\n    ');
const labels = rows.filter(d => labelled.has(d.country)).map(d =>
  `<text x="${(x(d.gdp_pc) + 12).toFixed(1)}" y="${(y(d.beauty_pct) - 10).toFixed(1)}" font-size="14" font-weight="700">${esc(d.country)}</text>`).join('\n    ');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title description">
  <title id="title">GDP per capita versus beauty spending as a share of household income, ${rows.length} countries, 2023</title>
  <desc id="description">Countries with lower GDP per capita generally spend a larger share of household income on beauty. Point size represents female labor-force participation.</desc>
  <rect width="${W}" height="${H}" fill="#fcfbf7"/>
  <g font-family="Inter, Arial, Helvetica, sans-serif" fill="#19201c">
    <text x="${m.left}" y="38" font-size="12" font-weight="700" letter-spacing="2" fill="#315f55">GLOBAL BEAUTY SPENDING · ${rows.length} COUNTRIES · 2023</text>
    <text x="${m.left}" y="74" font-size="26" font-weight="700" letter-spacing="-.5">Richer markets spend a smaller share of income.</text>
    <g stroke="#d4d8ce">
    ${yTicks.map(t => `<path d="M${m.left} ${y(t)}H${W - m.right}"/>`).join('')}
    </g>
    <g font-size="13" fill="#535e56">
    ${yTicks.map(t => `<text x="${m.left - 12}" y="${y(t) + 4}" text-anchor="end">${t.toFixed(1)}%</text>`).join('')}
    ${xTicks.map(t => `<text x="${x(t)}" y="${H - m.bottom + 24}" text-anchor="middle">${fmt(t)}</text>`).join('')}
    <text x="${(m.left + W - m.right) / 2}" y="${H - 16}" text-anchor="middle">GDP per capita (USD)</text>
    <text transform="translate(18 ${(m.top + H - m.bottom) / 2}) rotate(-90)" text-anchor="middle">Beauty spending, % of household income</text>
    </g>
    ${points}
    ${labels}
    <g font-size="12" fill="#535e56" transform="translate(${W - m.right - 230} ${m.top + 6})">
      <text x="0" y="0">Female labor-force participation</text>
      ${[20, 40, 60].map((v, i) => `<circle cx="${12 + i * 70}" cy="22" r="${r(v).toFixed(1)}" fill="#315f55" fill-opacity=".55"/><text x="${28 + i * 70}" y="26">${v}%</text>`).join('')}
    </g>
  </g>
</svg>
`;
writeFileSync(root + 'assets/beauty-income-share.svg', svg);
console.log(`Wrote assets/beauty-income-share.svg (${rows.length} countries).`);
