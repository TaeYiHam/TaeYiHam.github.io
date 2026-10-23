import { readFileSync, writeFileSync } from 'node:fs';
import { projects } from './case-content.mjs';
import { catalog } from './project-catalog.mjs';

export function buildHome(root) {
  const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  const featured = projects.filter(project => catalog[project.slug].featured).map((project, index) => {
    const info = catalog[project.slug];
    const href = `projects/${project.slug}.html`;
    const dashboard = project.slug === 'global-beauty-spending';
    const visual = `<a class="visual" href="${href}${dashboard ? '#explorer' : ''}" tabindex="-1" aria-hidden="true"><img src="assets/${info.image}" alt="" width="900" height="520" loading="lazy" decoding="async"></a>`;
    const copy = `<div class="copy"><div class="card-meta"><span class="num">0${index + 1} / ${escape(info.category)}</span><span class="status-label">${escape(info.status)}</span></div><h3><a href="${href}">${escape(info.shortTitle)}</a></h3><p>${escape(info.description)}</p><div class="project-proof"><strong>${escape(info.proof)}</strong><span>${escape(info.proofContext)}</span></div><span class="card-relevance">${escape(info.relevance)}</span><div class="tags">${escape(info.tools)}</div><div class="card-actions">${dashboard ? `<a class="btn small dark" href="${href}#explorer">Explore dashboard ↗</a>` : ''}<a class="case-link" href="${href}">Read case study ↗<span class="sr-only">: ${escape(info.shortTitle)}</span></a></div></div>`;
    return `<article class="project ${index === 2 ? 'three' : ''}">${index === 2 ? copy + visual : visual + copy}</article>`;
  }).join('\n');
  const rank = {'Fall 2026':5,'Spring 2026':4,'Fall 2025':3,'Summer 2025':2,'Fall 2023':1};
  const archive = [...projects].sort((a,b) => rank[catalog[b.slug].date] - rank[catalog[a.slug].date]).map(project => {
    const info = catalog[project.slug];
    return `<a class="journey-row" href="projects/${project.slug}.html"><span>${info.date}</span><strong>${escape(info.shortTitle)}</strong><span>${escape(info.tools)}</span><b aria-hidden="true">↗</b></a>`;
  }).join('\n');
  const html = readFileSync(root + 'scripts/home-template.html','utf8').replace('{{FEATURED_PROJECTS}}', featured).replace('{{PROJECT_INDEX}}', archive);
  writeFileSync(root + 'index.html', html.replaceAll('><', '>\n<') + '\n');
}
