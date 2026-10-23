/** Parse comma-delimited records, including quoted commas and escaped quotes. */
export function parseCSV(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  const input = text.replace(/^\uFEFF/, '');
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '"') {
      if (quoted && input[i + 1] === '"') { field += '"'; i++; }
      else if (quoted || field === '') quoted = !quoted;
      else throw new Error('Unexpected quote in CSV field');
    } else if (char === ',' && !quoted) {
      row.push(field); field = '';
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && input[i + 1] === '\n') i++;
      row.push(field);
      if (row.some(value => value.trim() !== '')) rows.push(row);
      row = []; field = '';
    } else field += char;
  }
  if (quoted) throw new Error('Unclosed quoted CSV field');
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows;
}

export function numericValue(value) {
  if (value === undefined || value.trim() === '') return NaN;
  const number = Number(value);
  return Number.isFinite(number) ? number : NaN;
}

export function correlation(rows, x, y) {
  const complete = rows.filter(row => Number.isFinite(row[x]) && Number.isFinite(row[y]));
  if (complete.length < 3) return null;
  const mean = key => complete.reduce((sum, row) => sum + row[key], 0) / complete.length;
  const mx = mean(x), my = mean(y);
  let cov = 0, vx = 0, vy = 0;
  for (const row of complete) {
    const dx = row[x] - mx, dy = row[y] - my;
    cov += dx * dy; vx += dx * dx; vy += dy * dy;
  }
  return vx && vy ? cov / Math.sqrt(vx * vy) : null;
}
