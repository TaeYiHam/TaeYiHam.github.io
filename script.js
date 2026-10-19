const repo={higher:"https://github.com/TaeYiHam/Higher-Education-Outcomes-Analysis",beauty:"https://github.com/TaeYiHam/Global-Beauty-Spending-Analysis",coke:"https://github.com/TaeYiHam/Coca-Pepsi-Stock-Sentiment-Analysis",spotify:"https://github.com/TaeYiHam/Spotify-Music-Graph-Analysis",happy:"https://github.com/TaeYiHam/World-Happiness-Analysis"};
const cases={
higher:`<div class="kicker">Case study · Ongoing · Fall 2026</div><h2 id="case-title">Higher Education Outcomes Analysis</h2><p class="summary">An ongoing College Scorecard capstone examining completion, cost, financial aid, and earnings across U.S. institutions. The work combines missing-data assessment, regression, Lasso, and PCA to understand both the observed patterns and which institutions the analysis represents.</p>
<div class="evidence"><div><strong>1,618</strong><span>completion-model institutions</span></div><div><strong>0.4834</strong><span>completion R² · in sample</span></div><div><strong>0.5053</strong><span>earnings R² · in sample</span></div><div><strong>70.3%</strong><span>PCA variance in PC1 + PC2</span></div></div>
<div class="casegrid"><div><h4>Question</h4><p>How do institutional characteristics relate to completion and earnings, and how does missing information affect the institutions included in the analysis?</p></div><div><h4>What I did</h4><p>Prepared institution-level data from a source with 6,273 institutions, reviewed missingness, estimated completion and earnings regressions, compared completion samples with and without admission rate, applied 10-fold cross-validated Lasso, and performed standardized PCA on four numeric predictors.</p></div><div><h4>Methods</h4><p>R · EDA · Complete-case analysis · Multiple linear regression · Lasso · Principal component analysis</p></div><div><h4>Preliminary findings</h4><p>Cost of attendance was positively associated with completion and earnings; Pell Grant participation was negatively associated with both, conditional on the other included predictors. These institution-level associations do not establish causal effects.</p></div></div>
<section class="case-takeaway"><h3>Missing data change who is represented</h3><p>Admission rate was missing for 69.6% of institutions in the source. Excluding it increased the usable completion-model sample from 1,618 to 2,138. Adjusted R² was 0.4815 with admission rate and 0.4082 without it. Because both the predictor set and the sample changed, this comparison does not isolate the contribution of admission rate.</p></section>
<div class="gallery"><figure><img src="assets/project-visual-1.svg?v=20261019b" alt="Completion-model sample comparison: 1,618 institutions with admission rate, 2,138 without; 520 additional institutions"><figcaption>Replotted from the complete-case counts reported in Weekly Update #5. This is a sample-coverage comparison, not a claim of improved prediction.</figcaption></figure><figure><img src="assets/capstone-pca.png" alt="PCA scatter plot of 1,727 institutions: PC1 explains 43.5 percent and PC2 explains 26.8 percent of standardized predictor variance"><figcaption>Original PCA figure from Weekly Update #6. The four standardized predictors are admission rate, cost of attendance, Pell Grant participation, and undergraduate enrollment.</figcaption></figure></div>
<section class="case-takeaway"><h3>What PCA adds</h3><p>Across 1,727 complete observations, PC1 contrasted higher cost with higher admission rates and Pell participation. PC2 was dominated by undergraduate enrollment. Institution types overlap in the plot; the first two components capture 70.3% of standardized predictor variance, with 29.7% outside this view.</p><h3>Model scope and next steps</h3><p>The earnings regression used 1,949 institutions. Reported regression R² values describe in-sample fit, not held-out predictive performance. Lasso retained all predictor terms at the selected minimum-error penalty. Missing data limit generalization to the full source dataset. Next steps include comparing Random Forest with linear regression and Lasso on a common sample and evaluation procedure, then developing the dashboard.</p></section>
<p class="case-note">Sources: my Weekly Updates #5 and #6. This capstone is ongoing and the source repository is private.</p><a class="gh" href="mailto:hamtaeyi0416@gmail.com?subject=Higher%20Education%20project%20details">Ask about this project ↗</a>`,
beauty:`<div class="kicker">Case study · Summer 2025</div><h2 id="case-title">Global Beauty Spending Analysis</h2><p class="summary">An interactive R Shiny project exploring how beauty spending varies with economic development, gender inequality, and female labor-force participation across 50 countries.</p><div class="evidence"><div><strong>50</strong><span>countries</span></div><div><strong>2023</strong><span>data year</span></div><div><strong>R Shiny</strong><span>interactive exploration</span></div></div><div class="casegrid"><div><h4>Question</h4><p>Do countries with similar levels of economic development and gender equality still differ in beauty spending, and what regional patterns appear?</p></div><div><h4>What I did</h4><p>Integrated country-level socioeconomic and beauty-spending data and built a Shiny dashboard with scatter plots, trend lines, Pearson correlations, box plots, regional filters, and a bubble-chart view.</p></div><div><h4>Tools</h4><p>R · Shiny · ggplot2 · dplyr · readr · viridis · ggrepel</p></div><div><h4>Result / insight</h4><p>Exploratory analysis suggested higher-income countries generally had higher beauty spending per capita, while lower-income countries often devoted a larger share of income to beauty spending. Regional differences remained visible. These are descriptive associations, not causal effects.</p></div></div><section class="case-takeaway"><h3>What this means for comparison</h3><p>Spending per person and spending as a share of household income describe different aspects of a market. Comparing both helps avoid treating high absolute spending as the only measure of consumer demand.</p><h3>Data limitations</h3><p>Beauty-spending values are project-level estimates manually compiled from secondary market sources. The sample covers 50 countries in 2023; the figures are not a standardized official global dataset and do not establish causal effects.</p></section><div class="gallery"><figure><img src="assets/project-visual-2.png" alt="Scatter plot comparing GDP per capita with beauty spending as a share of household income across 50 countries"><figcaption>Visualization reproduced directly from the 50-country repository dataset: GDP per capita vs. beauty spending as a share of household income; point size represents female labor-force participation.</figcaption></figure></div><a class="gh" href="${repo.beauty}" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>`,
coke:`<div class="kicker">Case study · Fall 2025</div><h2 id="case-title">Coca-Cola & Pepsi: Stock Price and Public Sentiment</h2><p class="summary">A project combining social-media sentiment and stock-price data to explore changes in public sentiment alongside market movements.</p><div class="casegrid"><div><h4>My contribution</h4><p>Social-media sentiment collection and preparation, Python sentiment scripts, data cleaning, and Streamlit dashboards visualizing sentiment alongside stock-price trends.</p></div><div><h4>Portfolio role</h4><p>This team project developed my Python and visualization skills. Stock prediction and the final report were primarily handled by a teammate; this case study focuses on my sentiment and dashboard work.</p></div></div><a class="gh" href="${repo.coke}" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>`,
spotify:`<div class="kicker">Case study · Spring 2026</div><h2 id="case-title">Spotify Music Graph Analysis</h2><p class="summary">A group graph-database project that transformed a music dataset into a Neo4j knowledge graph and used Cypher to explore relationships among tracks, artists, albums, and genres.</p><div class="evidence"><div><strong>7</strong><span>Cypher query tasks</span></div><div><strong>10</strong><span>runtime trials per query</span></div><div><strong>Team</strong><span>academic project</span></div></div><div class="casegrid"><div><h4>Question</h4><p>How can a graph model make relationships in music data easier to explore than a flat table?</p></div><div><h4>My contribution</h4><p>I completed most of the work on this team project. The workflow covered Python data preparation, organizing tracks, artists, albums, and genres for Neo4j, modeling PERFORMED_BY, BELONGS_TO, and HAS_GENRE relationships, and analyzing the graph with seven Cypher query tasks.</p></div><div><h4>Tools</h4><p>Python · Neo4j · Cypher · CSV · Graph Database</p></div><div><h4>Result / insight</h4><p>The queries explored popular tracks, title keywords, specific artists, upbeat/happy tracks, average popularity by genre, and top-genre counts. Repeated runtime testing also highlighted practical issues around data cleaning and query performance.</p></div></div><section class="case-takeaway"><h3>Documentation and scope</h3><p>This was a team project. The repository preserves the original presentation and Cypher queries transcribed from its screenshots. The original Python scripts and CSV files are unavailable; the repository is a reconstruction of the documented work, not a complete reproducible pipeline.</p></section><div class="gallery"><figure><img src="assets/project-visual-3.svg" alt="Seven documented Cypher query tasks with average runtimes from ten trials per query"><figcaption>Query tasks and average runtimes documented in the original group presentation. Each query was run 10 times.</figcaption></figure></div><a class="gh" href="${repo.spotify}" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>`,
happy:`<div class="kicker">Case study · Fall 2023</div><h2 id="case-title">World Happiness Factors</h2><p class="summary">An early statistics project examining how GDP, social support, healthy life expectancy, and generosity relate to national happiness scores.</p><div class="casegrid"><div><h4>Methods</h4><p>Pearson correlation, multiple linear regression, scatterplots, and regional comparison.</p></div><div><h4>Role in portfolio</h4><p>This was one of my earlier data projects and gave me experience with correlation, regression, and statistical visualization in R.</p></div></div><a class="gh" href="${repo.happy}" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>`
};
const modal = document.getElementById("modal");
const dialog = modal.querySelector(".sheet");
const page = document.querySelector(".wrap");
let previousFocus = null;
let previousOverflow = "";
function openCase(key) {
  if (!cases[key]) return;
  previousFocus = document.activeElement;
  previousOverflow = document.body.style.overflow;
  document.getElementById("case").innerHTML = cases[key];
  modal.hidden = false;
  modal.classList.add("show");
  modal.scrollTop = 0;
  page.inert = true;
  document.body.style.overflow = "hidden";
  dialog.focus();
}
function closeCase() {
  if (modal.hidden) return;
  modal.hidden = true;
  modal.classList.remove("show");
  page.inert = false;
  document.body.style.overflow = previousOverflow;
  if (previousFocus && previousFocus.isConnected) previousFocus.focus();
}
document.querySelectorAll(".project[data-case]").forEach(card => {
  const button = card.querySelector(".case-link");
  button.setAttribute("aria-label", "View case study: " + card.querySelector("h3").textContent);
  card.addEventListener("click", () => openCase(card.dataset.case));
});
document.querySelectorAll(".journey-row[data-case]").forEach(button => {
  button.addEventListener("click", () => openCase(button.dataset.case));
});
modal.querySelector(".close").addEventListener("click", closeCase);
modal.addEventListener("click", event => { if (event.target === modal) closeCase(); });
document.addEventListener("keydown", event => {
  if (modal.hidden) return;
  if (event.key === "Escape") { event.preventDefault(); closeCase(); return; }
  if (event.key !== "Tab") return;
  const controls = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')];
  const first = controls[0], last = controls[controls.length - 1];
  if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
    event.preventDefault(); last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault(); first.focus();
  }
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (!target) return;
    event.preventDefault();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({behavior: reducedMotion ? "instant" : "smooth"});
    history.replaceState(null, "", location.pathname + location.search);
  });
});
