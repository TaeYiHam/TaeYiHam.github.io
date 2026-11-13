// Shared home-page and case-study metadata. Keep project claims in one place.
export const catalog = {
  'higher-education-outcomes': {
    shortTitle: 'Higher Education Outcomes',
    category: 'Education analytics',
    date: 'Fall 2026',
    status: 'In progress',
    image: 'capstone-validation.svg',
    description: 'Comparing Linear Regression, Lasso, and Random Forest on College Scorecard data, with every R sample checked against SQLite.',
    proof: 'Random Forest test R² 0.54 vs 0.47 (completion)',
    proofContext: '0.60 vs 0.50 for earnings · all 4 R samples matched in SQL',
    relevance: 'Predictive modeling · Data validation · Statistical analysis',
    tools: 'R · SQL (SQLite) · Python',
    featured: true,
    readingTime: '5 min read',
    application: 'Business & data analytics',
    applicationText: 'Define inclusion rules, check identifiers and missing values, and make comparisons traceable before interpreting results. The Python-to-SQLite check confirms each model sample before any result is read, and the model comparison uses held-out data instead of in-sample fit. The same habits apply before a planning, pricing, or demand forecast is used.',
    resources: [['See model comparison', '#models'], ['See SQL validation', '#validation'], ['See regression findings', '#findings']],
    workflow: [
      ['Analyze in R', 'Clean selected fields and examine completion and earnings with regression, Lasso, and PCA.'],
      ['Audit in SQL', 'Use Python to load selected fields into SQLite, check identifiers, and compare each sample with the UNITIDs exported from R.'],
      ['Compare models', 'Fit Linear Regression, Lasso, and Random Forest on the same 80/20 split and the same 10 folds, then compare test and cross-validated R².']
    ]
  },
  'global-beauty-spending': {
    shortTitle: 'Global Beauty Spending',
    category: 'Consumer research',
    date: 'Summer 2025',
    status: 'Interactive',
    image: 'beauty-thumb.svg',
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
    image: 'spotify-thumb.svg',
    description: 'Restructuring music records into connected entities, then querying tracks, artists, albums, and genres.',
    proof: '7 query tasks',
    proofContext: '10 documented runtime trials per query',
    relevance: 'Data preparation · Relationship modeling',
    tools: 'Python · Neo4j · Cypher',
    featured: true,
    readingTime: '3 min read',
    application: 'Data & operations analytics',
    applicationText: 'Cleaning identifiers, splitting multi-value fields, and defining entity relationships are transferable to operational datasets. These methods help analysts avoid duplicated entities and inconsistent relationships in operational reporting.',
    resources: [['View original presentation', 'https://github.com/TaeYiHam/Spotify-Music-Graph-Analysis/blob/main/Spotify%20Music%20Graph%20Project.pdf'], ['Inspect Cypher queries', 'https://github.com/TaeYiHam/Spotify-Music-Graph-Analysis/blob/main/cypher/queries.cypher']],
    workflow: [
      ['Prepare', 'Handle duplicate track IDs and split records with multiple artists.'],
      ['Model', 'Organize four entity types and define their relationships in Neo4j.'],
      ['Query', 'Explore seven query tasks and document repeated runtime trials.']
    ]
  },
  'coca-cola-pepsi-sentiment': {
    shortTitle: 'Coca-Cola & Pepsi', category: 'Sentiment analysis', date: 'Fall 2025', image: 'sentiment-thumb.svg',
    tools: 'Python · Sentiment analysis · Streamlit', readingTime: '2 min read',
    resources: [['View project repository', 'https://github.com/TaeYiHam/Coca-Pepsi-Stock-Sentiment-Analysis']]
  },
  'world-happiness': {
    shortTitle: 'World Happiness Factors', category: 'Statistical research', date: 'Fall 2023', image: 'happiness-thumb.svg',
    tools: 'R · Correlation · Regression', readingTime: '2 min read',
    resources: [['View project repository', 'https://github.com/TaeYiHam/World-Happiness-Analysis']]
  }
};
