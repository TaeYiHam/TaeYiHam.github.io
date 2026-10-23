# Tae Yi Ham — Portfolio

Personal portfolio website for **Tae Yi Ham**, a Data Science and Political Science student at The George Washington University.

The site highlights selected data analytics and research projects, technical skills, professional experience, and my resume.

## Featured Projects

- **Higher Education Outcomes Analysis** — R regression, Lasso, and PCA on College Scorecard data; Python-to-SQLite data validation; automated Excel reporting (openpyxl)
- **Global Beauty Spending Analysis** — R, R Shiny, ggplot2, cross-country analysis
- **Spotify Music Graph Analysis** — Python, Neo4j, Cypher, graph databases

## Built With

- HTML
- CSS
- JavaScript
- GitHub Pages

## Website

https://taeyiham.github.io

## Connect

- LinkedIn: https://www.linkedin.com/in/taeyi-ham
- GitHub: https://github.com/TaeYiHam
# Case-study pages and data preview

The existing vanilla HTML/CSS design is retained. Project pages in `projects/`
are generated from `scripts/case-content.mjs` and `scripts/build.mjs`:

```sh
node scripts/build.mjs
```

No package installation is needed. Edit the source content and regenerate the
pages together. Home-page links work without JavaScript; the print button uses
the browser's Print / Save PDF dialog.

The Beauty browser preview is a portfolio addition, separate from the original
R Shiny app. `assets/beauty-data.csv` is copied unchanged from the public project:
`TaeYiHam/Global-Beauty-Spending-Analysis`, `data/beauty_data_final_50.csv`,
blob `a30191e01a948729dafdc4d7b9f3e61e53d1be8d`.
Region membership follows that repository's `app.R`. Values are 2023 academic
project estimates; the preview does not claim current prices or market forecasts.
Pearson correlations are recalculated over the selected complete observations.

## Source editing and checks

- `scripts/home-template.html`: home layout and personal introduction.
- `scripts/project-catalog.mjs`: shared project names, dates, tools, card evidence,
  business relevance, workflow steps and primary resource links.
- `scripts/case-content.mjs`: case-study narrative, figures and supporting materials.
- `scripts/build-home.mjs` and `scripts/build.mjs`: dependency-free static generation.
- `csv.mjs`: CSV parsing, missing-value conversion and descriptive correlation.

Run from the repository root:

```sh
node scripts/build.mjs
node --test tests/data.test.mjs
python scripts/check-site.py
```

The optional HTML check uses Python `lxml`; the website and build do not require it.
Commit generated `index.html` and `projects/*.html` alongside their source edits.
The site remains usable without JavaScript; the interactive preview requires it.

### Evidence provenance

The Spotify example query is Task 6 in the preserved public
`Spotify-Music-Graph-Analysis/cypher/queries.cypher` file (blob
`8cd1c92c26b5321762b3b65a4fdb7f14c2da325f`). Its original Python and CSV files
remain unavailable. The Beauty R excerpt is from the public `app.R` (blob
`bafd4c041177539b943d97163d873e0605451bbd`). Capstone summary values are
transcribed from Weekly Updates #5 and #6; the source remains private.
Business-relevance descriptions explain transferable methods, not additional
employment experience or measured commercial impact.

### Capstone validation extension, October 23, 2026

The capstone card and case study now describe the SQLite audit, Python import
and report scripts, and Excel count-check workbook in the private capstone
repository. Only selected methods and aggregate results are presented here.
The raw data, private scripts, membership file, and workbook are not published
in this website repository.

Evidence reviewed: `RunValidation.py`, `sql/CollegeValidation.sql`,
`validation/sample_counts.csv`, `validation/sample_membership.csv`,
`validation/missingness.csv`, `validation/institution_type_summary.csv`,
`BuildReport.py`, the saved Excel workbook, and the Rmd source. The saved
membership file has 6,273 distinct IDs and yields the four reported counts.
The workbook contains four worksheets and difference/IF formulas; no native
PivotTables or chart objects were found in the reviewed file.

The original source CSV was not rerun during this website update. The Rmd was
not executed, and exact R-to-SQL membership or numerical equivalence has not
been established. The site distinguishes reported count agreement from that
remaining reconciliation. Existing regression and PCA figures remain tied to
Weekly Updates #5 and #6.
