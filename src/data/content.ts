// Single source of truth for everything the site says about Sunil.
//
// Content rules (also in README):
//  1. Source order: repository code and README > the GitHub/research overview > LinkedIn > ResearchGate.
//  2. Prototype work is labelled a prototype, conceptual work conceptual, and no result is shown
//     unless the repository documents it.
//  3. Projects mirror repositories on github.com/sunilnarayan419-ui. `npm run verify:projects`
//     checks every link. `npm run check:content` blocks the repositories excluded by the owner.
//  4. Fields marked CONFIRM are things only the owner can verify; they are shown as plainly as the
//     evidence allows and listed in the hand-over notes.

export const profile = {
  name: "Sunil Mandloi",
  email: "sunilnarayan419@gmail.com",
  github: "https://github.com/sunilnarayan419-ui",
  linkedin: "https://www.linkedin.com/in/sunil-mandloi-1365582aa",
  researchgate: "https://www.researchgate.net/profile/Sunil-Mandloi-2",
  site: "https://sunil-narayan.netlify.app/",
  siteLabel: "sunil-narayan.netlify.app",
};

export const nav = [
  { id: "projects", label: "Projects" },
  { id: "framework", label: "Framework" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  headline: "Engineering at the Intersection of Biology, AI, and Biomanufacturing.",
  lead:
    "I'm an Integrated M.Sc. Life Sciences student at the University of Hyderabad, building computational tools and data-driven systems to investigate biological problems and translate scientific understanding into practical applications.",
  direction:
    "My longer-term interest is AI-enabled biomanufacturing: using computational biology and data to improve how valuable ingredients are made from plant, algal, microbial and cell-based systems. Today that means small, honest projects that connect a biological question to a model, a test and a cost.",
};

export const snapshot = [
  {
    label: "Studying",
    value: "Integrated M.Sc. Life Sciences",
    detail: "University of Hyderabad, Centre for Integrated Studies",
  },
  {
    label: "Programme",
    value: "GCI Scholar",
    detail: "GCI World, Matsuo-Iwasawa Lab, University of Tokyo. A learning programme, not a research placement.",
  },
  {
    label: "Internship",
    value: "R&D Intern, Epochfolio",
    detail: "July to October 2026. Research, market and financial analysis.",
  },
  {
    label: "Open source",
    value: "PaperLeet contributor",
    detail: "Six network-biology exercises and a learning path.",
  },
  {
    label: "Working with",
    value: "Python, ML, biotech translation",
    detail: "FastAPI, scikit-learn, pandas, pytest; computational and molecular biology.",
  },
] as const;

// ---------------------------------------------------------------------------
// Framework: From biology to industry
// ---------------------------------------------------------------------------
export const framework = {
  intro:
    "This is the order I try to work in. It is a developing framework, not a claim that every project has completed every stage. The algal project above shows how far one of them has actually got.",
  stages: [
    {
      name: "Biological problem",
      does: "Define the mechanism, organism, process or production constraint.",
      algal: "Algal cultures can fail from biological threats and environmental stress.",
    },
    {
      name: "Data and evidence",
      does: "Identify measurements, datasets, literature and what is uncertain.",
      algal: "Audited a public Chlamydomonas dataset (GEO GSE128981) and found it has no culture-failure labels.",
    },
    {
      name: "Computational modelling",
      does: "Build the analysis, model, algorithm or simulation.",
      algal: "Not started on purpose. A model needs outcome labels first.",
    },
    {
      name: "Validation",
      does: "Test with reproducible splits, suitable metrics or experiments.",
      algal: "Planned: leakage-safe splits, calibration at low event rates, external data.",
    },
    {
      name: "Economics",
      does: "Estimate cost, value, downside and feasibility.",
      algal: "A break-even endpoint exists; it needs facility-specific costs to mean anything.",
    },
    {
      name: "Engineering and translation",
      does: "Turn validated insight into a tool, workflow or decision aid.",
      algal: "An API skeleton exists. No biological risk output is emitted, by design.",
    },
  ],
  note: "Worked example: AlgalPathogenRisk-ML. Not commercially validated.",
};

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export type StatusKind = "prototype" | "implemented" | "conceptual" | "contribution" | "notebook";

export interface Project {
  id: string;
  name: string;
  positioning: string;
  status: string;
  statusKind: StatusKind;
  problem: string;
  why: string;
  contribution: string;
  stack: string[];
  implemented: string[];
  notYet: string[];
  evidence?: string;
  learned: string;
  repo: string;
  more?: { label: string; href: string }[];
  /** Open by default in the list. */
  open?: boolean;
}

// Exactly the five projects the owner chose to feature. Nothing else is listed.
export const projects: Project[] = [
  {
    id: "algal",
    name: "AlgalPathogenRisk-ML",
    positioning: "Computational risk assessment for algal cultivation and bioprocess resilience.",
    status: "Research prototype",
    statusKind: "prototype",
    open: true,
    problem:
      "Microalgal production can collapse when cultures face biological threats or environmental stress. An early-warning signal could let operators investigate before large losses.",
    why:
      "Culture failure is a direct production and cost risk. The interesting modelling problem is rare events: a useful warning system has to be calibrated when failures are uncommon and false alarms cost money.",
    contribution:
      "I wrote the repository: a metadata audit of the public GSE128981 dataset (Chlamydomonas reinhardtii), a FastAPI service, a break-even economics endpoint, and the documentation of what the data can and cannot support.",
    stack: ["Python", "FastAPI", "Pydantic", "pandas", "NumPy", "pytest", "MkDocs", "scikit-learn (planned baseline)", "NetworkX (optional, planned)"],
    implemented: [
      "Audit script for the GEO series-matrix metadata, also exposed as an API endpoint.",
      "FastAPI service with health, dataset-audit and break-even economics endpoints.",
      "Project scaffold: configs, docs, notebooks, tests folder and a documented development sequence.",
    ],
    notYet: [
      "No risk model. GSE128981 compares wild-type, srta mutant and complemented strains. Its metadata has no labels for infection, stress or culture collapse.",
      "The API deliberately returns no biological risk probabilities until outcome-labelled data and a validated model exist.",
      "No calibration, external validation or facility cost data. Not validated pathogen detection and not commercially ready.",
    ],
    evidence: "No model performance is reported, because no valid outcome labels exist yet. A genotype classifier would be a different task.",
    learned:
      "A dataset's labels decide which question it can answer. Writing the limitation first stopped me from building a confident model of the wrong thing.",
    repo: "https://github.com/sunilnarayan419-ui/AlgalPathogenRisk-ML",
    more: [
      { label: "GEO GSE128981", href: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE128981" },
      { label: "Associated paper (PMID 33293544)", href: "https://pubmed.ncbi.nlm.nih.gov/33293544/" },
    ],
  },
  {
    id: "churn",
    name: "Churn Handset Targeting",
    positioning: "Machine learning for telecom churn analysis and handset-targeting decisions, ending in a pilot design.",
    status: "Implemented, coursework data",
    statusKind: "implemented",
    open: true,
    problem:
      "A telecom operator, anonymised as Company A, wants to reduce churn by targeting customers whose handsets are ageing. Who is at risk, and what would a retention offer have to achieve to pay for itself?",
    why:
      "Ranking customers is easy to over-sell. The business decision depends on the real base rate, the cost of contact and whether an offer causes retention at all, which only a randomised pilot can show.",
    contribution:
      "Built from the GCI World 2026 final assignment. I wrote the pipeline end to end: data validation, features, a calibrated gradient-boosting model, base-rate adjustment, break-even economics, pilot sizing and a FastAPI scoring service. Merged pull requests added retention-simulation scenarios and analytical reports.",
    stack: ["Python", "scikit-learn", "pandas", "FastAPI", "Pydantic", "pytest", "Ruff", "Docker", "GitHub Actions", "Neo4j (optional)", "Manubot"],
    implemented: [
      "Validation of the two source files, 1:1 join and quality checks; 97 model features after exclusions.",
      "HistGradientBoosting with Platt calibration, then a prior-shift adjustment from the sample's ~49.6% churn to an assumed ~1% monthly rate.",
      "Break-even save-rate maths and a two-arm randomised pilot sizing endpoint.",
      "API endpoints for scoring, batch scoring, economics and pilot size; CI, model and data cards.",
      "Experimental YAML scenario layer with a MiroFish adapter.",
    ],
    notYet: [
      "Original assignment files are not distributed, so the headline results cannot be regenerated from the public repository; the test suite uses synthetic fixtures.",
      "Associations, not treatment effects. The ~1% base rate is an assumption, and simulation save rates are illustrative.",
      "The repository says not to use it for credit, eligibility or other consequential individual decisions.",
    ],
    evidence:
      "Reported test-set ROC-AUC 0.693 (bootstrap 95% CI 0.687 to 0.701) on the supplied assignment data: moderate ranking ability, where 0.5 is chance. This is a coursework test-set figure taken from the repository README, not production performance.",
    learned:
      "Predictive association is not causal impact. The output I trust most is the recommendation: a capped, randomised pilot with a stop rule.",
    repo: "https://github.com/sunilnarayan419-ui/churn-handset-targeting",
  },
  {
    id: "paperleet",
    name: "Network biology for PaperLeet",
    positioning: "Open-source educational work connecting biological networks with practical algorithmic problem-solving.",
    status: "Open-source contribution",
    statusKind: "contribution",
    open: true,
    problem:
      "PaperLeet is an open-source library for learning methods by implementing them from papers. It had no network-biology section.",
    why:
      "Much of molecular biology is a network problem: interactions, regulation and pathways. Graph algorithms give precise answers to questions biologists already ask.",
    contribution:
      "I opened the issue proposing a Network Biology section and submitted the pull request \"Add six network biology exercises and learning path\", which was merged into PaperLeet/paperleet.github.io. I did not build or maintain the PaperLeet platform; that belongs to its maintainers.",
    stack: ["Python", "Graph algorithms", "Git and GitHub", "pull request workflow"],
    implemented: [
      "Degree distributions: finding hubs in an interaction network.",
      "Centrality: ranking nodes that may act as key regulators or bottlenecks.",
      "Connected components: separating modules or disconnected subsystems.",
      "Shortest paths: the fewest steps between two molecules in a pathway.",
      "Feed-forward loops: counting a recurring regulatory motif.",
      "Greedy modularity: grouping nodes into candidate functional communities.",
    ],
    notYet: [
      "Teaching exercises on small graphs. They illustrate the algorithms and do not analyse real experimental networks.",
    ],
    learned:
      "Writing an exercise forces you to say exactly what an algorithm assumes. A hub in a graph is not automatically an essential gene.",
    repo: "https://github.com/sunilnarayan419-ui/network-biology-collection",
    more: [
      { label: "PaperLeet site repository", href: "https://github.com/PaperLeet/paperleet.github.io" },
      { label: "My pull requests there", href: "https://github.com/PaperLeet/paperleet.github.io/pulls?q=is%3Apr+author%3Asunilnarayan419-ui" },
    ],
  },
  {
    id: "bio-inspired",
    name: "Bio-Inspired Information Processing Infrastructure",
    positioning: "Exploring whether principles of alternative splicing can inspire fault-tolerant backend architecture.",
    status: "Conceptual research, early stage",
    statusKind: "conceptual",
    problem:
      "Can the way one pre-mRNA is processed into different valid products, depending on context, inspire a backend where one piece of information can take several controlled, valid processing paths?",
    why:
      "It is a disciplined way to practise biology-to-engineering translation: state the biology, abstract only what holds up, then test the engineering claim against a conventional baseline.",
    contribution:
      "I wrote the research plan: hypotheses, questions, a biology-to-computation mapping table whose every row is still marked a hypothesis, scientific-integrity rules and an experiment design.",
    stack: ["Python", "FastAPI and Pydantic (planned)", "Docker (planned)", "pytest and Locust (planned)", "Prometheus and Grafana (planned)"],
    implemented: [
      "Repository structure, research documentation and the experimental framework design.",
      "Explicit boundary: the project does not simulate the spliceosome and does not treat a software pathway as a biological isoform.",
    ],
    notYet: [
      "The README marks the project as early stage, with literature review and mechanism validation first.",
      "No benchmarks, fault-injection results or comparison with a baseline. The engineering hypothesis is untested.",
    ],
    learned:
      "An analogy is a source of ideas, not evidence. The useful part is deciding in advance which results would count against it.",
    repo: "https://github.com/sunilnarayan419-ui/bio_inspired_information_processing_infrastructure",
  },
  {
    id: "home-credit",
    name: "Home Credit Default Risk",
    positioning: "Predictive analytics for credit risk and financial decision support.",
    status: "Notebook analysis",
    statusKind: "notebook",
    open: true,
    problem: "Classify whether a loan applicant is likely to default, using the financial dataset in the repository.",
    why: "Default prediction is a standard test of whether a model's ranking is useful when classes are imbalanced and errors have different costs.",
    contribution: "Authored the analysis in a Jupyter notebook.",
    stack: ["Python", "Jupyter", "pandas", "scikit-learn"],
    implemented: ["Exploratory analysis and predictive modelling in a notebook."],
    notYet: ["No performance figures are shown here because they have not been re-checked against the current notebook. Not a deployed or production scorecard."],
    learned: "Exploration is quick; being able to defend an evaluation is the real work.",
    repo: "https://github.com/sunilnarayan419-ui/Home_credit_default_risk",
  },
];

// ---------------------------------------------------------------------------
// Research interests
// ---------------------------------------------------------------------------
export const researchAreas = [
  "Computational biology and biological network analysis",
  "Data analysis and machine learning for biological and industrial datasets",
  "Plant and algal biotechnology",
  "AI-enabled biomanufacturing and cell-factory systems",
  "Translational research and biotechnology commercialisation",
  "Bio-inspired information processing",
  "Molecular biology, genetics, genomics and cell culture",
];

export const inquiries = [
  {
    title: "Horseshoe crab innate immunity and rapid diagnostics",
    body: [
      "The horseshoe crab (Limulus polyphemus) has no adaptive immune system, yet its amebocytes detect bacterial endotoxin within minutes. Factor C binds lipopolysaccharide and starts the cascade that clots the blood.",
      "I'm interested in recombinant Factor C assays and in the engineering pattern behind them: detect a signal, amplify it, then localise it. That pattern is a possible blueprint for rapid point-of-care detection.",
    ],
    status: "A scientific question I'm studying. It is not a diagnostic I have built or validated.",
  },
  {
    title: "Chromatin architecture and transcriptional regulation",
    body: [
      "Accessible chromatin is not the same as active chromatin. I'm asking how chromatin accessibility, transcription-factor binding and promoter activity combine to decide which regions are transcribed.",
      "Hi-C maps 3D genome contacts and histone-modification mapping marks regulatory state, so together they could show whether intermediate states exist between heterochromatin and euchromatin. The often-quoted figure that about 10% of euchromatin is active at once is the question that motivated this, not a settled constant.",
    ],
    status: "A question I posted on ResearchGate. No experiments, findings or publications.",
    href: "https://www.researchgate.net/post/Why_is_only_10_of_euchromatin_transcriptionally_active_at_a_time_Is_there_an_intermediate_state_between_heterochromatin_and_euchromatin",
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const experience = [
  {
    role: "Research and Development Intern",
    org: "Epochfolio Private Limited",
    period: "July 2026 to October 2026",
    kind: "Internship, completed",
    summary:
      "Contributed to 11 R&D projects. My work was research and analysis rather than engineering: industry and market research, financial analysis, and checking the evidence behind funding information.",
    points: [
      "Mapped funding ecosystems across government, CSR, NGO, corporate and institutional sources.",
      "Validated evidence and sources; used AI-assisted research workflows with human checking.",
      "Prepared presentations and spreadsheet analysis; coordinated tasks, deadlines and communication.",
    ],
    evidence: "A completion certificate, a letter of recommendation and a colleague recommendation are on my LinkedIn profile. Client details are confidential and left out here.",
    href: profile.linkedin,
    hrefLabel: "LinkedIn",
  },
  {
    role: "GCI Scholar",
    org: "GCI World, Matsuo-Iwasawa Lab, University of Tokyo",
    // CONFIRM: start date and whether the programme is still running.
    period: "From September 2026",
    kind: "Educational programme",
    summary:
      "A learning and scholarship programme. It is not employment at the University of Tokyo or a research-lab placement. The Churn Handset Targeting project began as its final assignment.",
    points: [],
    evidence: "",
    href: "",
    hrefLabel: "",
  },
  {
    role: "Open-source contributor",
    org: "PaperLeet",
    period: "2026",
    kind: "Open-source contribution",
    summary:
      "Proposed a Network Biology section and contributed six exercises with a learning path, merged upstream. Contributor to the project, not a maintainer.",
    points: [],
    evidence: "",
    href: "https://github.com/PaperLeet/paperleet.github.io/pulls?q=is%3Apr+author%3Asunilnarayan419-ui",
    hrefLabel: "Pull requests",
  },
];

export const certifications = [
  { name: "Introduction to MS Excel", date: "1 August 2026", topics: "Navigation and formatting, basic formulas, data organisation, sorting and filtering, tables and charts." },
  { name: "Power BI for Beginners", date: "4 August 2026", topics: "Dashboard creation, data visualisation and business-intelligence fundamentals." },
];
export const certNote = "Course completion certificates, not advanced or official vendor credentials.";

// ---------------------------------------------------------------------------
// Skills: what the repositories and experience actually show
// ---------------------------------------------------------------------------
export const skills = {
  shown: [
    { group: "Software engineering", items: ["Python", "FastAPI and REST APIs", "pytest", "Git and GitHub", "Docker (basics)", "TypeScript and React (this site)"] },
    { group: "Data science and ML", items: ["pandas and NumPy", "scikit-learn", "Exploratory analysis", "Model evaluation and calibration", "Jupyter"] },
    { group: "Computational and molecular biology", items: ["Biological network analysis", "Molecular biology and genetics", "Genomics", "Cell culture", "Gel electrophoresis", "Protein purification", "Research methodology"] },
    { group: "Business and decision analysis", items: ["Market research", "Financial analysis", "Spreadsheet modelling", "Power BI fundamentals", "Research synthesis"] },
  ],
  learning: ["SQL beyond ORMs", "Matplotlib and SciPy", "Bioinformatics pipelines", "Statistics for biological data", "Bioprocess and techno-economic modelling"],
};

export const contact = {
  intro: "If you work on computational biology, bioprocess data or applied machine learning and think I could help or learn from the team, I'd like to hear from you. Email is the fastest way to reach me.",
};
