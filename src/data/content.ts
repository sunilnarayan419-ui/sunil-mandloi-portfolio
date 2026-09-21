// Single source of truth for everything the site says about Sunil.
//
// Rules this file follows (see README → "Content rules"):
//  • Projects mirror repositories that exist on github.com/sunilnarayan419-ui
//    RIGHT NOW. Run `npm run verify:projects` before deploying to catch drift.
//  • Every claim on a project card is traceable to that repo's README/code.
//  • Programming is presented as Python only.
//  • Present-day work ("building") is kept separate from long-term interests.

export const profile = {
  name: "Sunil Mandloi",
  label: "I.MSc Life Sciences",
  institution: "University of Hyderabad",
  stage: "Second year · 2025 – 2030",
  // Same wording as the LinkedIn headline; used in the footer.
  headline:
    "Biotechnology × Computational Biology × AI · Python & Data Analytics · Exploring Life-Science Business & Strategy",
  email: "sunilnarayan419@gmail.com",
  linkedin: "https://www.linkedin.com/in/sunil-mandloi-1365582aa",
  github: "https://github.com/sunilnarayan419-ui",
  researchgate: "https://www.researchgate.net/profile/Sunil-Mandloi-2",
  site: "https://sunil-narayan.netlify.app/",
  siteLabel: "sunil-narayan.netlify.app",
  tagline:
    "Building at the intersection of biotechnology, computational biology, AI, Python and data analytics, and life-science business strategy.",
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "business", label: "Data & Business" },
  { id: "research", label: "Research" },
  { id: "journey", label: "Direction" },
  { id: "contact", label: "Contact" },
] as const;

// The narrative arc shown in the hero.
export const narrative = [
  "Science",
  "Data",
  "Computation",
  "AI",
  "Business",
  "Strategy",
  "Impact",
];

// The eight-step lens the About section frames every problem through.
export const approach = [
  "Problem",
  "Research",
  "Data",
  "Analysis",
  "Economics",
  "Strategy",
  "Decision",
  "Output",
];

// What's actively being built today, versus what's a longer-horizon
// interest being explored. Kept explicitly separate so the site never
// reads future ambition as present-day expertise.
export const currentFocus = {
  building: [
    "Python backends and data tooling: FastAPI, SQLAlchemy and Pandas across the projects below",
    "Applied research at Epochfolio: mapping funding, CSR and NGO ecosystems",
    "MS Excel and Power BI for data analysis and reporting",
    "An independent life-science strategy case study on insulin access in India",
    "Small biology- and chemistry-themed Python exercises, script by script",
  ],
  exploring: [
    "Computational biology and bioinformatics",
    "AI applied to biological problems",
    "Scientific Python beyond the basics: visualisation, SciPy, machine learning",
    "Drug discovery and translational research",
    "Biotechnology commercialisation and life-science strategy",
  ],
};

// ---------------------------------------------------------------------------
// Skills — five domains. `seenIn` names the place the skill is actually shown.
// ---------------------------------------------------------------------------
export const expertiseDomains = [
  {
    id: "life-sciences",
    title: "Life Sciences",
    items: [
      "Molecular biology",
      "Genetics and molecular genetics",
      "Genomics",
      "Biotechnology",
      "Plant biology",
      "Research methodology",
      "Cell culture",
      "Gel electrophoresis",
      "Protein purification",
    ],
    seenIn: "Integrated M.Sc. coursework; all ten skills as listed on ResearchGate",
  },
  {
    id: "python",
    title: "Python & Backend",
    items: [
      "Python",
      "FastAPI and REST APIs",
      "SQLAlchemy, Alembic and Pydantic",
      "Testing with pytest",
      "Git and GitHub",
      "Docker basics",
    ],
    seenIn: "Cell Division Timer, Library Management System, Startup Runway Manager",
  },
  {
    id: "data",
    title: "Data & Analytics",
    items: [
      "Pandas and NumPy",
      "Data validation and cleaning",
      "Excel dashboards (openpyxl, XlsxWriter)",
      "Microsoft Excel",
      "Power BI",
      "Data visualisation",
    ],
    seenIn: "Sales Performance Tracker, Epochfolio, Data Science Conference hackathon",
  },
  {
    id: "ai",
    title: "AI for Science",
    items: [
      "AI-assisted research workflows (ChatGPT, Claude)",
      "Machine-learning approaches: hackathon exploration",
      "AI for biology: exploring",
      "Scientific computing: exploring",
    ],
    seenIn: "Epochfolio research workflow; Data Science Conference, January 2026",
  },
  {
    id: "business",
    title: "Business & Strategy",
    items: [
      "Funding and ecosystem analysis",
      "Market sizing and competitive analysis",
      "Scenario and sensitivity modelling",
      "Startup runway and burn analysis",
      "Strategic frameworks (issue trees, options)",
      "Economics and finance: building the base",
    ],
    seenIn: "Epochfolio, Novo Nordisk India case study, Startup Runway Manager",
  },
];

// ---------------------------------------------------------------------------
// Projects — synchronised with github.com/sunilnarayan419-ui (verified 21 Sep 2026)
//
// Removed this pass: "Mini Bio-Python Projects" — the repository no longer
// exists (404). Added: Cell Division Timer and the Novo Nordisk India
// insulin case study, both now public.
//
// tier: "flagship" (open card, full Problem/Approach/Result),
//       "standard" (collapsible), "foundation" (compact, honest status).
// ---------------------------------------------------------------------------
export type Category = "biology" | "backend" | "data" | "finance" | "business" | "computation";
export type ProjectTier = "flagship" | "standard" | "foundation";

export const categoryMeta: Record<Category, { label: string }> = {
  biology: { label: "Computational biology" },
  business: { label: "Life-science strategy" },
  data: { label: "Data analytics" },
  finance: { label: "Finance" },
  backend: { label: "Backend" },
  computation: { label: "Python practice" },
};

export interface Project {
  number: string;
  name: string;
  category: Category;
  tier: ProjectTier;
  description: string;
  problem: string;
  approach: string;
  result: string;
  tech: string[];
  github: string;
  status: string;
  caveat?: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Cell Division Timer",
    category: "biology",
    tier: "flagship",
    description:
      "A FastAPI backend for recording and analysing cell-division data from time-lapse microscopy. It derives division duration, doubling time and specific growth rate, and flags biological outliers.",
    problem:
      "Time-lapse experiments produce dense streams of division measurements. Manual transcription and unchecked outliers, such as arrested or heat-stressed cells, make results hard to reproduce.",
    approach:
      "Modelled cells and their division records relationally and calculated the kinetics from timestamps instead of trusting typed-in values. Records are screened against reference ranges for four organisms (S. cerevisiae, E. coli, HeLa, NIH/3T3), with NCBI PubMed lookups for literature context.",
    result:
      "A tested research prototype with CSV import and export, analytics endpoints, database migrations and a 100-record synthetic benchmark dataset.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "Alembic", "pytest", "Docker"],
    github: "https://github.com/sunilnarayan419-ui/cell_division_timer",
    status: "Active",
    caveat: "Research prototype, not a validated clinical or diagnostic system (as stated in the repo).",
  },
  {
    number: "02",
    name: "Novo Nordisk: India Insulin Strategy",
    category: "business",
    tier: "flagship",
    description:
      "An independent, self-directed strategy case study on expanding insulin access and adoption in India, built entirely from public sources: market sizing, competitors, pricing, market access and a five-year scenario model.",
    problem:
      "How can an insulin manufacturer widen access and appropriate adoption in India without an economically unsustainable model, when clinical need, affordability, payers, competition and operations pull in different directions?",
    approach:
      "Structured like a consulting engagement: charter and issue tree, then workstreams for market, competition, pricing, market access, health economics, supply chain and risk. A Python model turns documented assumptions into scenarios.",
    result:
      "A completed case study with Base, Upside and Downside five-year scenarios, ±10% sensitivity analysis on eight variables, a TAM/SAM/SOM build-up, strategic options and an executive memo.",
    tech: ["Python", "Scenario modelling", "Sensitivity analysis", "Market sizing"],
    github: "https://github.com/sunilnarayan419-ui/novo_nordisk_insulin_india_strategy",
    status: "Complete",
    caveat:
      "Not client work and not affiliated with Novo Nordisk. Figures are labelled consulting assumptions, not company data.",
  },
  {
    number: "03",
    name: "Sales Performance Tracker",
    category: "data",
    tier: "standard",
    description:
      "A Python ETL and BI pipeline that turns a raw sales export into a formatted Excel dashboard workbook, reproducibly, from the command line.",
    problem:
      "Teams receive raw order exports and need a management-ready view (KPIs, trends, regional and product breakdowns) without rebuilding spreadsheets by hand each time.",
    approach:
      "Ingestion with schema detection, then validation, cleaning, feature engineering, KPI and pivot analysis, and automated insights, written out through XlsxWriter. Live Excel formulas cross-check the Python-calculated totals.",
    result:
      "One command produces a workbook with a KPI-and-chart dashboard, cleaned data, five pivot sheets, insights and a validation report. Run against an included sample dataset of 30,000 orders.",
    tech: ["Python", "Pandas", "openpyxl", "XlsxWriter", "pytest"],
    github: "https://github.com/sunilnarayan419-ui/sales-performer-trackers",
    status: "Active",
  },
  {
    number: "04",
    name: "Startup Runway Manager",
    category: "finance",
    tier: "standard",
    description:
      "A lightweight planning app that answers one founder question: how long can the startup survive, and what happens to runway under different spending and revenue scenarios?",
    problem:
      "An early-stage company's runway is easy to misjudge, particularly around break-even and cash-flow-positive edge cases.",
    approach:
      "A pure-function calculation engine behind a FastAPI service and a plain HTML/JS dashboard. Optimistic, Base and Conservative scenarios, plus funding and hiring what-if simulations.",
    result:
      "A working prototype with burn analysis, a cash-balance projection, a health indicator and rule-based alerts, covered by tests. Internal planning signals only, not financial advice.",
    tech: ["Python", "FastAPI", "Pydantic", "pytest"],
    github: "https://github.com/sunilnarayan419-ui/startup-runway-manager",
    status: "Active",
  },
  {
    number: "05",
    name: "Library Management System",
    category: "backend",
    tier: "standard",
    description:
      "A modular library platform with a FastAPI backend, role-based access, a real circulation domain and an analytics dashboard, rebuilt from an earlier CSV-backed student project.",
    problem:
      "Cataloguing, lending and returning books involves state (issued, reserved, overdue) that a flat script handles badly.",
    approach:
      "Separated books from physical copies, enforced issue, return, renew and reserve transitions, and added JWT authentication with ADMIN, LIBRARIAN and MEMBER roles, audit logging and versioned REST endpoints.",
    result:
      "A tested service with fine calculation, deterministic and explainable recommendations (no ML claimed), a Docker setup and GitHub Actions CI.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "Pydantic", "pytest", "Docker"],
    github: "https://github.com/sunilnarayan419-ui/Library-Management-System",
    status: "Active",
  },
  {
    number: "06",
    name: "Python Practice Vault",
    category: "computation",
    tier: "foundation",
    description:
      "Numbered practice scripts: calculators and converters first, then DNA, protein and chemistry utilities such as DNA melting point, hydrogen bonds and protein molecular mass.",
    problem: "Building Python fluency through small, concrete problems, with biology and chemistry as the recurring subject.",
    approach:
      "One self-contained script per problem, in standard-library Python, following a written list of 100 problems that steps up from fundamentals.",
    result: "22 scripts so far against a 100-problem plan. A working log, not a finished product.",
    tech: ["Python"],
    github: "https://github.com/sunilnarayan419-ui/python_practice",
    status: "Ongoing",
  },
  {
    number: "07",
    name: "Finance & Logistics: 100 Python Projects",
    category: "finance",
    tier: "foundation",
    description:
      "A structured plan for 100 Python projects in finance, business analytics, logistics and operations research, organised into eight phases from scripts to machine learning and optimisation.",
    problem:
      "Learning to model and diagnose business and supply-chain systems in Python rather than repeating generic exercises.",
    approach:
      "All 100 project folders are scaffolded across eight phases with one consistent layout (README, entry point, src, tests, config, data), so each can be built out in order.",
    result: "Structure only, so far: the entry points are placeholders and the implementations are still to be written.",
    tech: ["Python", "pytest"],
    github: "https://github.com/sunilnarayan419-ui/Finance-Logistics-100-Python-Projects",
    status: "Scaffold, not yet implemented",
  },
];

// ---------------------------------------------------------------------------
// Data & Business
// ---------------------------------------------------------------------------
export const evidenceChain = [
  "Scientific evidence",
  "Decision",
  "Investment",
  "Partnership",
  "Product",
  "Market impact",
];

export const businessThreads = [
  {
    kind: "Work",
    title: "Funding-ecosystem research",
    org: "Epochfolio",
    body: "Mapping who funds what across government, CSR, NGO and corporate ecosystems, validating the data behind it, and reporting it in Excel and Power BI.",
    link: null as string | null,
  },
  {
    kind: "Case study",
    title: "India insulin strategy",
    org: "Independent, public sources",
    body: "Market sizing, competitor and pricing analysis, market access and a five-year scenario model, ending in options and a recommendation.",
    link: "https://github.com/sunilnarayan419-ui/novo_nordisk_insulin_india_strategy",
  },
  {
    kind: "Project",
    title: "Sales reporting pipeline",
    org: "Python + Excel",
    body: "Raw sales export in, validated KPIs and a dashboard workbook out: the reporting layer a business decision would actually read.",
    link: "https://github.com/sunilnarayan419-ui/sales-performer-trackers",
  },
  {
    kind: "Project",
    title: "Runway and scenario planning",
    org: "Python + FastAPI",
    body: "Cash burn and runway under optimistic, base and conservative assumptions, with funding and hiring what-ifs.",
    link: "https://github.com/sunilnarayan419-ui/startup-runway-manager",
  },
];

export const businessDisclaimer =
  "Everything here is coursework-stage, self-directed or internship-level work. There is no client or consulting engagement behind it, and the case study is labelled as independent throughout.";

export const journeyStages = [
  { stage: "Life Sciences", status: "Foundation" },
  { stage: "Biotechnology", status: "Foundation" },
  { stage: "Python", status: "Building" },
  { stage: "Data analytics", status: "Building" },
  { stage: "Computational Biology", status: "Exploring" },
  { stage: "AI for science", status: "Exploring" },
  { stage: "Finance & economics", status: "Exploring" },
  { stage: "Strategy", status: "Exploring" },
  { stage: "Life-science consulting", status: "Long-term direction" },
] as const;

export const philosophy = [
  { line: "Science explains what is possible.", accent: false },
  { line: "Data helps us understand what is happening.", accent: false },
  { line: "Economics tells us what is valuable.", accent: false },
  { line: "Strategy determines what we should do.", accent: true },
];

export const education = {
  degree: "Integrated M.Sc. Life Sciences",
  institution: "University of Hyderabad",
  unit: "Centre for Integrated Studies",
  period: "September 2025 – June 2030",
  stage: "Second year",
  location: "Hyderabad, Telangana, India",
  note: "An integrated programme spanning the core biological sciences, leaving room to build computational, data and business capability alongside it.",
};

// Experience & activities — kept to what is verifiably true of an
// early-career internship and a conference/hackathon, not senior work.
export const experience = [
  {
    id: "epochfolio",
    kind: "Internship",
    role: "Research & Development Intern",
    org: "Epochfolio",
    period: "July 2026 — Present",
    location: "Remote",
    current: true,
    summary:
      "Research support across government funding, CSR, NGO and corporate ecosystems: mapping who funds what, how organisations connect, and where the evidence for a decision actually comes from.",
    bullets: [
      "Research across government funding, CSR, NGO and corporate ecosystems",
      "Data collection, validation and donor–recipient mapping",
      "Funding analysis and research reporting",
      "Data analysis and visualisation in MS Excel and Power BI",
      "AI-assisted research workflows using ChatGPT and Claude alongside web-based research platforms",
    ],
    tags: ["Research", "Data validation", "Funding", "CSR", "NGO", "Corporate", "Excel", "Power BI", "AI-assisted research"],
    learned:
      "Research is not only finding information. It is asking who funds an idea, who could support it, how organisations connect, what evidence is reliable, and what gaps remain.",
  },
  {
    id: "data-science-conference",
    kind: "Conference & hackathon · participant",
    role: "Data Science Conference, January 2026 Edition",
    org: "School of Economics, University of Hyderabad",
    period: "January 2026 · hackathon on 25 January",
    location: "Hyderabad",
    current: false,
    summary:
      "Participated in the hackathon of a conference supported by the Directorate of Institution of Eminence (IOE), centred on data-driven problem solving.",
    bullets: [
      "Python-based analysis with NumPy and Pandas on structured datasets",
      "Exploration of machine-learning approaches and pattern recognition",
      "Systems thinking toward scalable, efficient solution design",
      "Collaborative problem solving, alongside a growing interest in AI for biology",
    ],
    tags: ["Python", "NumPy", "Pandas", "Pattern recognition", "Teamwork"],
    learned: "",
  },
];

export const certifications = [
  {
    name: "Power BI for Beginners",
    issuer: "Microsoft / Simplilearn / SkillUp",
    completed: "4 August 2026",
  },
  {
    name: "Introduction to MS Excel",
    issuer: "Microsoft / Simplilearn / SkillUp",
    completed: "1 August 2026",
  },
];

// Research & scientific engagement — checked against the live ResearchGate
// profile on 21 Sep 2026. No publications are listed there, and none are claimed.
export const research = {
  url: "https://www.researchgate.net/profile/Sunil-Mandloi-2",
  statement:
    "A Life Sciences undergraduate profile focused on translational research, where biology, biotechnology and computational approaches meet. The current focus is building foundations in molecular biology, biochemistry and quantitative biology, with an eye toward how lab discoveries move toward real-world application.",
  skills: [
    "Molecular Biology",
    "Genetics",
    "Genomics",
    "Biotechnology",
    "Molecular Genetics",
    "Plant Biology",
    "Research Methodology",
    "Cell Culture",
    "Gel Electrophoresis",
    "Protein Purification",
  ],
  question: {
    title:
      "Why is only ~10% of euchromatin transcriptionally active at a time? Is there an intermediate state between heterochromatin and euchromatin?",
    context:
      "Posed while studying chromatin structure in second-year coursework: what decides which accessible regions of euchromatin are actually transcribed, and how could histone-modification studies or Hi-C help resolve an intermediate chromatin state?",
    date: "September 2026",
    url: "https://www.researchgate.net/post/Why_is_only_10_of_euchromatin_transcriptionally_active_at_a_time_Is_there_an_intermediate_state_between_heterochromatin_and_euchromatin",
  },
  interests: [
    "Computational biology",
    "Bioinformatics",
    "AI for biology",
    "Drug discovery",
    "Plant-based biotechnology",
    "Translational research",
    "Life-science commercialisation",
  ],
};
