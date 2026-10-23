// Shared home-page and case-study metadata. Keep project claims in one place.
export const catalog = {
  'higher-education-outcomes': {
    shortTitle: 'Higher Education Outcomes',
    category: 'Education analytics',
    date: 'Fall 2026',
    status: 'In progress',
    image: 'project-visual-1.svg',
    description: 'Testing how missing data change the institutions represented in an analysis of completion and earnings.',
    proof: '520 more institutions',
    proofContext: 'in the comparison excluding admission rate',
    relevance: 'Data quality · Model interpretation',
    tools: 'R · Regression · Lasso · PCA',
    featured: true,
    readingTime: '4 min read',
    application: 'Business & data analytics',
    applicationText: 'Before comparing performance across groups, check whether missing data change who is represented. The same discipline matters when comparing customers, products, or suppliers.',
    resources: [['See analysis evidence', '#findings']],
    workflow: [
      ['Prepare', 'Convert suppressed values to missing data and define institution groups.'],
      ['Compare', 'Track complete-case samples and compare regression specifications.'],
      ['Interpret', 'Separate sample coverage, model fit, and the limits of observational data.']
    ]
  },
  'global-beauty-spending': {
    shortTitle: 'Global Beauty Spending',
    category: 'Consumer research',
    date: 'Summer 2025',
    status: 'Interactive',
    image: 'project-visual-2.png',
    description: 'Comparing spending per person and spending relative to income across 50 countries.',
    proof: '50 countries',
    proofContext: 'two spending measures, with regional filters',
    relevance: 'Market comparison · Research synthesis',
    tools: 'R · R Shiny · ggplot2',
    featured: true,
    readingTime: '3 min + interactive preview',
    application: 'Market research & pricing research',
    applicationText: 'Compare both absolute spending and spending relative to income when framing market-research questions. These indicators help prioritize further investigation; they do not establish a profitable price or market-entry decision.',
    resources: [['Explore dashboard', '#explorer'], ['Inspect R code', 'https://github.com/TaeYiHam/Global-Beauty-Spending-Analysis/blob/main/app.R']],
    workflow: [
      ['Integrate', 'Combine socioeconomic indicators and secondary beauty-spending estimates.'],
      ['Explore', 'Compare regions, indicators, and spending definitions in R Shiny.'],
      ['Communicate', 'Explain the patterns alongside source comparability and interpretation limits.']
    ]
  },
  'spotify-music-graph': {
    shortTitle: 'Spotify Music Graph',
    category: 'Graph database',
    date: 'Spring 2026',
    status: 'Team project · Majority contribution',
    image: 'project-visual-3.svg',
    description: 'Restructuring music records into connected entities, then querying tracks, artists, albums, and genres.',
    proof: '7 query tasks',
    proofContext: '10 documented runtime trials per query',
    relevance: 'Data preparation · Relationship modeling',
    tools: 'Python · Neo4j · Cypher',
    featured: true,
    readingTime: '3 min read',
    application: 'Data & operations analytics',
    applicationText: 'Cleaning identifiers, splitting multi-value fields, and defining entity relationships are transferable to operational datasets. This project demonstrates those methods using music data; it does not claim supply-chain domain experience.',
    resources: [['View original presentation', 'https://github.com/TaeYiHam/Spotify-Music-Graph-Analysis/blob/main/Spotify%20Music%20Graph%20Project.pdf'], ['Inspect Cypher queries', 'https://github.com/TaeYiHam/Spotify-Music-Graph-Analysis/blob/main/cypher/queries.cypher']],
    workflow: [
      ['Prepare', 'Handle duplicate track IDs and split records with multiple artists.'],
      ['Model', 'Organize four entity types and define their relationships in Neo4j.'],
      ['Query', 'Explore seven query tasks and document repeated runtime trials.']
    ]
  },
  'coca-cola-pepsi-sentiment': {
    shortTitle: 'Coca-Cola & Pepsi', category: 'Sentiment analysis', date: 'Fall 2025',
    tools: 'Python · Sentiment analysis · Streamlit', readingTime: '2 min read',
    resources: [['View project repository', 'https://github.com/TaeYiHam/Coca-Pepsi-Stock-Sentiment-Analysis']]
  },
  'world-happiness': {
    shortTitle: 'World Happiness Factors', category: 'Statistical research', date: 'Fall 2023',
    tools: 'R · Correlation · Regression', readingTime: '2 min read',
    resources: [['View project repository', 'https://github.com/TaeYiHam/World-Happiness-Analysis']]
  }
};
