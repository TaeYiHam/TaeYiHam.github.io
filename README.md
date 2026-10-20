# Tae Yi Ham — Portfolio

Personal portfolio website for **Tae Yi Ham**, a Data Science and Political Science student at The George Washington University.

The site highlights selected data analytics and research projects, technical skills, professional experience, and my resume.

## Featured Projects

- **Higher Education Outcomes Analysis** — R, College Scorecard, regression, exploratory data analysis
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
