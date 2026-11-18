// Case-study content. Metadata shared with the home page lives in project-catalog.mjs.
export const projects = [
  {
    "slug": "higher-education-outcomes",
    "title": "Higher Education Outcomes Analysis",
    "meta": "Capstone · Fall 2026 · poster stage",
    "summary": "A College Scorecard capstone that compares Linear Regression, Lasso, and Random Forest for college completion and earnings, with every R sample checked against SQLite.",
    "takeaway": "Random Forest predicted both outcomes better than the linear models on held-out schools: test R² 0.54 vs 0.47 for completion and 0.60 vs 0.50 for earnings. Linear regression is still used to read the direction of each relationship.",
    "skills": "R · SQL (SQLite) · Python",
    "evidence": [
      [
        "1,618",
        "completion-model institutions"
      ],
      [
        "0.54",
        "Random Forest test R² for completion (linear: 0.47)"
      ],
      [
        "4 / 4",
        "R samples matched exactly in SQLite"
      ]
    ],
    "sections": [
      [
        "question",
        "The question",
        "<p>How do cost, financial aid, selectivity, enrollment, and institution type relate to college completion and earnings? And does Random Forest predict these outcomes better than linear models?</p>"
      ],
      [
        "data",
        "Data and sample",
        "<p>The audited source snapshot contains 6,273 institution records. Suppressed and non-numeric entries were treated as missing. Complete-case counts, meaning institutions with no missing values in a model’s fields, vary: 1,618 for the completion model, 2,138 for the model excluding admission rate, 1,949 for earnings, and 1,727 for PCA. The saved SQL missingness output reports admission rate missing for 69.55% of the source.</p>"
      ],
      [
        "contribution",
        "My contribution",
        "<p>Prepared institution-level College Scorecard data, assessed missingness, estimated completion and earnings regressions, compared samples with and without admission rate, applied 10-fold cross-validated Lasso, and performed standardized PCA. Compared Linear Regression, Lasso, and Random Forest on a shared train/test split and shared cross-validation folds. Built a Python-to-SQLite check that confirms each R sample contains the expected institutions.</p>"
      ],
      [
        "models",
        "Model comparison",
        "<p>Linear Regression, Lasso, and Random Forest (1,000 trees) were fit on the same 80/20 train/test split and evaluated on the same 10 cross-validation folds (seed 4001). The completion model uses admission rate, cost, Pell Grant share, enrollment, and institution type. The earnings model uses completion rate, cost, Pell Grant share, median debt, and institution type.</p><div class=\"table-scroll\" tabindex=\"0\" aria-label=\"Model comparison\"><table class=\"evidence-table\"><caption>Held-out performance · R² on the test set and averaged across 10 folds</caption><thead><tr><th scope=\"col\">Model</th><th scope=\"col\">Completion test R²</th><th scope=\"col\">Completion CV R²</th><th scope=\"col\">Earnings test R²</th><th scope=\"col\">Earnings CV R²</th></tr></thead><tbody><tr><th scope=\"row\">Linear Regression</th><td>0.4655</td><td>0.4676</td><td>0.4967</td><td>0.4980</td></tr><tr><th scope=\"row\">Lasso</th><td>0.4631</td><td>0.4677</td><td>0.4962</td><td>0.4980</td></tr><tr><th scope=\"row\">Random Forest</th><td><strong>0.5418</strong></td><td><strong>0.5298</strong></td><td><strong>0.5985</strong></td><td><strong>0.5919</strong></td></tr></tbody></table></div><p>Random Forest had a higher R² than Linear Regression in 9 of 10 folds for completion and 10 of 10 folds for earnings, so the gain is not an artifact of one lucky split. Test sets held 324 and 390 institutions.</p><h3>What drives each outcome</h3><p>For completion, the regression and Random Forest ranked predictors in the same order: cost of attendance first, then Pell Grant share. For earnings, Random Forest ranked completion rate and median debt highest, while the two methods disagreed on cost. Cost is correlated with completion rate (r = 0.61) and median debt (r = 0.56), which likely explains why its rank shifts between methods.</p>"
      ],
      [
        "findings",
        "Regression and PCA findings",
        "<p>Cost of attendance was positively associated with completion and earnings; Pell Grant participation was negatively associated with both, conditional on the other included predictors. Completion R² was 0.4834 and earnings R² was 0.5053, so each model accounted for roughly half of the variation in its outcome. These describe in-sample fit, not held-out prediction.</p><figure class=\"spec-toggle\" data-spec-toggle data-active=\"with\"><div class=\"spec-head\"><span class=\"kicker\">Completion model · two specifications</span><div class=\"spec-buttons\" role=\"group\" aria-label=\"Choose completion-model specification\" hidden><button type=\"button\" data-spec=\"with\" aria-pressed=\"true\">With admission rate</button><button type=\"button\" data-spec=\"without\" aria-pressed=\"false\">Without admission rate</button></div></div><dl class=\"spec-rows\"><div class=\"spec-row\" data-spec-row=\"with\"><dt>With admission rate</dt><dd><span class=\"spec-bar\"><span style=\"width:25.79%\"></span></span><span class=\"spec-values\"><strong>1,618</strong> complete cases · adjusted R² <strong>0.4815</strong></span></dd></div><div class=\"spec-row\" data-spec-row=\"without\"><dt>Without admission rate</dt><dd><span class=\"spec-bar\"><span style=\"width:34.08%\"></span></span><span class=\"spec-values\"><strong>2,138</strong> complete cases · adjusted R² <strong>0.4082</strong></span></dd></div></dl><p class=\"spec-detail\" data-spec-detail aria-live=\"polite\" hidden></p><figcaption>Bars are scaled to the 6,273 audited institution records. The two models use different samples, so this is not a controlled comparison.</figcaption></figure><p>Adjusted completion R² was 0.4815 with admission rate and 0.4082 without it. Lasso, a method that drops predictors adding little to the model, retained all predictor terms at the minimum-error penalty. In PCA, which condenses the four predictors into a few summary dimensions, PC1 contrasted cost with admission rates and Pell participation; PC2 was dominated by enrollment. Institution types overlap in the plot.</p><div class=\"gallery\"><figure><a class=\"chart-link\" href=\"../assets/capstone-pca.png\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open chart at full size\"><img src=\"../assets/capstone-pca.png\" width=\"1344\" height=\"960\" alt=\"PCA of 1,727 institutions with PC1 explaining 43.5 percent and PC2 explaining 26.8 percent of standardized predictor variance\" loading=\"lazy\" decoding=\"async\"><span class=\"chart-hint\">Open full size ↗</span></a><figcaption>Original capstone figure. The four predictors are admission rate, cost of attendance, Pell participation, and enrollment.</figcaption></figure></div><div class=\"table-scroll\" tabindex=\"0\" aria-label=\"Model evidence summary\"><table class=\"evidence-table\"><caption>Regression summary</caption><thead><tr><th scope=\"col\">Model</th><th scope=\"col\">Complete cases</th><th scope=\"col\">R²</th><th scope=\"col\">Adjusted R²</th></tr></thead><tbody><tr><th scope=\"row\">Completion</th><td>1,618</td><td>0.4834</td><td>0.4815</td></tr><tr><th scope=\"row\">Completion without admission rate</th><td>2,138</td><td>Not listed</td><td>0.4082</td></tr><tr><th scope=\"row\">Earnings</th><td>1,949</td><td>0.5053</td><td>Not listed</td></tr></tbody></table></div>"
      ],
      [
        "validation",
        "SQL validation & sample checks",
        "<p>Before reading any model result, I check that each R sample contains the institutions I expect. Python treats suppressed and non-numeric values as missing (the same rule used in R), loads the selected College Scorecard fields into an in-memory SQLite database, and rebuilds each sample with SQL.</p><div class=\"table-scroll\" tabindex=\"0\" aria-label=\"SQL sample-count comparison\"><table class=\"evidence-table\"><caption>Four analysis samples · SQL output and reported R counts</caption><thead><tr><th scope=\"col\">Analysis sample</th><th scope=\"col\">SQLite count</th><th scope=\"col\">Reported R count</th></tr></thead><tbody><tr><th scope=\"row\">Completion with admission</th><td>1,618</td><td>1,618</td></tr><tr><th scope=\"row\">Completion without admission</th><td>2,138</td><td>2,138</td></tr><tr><th scope=\"row\">Earnings</th><td>1,949</td><td>1,949</td></tr><tr><th scope=\"row\">PCA</th><td>1,727</td><td>1,727</td></tr></tbody></table></div><p>The 6,273 records have no duplicate UNITIDs. For all four samples, the set of UNITIDs exported from R is exactly the same as the set selected in SQL, not just the same count. The script writes the result to a CSV so the check can be rerun whenever the source file is refreshed.</p>"
      ],
      [
        "scope",
        "Interpretation and next steps",
        "<p>These are institution-level associations, not causal effects or estimates for individual students. Expensive schools may simply enroll students who would do well anywhere. Only four-year institutions are covered, and missing data limit generalization. The poster will be presented on December 10, and the final report is due December 15.</p><p class=\"case-note\">The source repository remains private; selected methods and aggregate results are summarized here.</p>"
      ]
    ],
    "materials": [
      [
        "Ask about the analysis and model comparison",
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
    "summary": "Transforming music records into a Neo4j graph database to explore relationships among tracks, artists, albums, and genres with Cypher, its query language.",
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
