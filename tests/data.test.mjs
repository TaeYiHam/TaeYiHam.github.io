import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseCSV, numericValue, correlation } from '../csv.mjs';

test('CSV preserves quoted commas, escaped quotes, embedded newlines and CRLF', () => {
  assert.deepEqual(parseCSV('\uFEFFname,value\r\n"A, B",2\r\n"A ""quoted""\nname",3\r\n'), [
    ['name', 'value'], ['A, B', '2'], ['A "quoted"\nname', '3']
  ]);
  assert.throws(() => parseCSV('name\n"unfinished'), /Unclosed/);
});

test('Missing and nonfinite data cannot silently become numeric zero', () => {
  for (const value of ['', ' ', 'NA', 'Infinity', undefined]) assert.ok(Number.isNaN(numericValue(value)));
  assert.equal(numericValue('0'), 0);
  assert.equal(numericValue(' 2.5 '), 2.5);
});

test('Correlation handles known direction, missing values and undefined cases', () => {
  const rows = [{x:1,y:3},{x:2,y:2},{x:3,y:1},{x:NaN,y:9}];
  assert.equal(correlation(rows,'x','y'), -1);
  assert.equal(correlation([{x:1,y:1},{x:1,y:2},{x:1,y:3}], 'x','y'), null);
  assert.equal(correlation(rows.slice(0,2),'x','y'), null);
});

test('Published project data retains 50 distinct countries and documented totals', () => {
  const [header, ...records] = parseCSV(readFileSync(new URL('../assets/beauty-data.csv', import.meta.url),'utf8'));
  assert.equal(records.length, 50);
  assert.equal(new Set(records.map(row => row[0])).size, 50);
  const rows = records.map(record => Object.fromEntries(header.map((key,i) => [key, key === 'country' ? record[i] : numericValue(record[i])])));
  assert.ok(rows.every(row => row.year === 2023));
  assert.ok(Math.abs(rows.reduce((sum,row) => sum + row.beauty_pc,0) / 50 - 184.2) < 1e-9);
  assert.equal(correlation(rows,'gdp_pc','beauty_pc').toFixed(2), '0.86');
});
