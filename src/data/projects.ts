export type Project = {
  number: string
  name: string
  category: string
  description: string
  technology: string[]
  problem: string
  url: string
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'AlgalPathogenRisk-ML',
    category: 'Computational Biology / Bioprocess Risk',
    description:
      'Research prototype for computational risk assessment in algal cultivation. It audits the public GSE128981 Chlamydomonas reinhardtii dataset and provides a FastAPI service with a dataset-audit endpoint and a break-even economics endpoint. No risk model is trained yet, because the dataset has no infection, stress or culture-collapse labels.',
    technology: ['Python', 'FastAPI', 'Pydantic', 'pandas', 'NumPy', 'pytest', 'MkDocs'],
    problem: 'Algal cultures can fail from biological threats and environmental stress. An early-warning signal needs outcome-labelled data and calibration at low event rates before any risk output can be trusted.',
    url: 'https://github.com/sunilnarayan419-ui/AlgalPathogenRisk-ML',
  },
  {
    number: '02',
    name: 'Churn Handset Targeting',
    category: 'Machine Learning / Telecom Analytics',
    description:
      'Built from the GCI World 2026 final assignment. A validated pipeline with a calibrated gradient-boosting model, base-rate adjustment, break-even economics, pilot sizing and a FastAPI scoring service. Reported test-set ROC-AUC is 0.693 on the supplied coursework data, not production performance.',
    technology: ['Python', 'scikit-learn', 'pandas', 'FastAPI', 'pytest', 'Docker', 'GitHub Actions'],
    problem: 'Which customers with ageing handsets are at risk of churning, and what would a retention offer have to achieve to pay for itself? Predictive association is not causal impact, so the output is a randomised pilot design.',
    url: 'https://github.com/sunilnarayan419-ui/churn-handset-targeting',
  },
  {
    number: '03',
    name: 'Network Biology for PaperLeet',
    category: 'Open Source / Network Biology',
    description:
      'Open-source educational contribution to PaperLeet: six network-biology exercises and a learning path (degree distributions, centrality, connected components, shortest paths, feed-forward loops, greedy modularity), merged upstream. I contributed this section; I do not maintain the PaperLeet platform.',
    technology: ['Python', 'Graph algorithms', 'Git and GitHub'],
    problem: 'Biological interaction maps and pathways are networks, and graph algorithms give precise answers to questions biologists already ask. PaperLeet had no network-biology section.',
    url: 'https://github.com/sunilnarayan419-ui/network-biology-collection',
  },
  {
    number: '04',
    name: 'Bio-Inspired Information Processing Infrastructure',
    category: 'Conceptual Research / Systems Architecture',
    description:
      'Early-stage research plan exploring whether principles of alternative splicing can inspire fault-tolerant backend architecture: hypotheses, a biology-to-computation mapping (each row still a hypothesis), integrity rules and an experiment design. Conceptual; no benchmarks or validated results yet.',
    technology: ['Python', 'FastAPI (planned)', 'Docker (planned)'],
    problem: 'Can one piece of information take several controlled, valid processing paths, the way one pre-mRNA yields different products? The engineering hypothesis is still untested.',
    url: 'https://github.com/sunilnarayan419-ui/bio_inspired_information_processing_infrastructure',
  },
  {
    number: '05',
    name: 'Home Credit Default Risk',
    category: 'Predictive Analytics / Credit Risk',
    description:
      'Notebook-based predictive analytics project that evaluates loan default risk using financial datasets. Exploratory analysis and modelling in Jupyter; no performance figures are claimed here.',
    technology: ['Python', 'Jupyter', 'pandas', 'scikit-learn'],
    problem: 'Classify whether a loan applicant is likely to default when classes are imbalanced and errors have different costs.',
    url: 'https://github.com/sunilnarayan419-ui/Home_credit_default_risk',
  },
]