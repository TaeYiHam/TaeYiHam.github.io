const repo={higher:"https://github.com/TaeYiHam/Higher-Education-Outcomes-Analysis",beauty:"https://github.com/TaeYiHam/Global-Beauty-Spending-Analysis",coke:"https://github.com/TaeYiHam/Coca-Pepsi-Stock-Sentiment-Analysis",spotify:"https://github.com/TaeYiHam/Spotify-Music-Graph-Analysis",happy:"https://github.com/TaeYiHam/World-Happiness-Analysis"};
const cases={
higher:`<div class="kicker">Case study · Ongoing · Fall 2026</div><h2 id="case-title">Higher Education Outcomes Analysis</h2><p class="summary">An ongoing capstone using institution-level College Scorecard data to examine relationships among completion, cost, financial aid, selectivity, student debt, and post-graduation earnings.</p><div class="evidence"><div><strong>6,273</strong><span>institutions in source</span></div><div><strong>14</strong><span>selected variables</span></div><div><strong>1,618</strong><span>completion model observations</span></div><div><strong>1,949</strong><span>earnings model observations</span></div></div><div class="casegrid"><div><h4>Question</h4><p>How are college costs, completion, Pell Grant participation, selectivity, and earnings related across U.S. institutions?</p></div><div><h4>What I did</h4><p>Reduced 3,308 raw variables to 14 focused variables across 6,273 institutions, assessed missingness, created exploratory views, ran pairwise correlations, and built preliminary linear regression models.</p></div><div><h4>Tools</h4><p>R · College Scorecard · EDA · Correlation · Linear Regression · Data Visualization</p></div><div><h4>Current status</h4><p>The completion model currently uses 1,618 complete observations and the earnings model 1,949. These models are preliminary and are being used to guide the next stage of the capstone; no causal claims are made.</p></div></div><section class="case-takeaway"><h3>Why the sample matters</h3><p>The source contains 6,273 institutions, but the preliminary completion and earnings models use different complete-case samples. Reviewing missing data and sample selection is part of interpreting these models responsibly.</p></section><div class="gallery"><figure><img src="assets/project-visual-1.svg" alt="Capstone data scope: 6,273 institutions, 3,308 source variables, and 14 selected variables"><figcaption>Analysis snapshot: source dimensions, selected variables, and workflow. Model findings are preliminary; this image summarizes scope rather than model performance.</figcaption></figure></div><p class="case-note">This capstone is in progress. The source repository is private; the summary above is available for review here.</p><a class="gh" href="mailto:hamtaeyi0416@gmail.com?subject=Higher%20Education%20project%20details">Ask about this project ↗</a>`,
beauty:`<div class="kicker">Case study · Summer 2025</div><h2 id="case-title">Global Beauty Spending Analysis</h2><p class="summary">An interactive R Shiny project exploring how beauty spending varies with economic development, gender inequality, and female labor-force participation across 50 countries.</p><div class="evidence"><div><strong>50</strong><span>countries</span></div><div><strong>2023</strong><span>data year</span></div><div><strong>R Shiny</strong><span>interactive exploration</span></div></div><div class="casegrid"><div><h4>Question</h4><p>Do countries with similar levels of economic development and gender equality still differ in beauty spending, and what regional patterns appear?</p></div><div><h4>What I did</h4><p>Integrated country-level socioeconomic and beauty-spending data and built a Shiny dashboard with scatter plots, trend lines, Pearson correlations, box plots, regional filters, and a bubble-chart view.</p></div><div><h4>Tools</h4><p>R · Shiny · ggplot2 · dplyr · readr · viridis · ggrepel</p></div><div><h4>Result / insight</h4><p>Exploratory analysis suggested higher-income countries generally had higher beauty spending per capita, while lower-income countries often devoted a larger share of income to beauty spending. Regional differences remained visible. These are descriptive associations, not causal effects.</p></div></div><section class="case-takeaway"><h3>What this means for comparison</h3><p>Spending per person and spending as a share of household income describe different aspects of a market. Comparing both helps avoid treating high absolute spending as the only measure of consumer demand.</p><h3>Data limitations</h3><p>Beauty-spending values are project-level estimates manually compiled from secondary market sources. The sample covers 50 countries in 2023; the figures are not a standardized official global dataset and do not establish causal effects.</p></section><div class="gallery"><figure><img src="assets/project-visual-2.png" alt="Scatter plot comparing GDP per capita with beauty spending as a share of household income across 50 countries"><figcaption>Visualization reproduced directly from the 50-country repository dataset: GDP per capita vs. beauty spending as a share of household income; point size represents female labor-force participation.</figcaption></figure></div><a class="gh" href="${repo.beauty}" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>`,
coke:`<div class="kicker">Case study · Fall 2025</div><h2 id="case-title">Coca-Cola & Pepsi: Stock Price and Public Sentiment</h2><p class="summary">A project combining social-media sentiment and stock-price data to explore changes in public sentiment alongside market movements.</p><div class="casegrid"><div><h4>My contribution</h4><p>Social-media sentiment collection and preparation, Python sentiment scripts, data cleaning, and Streamlit dashboards visualizing sentiment alongside stock-price trends.</p></div><div><h4>Portfolio role</h4><p>This team project developed my Python and visualization skills. Stock prediction and the final report were primarily handled by a teammate; this case study focuses on my sentiment and dashboard work.</p></div></div><a class="gh" href="${repo.coke}" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>`,
spotify:`<div class="kicker">Case study · Spring 2026</div><h2 id="case-title">Spotify Music Graph Analysis</h2><p class="summary">A group graph-database project that transformed a music dataset into a Neo4j knowledge graph and used Cypher to explore relationships among tracks, artists, albums, and genres.</p><div class="evidence"><div><strong>7</strong><span>Cypher query tasks</span></div><div><strong>10</strong><span>runtime trials per query</span></div><div><strong>Team</strong><span>academic project</span></div></div><div class="casegrid"><div><h4>Question</h4><p>How can a graph model make relationships in music data easier to explore than a flat table?</p></div><div><h4>Team workflow</h4><p>The project cleaned and restructured the source data with Python, organized track/artist/album/genre records, modeled PERFORMED_BY, BELONGS_TO, and HAS_GENRE relationships, and used seven Cypher query tasks to explore the graph.</p></div><div><h4>Tools</h4><p>Python · Neo4j · Cypher · CSV · Graph Database</p></div><div><h4>Result / insight</h4><p>The queries explored popular tracks, title keywords, specific artists, upbeat/happy tracks, average popularity by genre, and top-genre counts. Repeated runtime testing also highlighted practical issues around data cleaning and query performance.</p></div></div><section class="case-takeaway"><h3>Documentation and scope</h3><p>This was a team project. The repository preserves the original presentation and Cypher queries transcribed from its screenshots. The original Python scripts and CSV files are unavailable; the repository is a reconstruction of the documented work, not a complete reproducible pipeline.</p></section><div class="gallery"><figure><img src="assets/project-visual-3.svg" alt="Seven documented Cypher query tasks with average runtimes from ten trials per query"><figcaption>Query tasks and average runtimes documented in the original group presentation. Each query was run 10 times.</figcaption></figure></div><a class="gh" href="${repo.spotify}" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>`,
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
