// Case-study content. Metadata shared with the home page lives in project-catalog.mjs.
export const projects = [
  {
    "slug": "higher-education-outcomes",
    "title": "Higher Education Outcomes Analysis",
    "meta": "Ongoing capstone · Fall 2026",
    "summary": "An ongoing College Scorecard analysis combining R statistical models, a SQLite data-quality audit, and an Excel validation report.",
    "takeaway": "Removing admission rate from the completion model made 520 more institutions usable. Because the sample and predictors both changed, this comparison cannot isolate the effect of admission rate.",
    "skills": "R · SQL (SQLite) · Excel · Python",
    "evidence": [
      [
        "1,618",
        "completion-model institutions"
      ],
      [
        "+520",
        "institutions in the broader comparison"
      ],
      [
        "70.3%",
        "PCA variance in the first two components"
      ]
    ],
    "sections": [
      [
        "question",
        "The question",
        "<p>How do cost, financial aid, selectivity, enrollment, and institution type relate to college completion and earnings?</p>"
      ],
      [
        "data",
        "Data and sample",
        "<p>The audited source snapshot contains 6,273 institution records. Suppressed and non-numeric entries were treated as missing. Complete-case counts vary: 1,618 for the completion model, 2,138 for the model excluding admission rate, 1,949 for earnings, and 1,727 for PCA. The saved SQL missingness output reports admission rate missing for 69.55% of the source.</p>"
      ],
      [
        "contribution",
        "My contribution",
        "<p>Prepared institution-level College Scorecard data, assessed missingness, estimated completion and earnings regressions, compared samples with and without admission rate, applied 10-fold cross-validated Lasso, and performed standardized PCA. Extended the project with a Python-to-SQLite audit and an Excel report for sample-count checks, institution-type summaries, and missingness review.</p>"
      ],
      [
        "findings",
        "Findings and evidence",
        "<p>Cost of attendance was positively associated with completion and earnings; Pell Grant participation was negatively associated with both, conditional on the other included predictors. Completion R² was 0.4834 and earnings R² was 0.5053. These describe in-sample fit, not held-out prediction.</p><figure class=\"spec-toggle\" data-spec-toggle data-active=\"with\"><div class=\"spec-head\"><span class=\"kicker\">Completion model · two specifications</span><div class=\"spec-buttons\" role=\"group\" aria-label=\"Choose completion-model specification\" hidden><button type=\"button\" data-spec=\"with\" aria-pressed=\"true\">With admission rate</button><button type=\"button\" data-spec=\"without\" aria-pressed=\"false\">Without admission rate</button></div></div><dl class=\"spec-rows\"><div class=\"spec-row\" data-spec-row=\"with\"><dt>With admission rate</dt><dd><span class=\"spec-bar\"><span style=\"width:25.79%\"></span></span><span class=\"spec-values\"><strong>1,618</strong> complete cases · adjusted R² <strong>0.4815</strong></span></dd></div><div class=\"spec-row\" data-spec-row=\"without\"><dt>Without admission rate</dt><dd><span class=\"spec-bar\"><span style=\"width:34.08%\"></span></span><span class=\"spec-values\"><strong>2,138</strong> complete cases · adjusted R² <strong>0.4082</strong></span></dd></div></dl><p class=\"spec-detail\" data-spec-detail aria-live=\"polite\" hidden></p><figcaption>Bars are scaled to the 6,273 audited institution records. The two models use different samples, so this is not a controlled comparison.</figcaption></figure><p>Adjusted completion R² was 0.4815 with admission rate and 0.4082 without it. Lasso retained all predictor terms at the minimum-error penalty. In PCA, PC1 contrasted cost with admission rates and Pell participation; PC2 was dominated by enrollment. Institution types overlap in the plot.</p><div class=\"gallery\"><figure><a class=\"chart-link\" href=\"../assets/capstone-pca.png\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open chart at full size\"><img src=\"../assets/capstone-pca.png\" alt=\"PCA of 1,727 institutions with PC1 explaining 43.5 percent and PC2 explaining 26.8 percent of standardized predictor variance\" loading=\"lazy\" decoding=\"async\"><span class=\"chart-hint\">Open full size ↗</span></a><figcaption>Original capstone figure. The four predictors are admission rate, cost of attendance, Pell participation, and enrollment.</figcaption></figure></div><div class=\"table-scroll\" tabindex=\"0\" aria-label=\"Model evidence summary\"><table class=\"evidence-table\"><caption>Regression summary</caption><thead><tr><th scope=\"col\">Model</th><th scope=\"col\">Complete cases</th><th scope=\"col\">R²</th><th scope=\"col\">Adjusted R²</th></tr></thead><tbody><tr><th scope=\"row\">Completion</th><td>1,618</td><td>0.4834</td><td>0.4815</td></tr><tr><th scope=\"row\">Completion without admission rate</th><td>2,138</td><td>Not listed</td><td>0.4082</td></tr><tr><th scope=\"row\">Earnings</th><td>1,949</td><td>0.5053</td><td>Not listed</td></tr></tbody></table></div>"
      ],
      [
        "validation",
        "SQL validation & sample checks",
        "<p>The extension audits 14 selected fields from 6,273 College Scorecard records. Python normalizes suppressed and non-numeric values, loads an in-memory SQLite database, and exports identifiers, sample-membership flags, missingness, and institution-type summaries.</p><div class=\"table-scroll\" tabindex=\"0\" aria-label=\"SQL sample-count comparison\"><table class=\"evidence-table\"><caption>Four analysis samples · SQL output and reported R counts</caption><thead><tr><th scope=\"col\">Analysis sample</th><th scope=\"col\">SQLite count</th><th scope=\"col\">Reported R count</th></tr></thead><tbody><tr><th scope=\"row\">Completion with admission</th><td>1,618</td><td>1,618</td></tr><tr><th scope=\"row\">Completion without admission</th><td>2,138</td><td>2,138</td></tr><tr><th scope=\"row\">Earnings</th><td>1,949</td><td>1,949</td></tr><tr><th scope=\"row\">PCA</th><td>1,727</td><td>1,727</td></tr></tbody></table></div><p>The saved audit has 6,273 unique, non-missing UNITIDs. All four SQL counts agree with the reported R counts. The project log also records exact R-to-SQL UNITID-set matches for all four samples, with zero IDs unique to either source.</p><h3>Repeatable checks</h3><p>The audit derives QA totals from the data rather than hard-coding them. Two synthetic-data tests cover numeric conversion and basic sample selection. A separate comparison script validates identifiers and inclusion flags, writes a reconciliation CSV, and returns a failure if any R and SQL sample differs.</p>"
      ],
      [
        "report",
        "Excel reporting",
        "<p>I used Python and openpyxl to generate a workbook from the SQL audit exports. The committed file contains four worksheets and eight comparison formulas.</p><div class=\"table-scroll\" tabindex=\"0\" aria-label=\"Excel report structure\"><table class=\"evidence-table\"><caption>What is inside the Excel report</caption><thead><tr><th scope=\"col\">Worksheet</th><th scope=\"col\">Purpose</th></tr></thead><tbody><tr><th scope=\"row\">Validation</th><td>Four count differences and four IF-based MATCH/REVIEW checks, plus identifier QA totals.</td></tr><tr><th scope=\"row\">Definitions</th><td>Variable definitions, missing-value rules, and fields required by each sample.</td></tr><tr><th scope=\"row\">Summary</th><td>Institution-type counts, available-observation counts, and outcome means.</td></tr><tr><th scope=\"row\">Missingness</th><td>Missing counts and percentages for the selected numeric fields and institution type.</td></tr></tbody></table></div><p>To refresh the report, rerun the SQL audit and regenerate the workbook.</p>"
      ],
      [
        "scope",
        "Interpretation and next steps",
        "<p>These are institution-level associations, not causal effects or estimates for individual students. Missing data limit generalization, and R² values describe in-sample fit. Next, I plan to compare a Random Forest model on a common sample.</p><p class=\"case-note\">The source repository remains private; selected methods and aggregate results are summarized here.</p>"
      ]
    ],
    "materials": [
      [
        "Ask about the analysis and validation report",
        "mailto:hamtaeyi0416@gmail.com?subject=Higher%20Education%20project%20details"
      ]
    ]
  },
  {
    "slug": "global-beauty-spending",
    "title": "Global Beauty Spending Analysis",
    "meta": "Academic project · Summer 2025",
    "summary": "An R Shiny project exploring beauty spending, economic development, and gender-related indicators across 50 countries.",
    "takeaway": "Spending per person and spending as a share of household income give different views of a market. Compare both before choosing markets for closer research.",
    "skills": "R · R Shiny · ggplot2",
    "evidence": [
      [
        "50",
        "countries"
      ],
      [
        "2023",
        "project data year"
      ],
      [
        "2",
        "spending measures"
      ]
    ],
    "sections": [
      [
        "contribution",
        "My contribution",
        "<p>Integrated country-level socioeconomic indicators and beauty-spending estimates. Built an R Shiny dashboard with regional filters, scatter plots, trend lines, Pearson correlations, box plots, and a bubble-chart view.</p>"
      ],
      [
        "findings",
        "Findings and evidence",
        "<p>Exploratory analysis suggested higher-income countries generally had higher spending per capita, while lower-income countries often devoted a larger share of household income to beauty spending. Regional differences remained visible.</p><div class=\"gallery\"><figure><a class=\"chart-link\" href=\"../assets/beauty-income-share.svg\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open chart at full size\"><img src=\"../assets/beauty-income-share.svg\" alt=\"GDP per capita versus beauty spending as a share of household income across 50 countries\" loading=\"lazy\" decoding=\"async\"><span class=\"chart-hint\">Open full size ↗</span></a><figcaption>Redrawn from the unchanged repository dataset. Point size represents female labor-force participation.</figcaption></figure></div>"
      ],
      [
        "explorer",
        "Explore the data",
        "EXPLORER"
      ],
      [
        "question",
        "The question",
        "<p>Do countries with similar levels of economic development and gender equality still differ in beauty spending, and what regional patterns appear?</p>"
      ],
      [
        "method",
        "A closer look at the method",
        "<p>The R Shiny app filters the same country-level dataset before updating its charts and statistics. The code below shows the preserved complete-case check used for the selected correlation.</p><details class=\"code-evidence\"><summary>Inspect the R correlation calculation</summary><pre><code>plot_data &lt;- filtered_data()\ncomplete_rows &lt;- complete.cases(\n  plot_data[[input$xvar]], plot_data[[input$yvar]]\n)\n\nif (sum(complete_rows) &lt; 3) {\n  return(\"Correlation: not enough complete observations\")\n}\n\ncor(\n  plot_data[[input$xvar]][complete_rows],\n  plot_data[[input$yvar]][complete_rows]\n)</code></pre><p class=\"case-note\">Excerpt from the public app.R. The browser preview below is a separate implementation using the same project CSV.</p></details>"
      ],
      [
        "scope",
        "Data and interpretation",
        "<p>The 2023 dataset combines GDP per capita, the Gender Inequality Index, female labor-force participation, and two spending measures. Socioeconomic indicators were drawn from World Bank, UNDP, and ILOSTAT sources. Beauty-spending values were manually compiled from secondary market reports and are project-level estimates rather than a standardized official dataset.</p><p>The sample is descriptive and does not establish causation or market profitability. Use it to identify questions for further research, then validate local demand, prices, distribution costs, and source comparability before recommending market entry or pricing.</p>"
      ]
    ],
    "materials": [
      [
        "View R Shiny source",
        "https://github.com/TaeYiHam/Global-Beauty-Spending-Analysis"
      ],
      [
        "Download project data (CSV)",
        "../assets/beauty-data.csv"
      ]
    ]
  },
  {
    "slug": "spotify-music-graph",
    "title": "Spotify Music Graph Analysis",
    "meta": "Team project · Spring 2026",
    "summary": "Transforming music records into a Neo4j graph to explore relationships among tracks, artists, albums, and genres.",
    "takeaway": "The project demonstrates data preparation, relationship modeling, and query analysis. I completed the majority of the work, from Python preparation to graph exploration.",
    "skills": "Python · Neo4j · Cypher",
    "evidence": [
      [
        "7",
        "Cypher query tasks"
      ],
      [
        "10",
        "runtime trials per query"
      ],
      [
        "4",
        "entity types"
      ]
    ],
    "sections": [
      [
        "contribution",
        "My contribution",
        "<p>I carried out the majority of the project work: preparing data in Python, organizing track, artist, album, and genre records for Neo4j, designing PERFORMED_BY, BELONGS_TO, and HAS_GENRE relationships, and analyzing the graph through seven Cypher query tasks.</p>"
      ],
      [
        "findings",
        "Queries and evidence",
        "<p>Queries explored popular tracks, title keywords, specific artists, upbeat/happy tracks, average popularity by genre, and top-genre counts. Repeating each query ten times documented runtime under the project setup.</p><div class=\"gallery\"><figure><a class=\"chart-link\" href=\"../assets/project-visual-3.svg\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open chart at full size\"><img src=\"../assets/project-visual-3.svg\" alt=\"Seven Cypher query tasks and average runtimes from ten trials each\" loading=\"lazy\" decoding=\"async\"><span class=\"chart-hint\">Open full size ↗</span></a><figcaption>Tasks and runtimes documented in the original team presentation.</figcaption></figure></div>"
      ],
      [
        "question",
        "The question",
        "<p>How can a graph model make relationships in music data easier to explore than a flat table?</p>"
      ],
      [
        "model",
        "From records to relationships",
        "<p>Duplicate track IDs and multiple artists in one field required preparation before import. Tracks, artists, albums, and genres became separate entities connected by PERFORMED_BY, BELONGS_TO, and HAS_GENRE relationships.</p><details class=\"code-evidence\"><summary>Inspect a documented Cypher query</summary><pre><code>MATCH (t:Track)-[:HAS_GENRE]-&gt;(g:Genre)\nRETURN g.name AS genre_name,\n       AVG(t.popularity) AS avg_popularity\nORDER BY avg_popularity DESC;</code></pre><p class=\"case-note\">Task 6, transcribed from the original presentation and preserved in the public query file. This example groups track popularity by linked genre; it does not measure listening demand.</p></details>"
      ],
      [
        "scope",
        "Documentation and limits",
        "<p>The repository preserves the original presentation and Cypher queries transcribed from screenshots. The original Python scripts and CSV files are unavailable, so it documents the workflow rather than providing a complete reproducible pipeline. Runtime measurements are not a SQL comparison or a production-scale benchmark.</p>"
      ]
    ],
    "materials": [
      [
        "Original presentation (PDF)",
        "https://github.com/TaeYiHam/Spotify-Music-Graph-Analysis/blob/main/Spotify%20Music%20Graph%20Project.pdf"
      ],
      [
        "Documented Cypher queries",
        "https://github.com/TaeYiHam/Spotify-Music-Graph-Analysis/blob/main/cypher/queries.cypher"
      ],
      [
        "Project documentation",
        "https://github.com/TaeYiHam/Spotify-Music-Graph-Analysis"
      ]
    ]
  },
  {
    "slug": "coca-cola-pepsi-sentiment",
    "title": "Coca-Cola & Pepsi: Stock Price and Public Sentiment",
    "meta": "Team project · Fall 2025",
    "summary": "Exploring changes in social-media sentiment alongside Coca-Cola and Pepsi stock-price movements.",
    "takeaway": "My contribution focused on sentiment data preparation and Streamlit visualizations, making public-opinion patterns easier to explore alongside stock-price trends.",
    "skills": "Python · Sentiment analysis · Streamlit",
    "evidence": [],
    "sections": [
      [
        "question",
        "The question",
        "<p>How do public-sentiment patterns change over time alongside stock-price movements?</p>"
      ],
      [
        "contribution",
        "My contribution",
        "<p>Collected and prepared social-media sentiment data, wrote Python sentiment scripts, cleaned the data, and built Streamlit dashboards comparing sentiment with stock-price trends.</p>"
      ],
      [
        "scope",
        "Team scope and interpretation",
        "<p>Stock prediction and the final report were primarily handled by a teammate. This case study covers my sentiment and dashboard work. Plotting the series together does not establish that sentiment predicts returns.</p>"
      ]
    ],
    "materials": [
      [
        "View project repository",
        "https://github.com/TaeYiHam/Coca-Pepsi-Stock-Sentiment-Analysis"
      ]
    ]
  },
  {
    "slug": "world-happiness",
    "title": "World Happiness Factors",
    "meta": "Academic project · Fall 2023",
    "summary": "An early statistics project exploring relationships between national happiness scores and social and economic factors.",
    "takeaway": "This project built my foundation in correlation, regression, and explaining statistical results with visual evidence.",
    "skills": "R · Correlation · Regression",
    "evidence": [],
    "sections": [
      [
        "question",
        "The question",
        "<p>How do GDP, social support, healthy life expectancy, and generosity relate to national happiness scores?</p>"
      ],
      [
        "methods",
        "Methods",
        "<p>Pearson correlation, multiple linear regression, scatterplots, and regional comparison in R.</p>"
      ],
      [
        "scope",
        "Project context",
        "<p>This is one of my earlier data projects. It represents foundational statistical analysis rather than a current predictive product. The observed relationships should not be interpreted as causal effects.</p>"
      ]
    ],
    "materials": [
      [
        "View project repository",
        "https://github.com/TaeYiHam/World-Happiness-Analysis"
      ]
    ]
  }
];
