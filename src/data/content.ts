export const profile = {
  name: "Sunil Mandloi",
  label: "I.MSc Life Sciences",
  institution: "University of Hyderabad",
  email: "sunilnarayan419@gmail.com",
  linkedin: "https://www.linkedin.com/in/sunil-mandloi-1365582aa",
  github: "https://github.com/sunilnarayan419-ui",
  researchgate: "https://www.researchgate.net/profile/Sunil-Mandloi-2",
  tagline:
    "Building at the intersection of biotechnology, computation, AI, data and business strategy.",
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "journey", label: "Development" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" },
] as const;

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
    "Python for data analysis — NumPy, Pandas, Matplotlib, scikit-learn",
    "Applied research work at Epochfolio: funding, CSR and NGO ecosystem mapping",
    "MS Excel and Power BI for business and data reporting",
    "A biology-themed Python curriculum, phase by phase",
  ],
  exploring: [
    "Computational biology and bioinformatics",
    "AI applied to biological problems",
    "Drug discovery and translational research",
    "Biotechnology commercialization and life-science strategy",
  ],
};

export const expertiseDomains = [
  {
    id: "life-sciences",
    title: "Life Sciences",
    items: [
      "Molecular biology & genetics",
      "Genomics",
      "Biotechnology",
      "Plant biology",
      "Research methodology",
      "Cell culture & gel electrophoresis",
    ],
  },
  {
    id: "computation",
    title: "Computation",
    items: ["Python", "Scientific computing", "Data structures & scripting", "Git", "Automation"],
  },
  {
    id: "ai-data",
    title: "AI & Data",
    items: [
      "Data analysis",
      "NumPy / Pandas / Matplotlib",
      "scikit-learn",
      "Applied AI for life sciences",
      "AI-assisted research workflows",
    ],
  },
  {
    id: "business",
    title: "Business & Strategy",
    items: [
      "Microsoft Excel",
      "Power BI",
      "Funding & ecosystem analysis",
      "Financial modelling basics",
      "Startup runway analysis",
      "Strategic frameworks",
    ],
  },
];

export type Category = "biology" | "computation" | "data" | "finance" | "business";

export const categoryMeta: Record<Category, { label: string; glyph: string }> = {
  biology: { label: "Biology", glyph: "01" },
  computation: { label: "Computation", glyph: "02" },
  data: { label: "Data", glyph: "03" },
  finance: { label: "Finance", glyph: "04" },
  business: { label: "Business", glyph: "05" },
};

export const projects = [
  {
    number: "01",
    name: "Library Management System",
    category: "computation" as Category,
    description:
      "A Python application for cataloguing books, managing members, and handling issue/return workflows — structured for clarity and future extension.",
    problem:
      "Practical, well-structured record-keeping: books, borrowers, and circulation, built as a real application rather than a script.",
    approach:
      "Modelled books, members, and transactions as distinct entities, then built the issue/return logic around that structure so it could grow without a rewrite.",
    result: "A working library application that handles cataloguing and circulation end to end.",
    tech: ["Python"],
    github: "https://github.com/sunilnarayan419-ui/Library-Management-System",
    status: "Active",
  },
  {
    number: "02",
    name: "Sales Performance Tracker",
    category: "business" as Category,
    description:
      "A modular tracker for monitoring sales activity, analysing team performance, tracking targets, and surfacing actionable insight through a practical, scalable interface.",
    problem:
      "Turning raw sales activity into performance visibility — targets, trends, and team-level insight in one place.",
    approach:
      "Built as separate modules for activity logging, target tracking, and reporting, so each piece can be extended independently.",
    result: "A reusable tracker template for monitoring sales targets and team performance.",
    tech: ["Python"],
    github: "https://github.com/sunilnarayan419-ui/sales-performer-trackers",
    status: "Active",
  },
  {
    number: "03",
    name: "Startup Runway Manager",
    category: "finance" as Category,
    description:
      "A prototype that calculates cash burn, runway, and basic financial health indicators to support early-stage founder decisions.",
    problem:
      "Making an early-stage company's financial runway legible — when cash runs out, and what changes that timeline.",
    approach:
      "Modelled monthly burn against cash on hand to compute runway, then exposed the levers — spend, revenue — that shift it.",
    result: "A working prototype founders could use to see runway and test what-if changes to burn.",
    tech: ["Python"],
    github: "https://github.com/sunilnarayan419-ui/startup-runway-manager",
    status: "Active",
  },
  {
    number: "04",
    name: "Mini Bio-Python Projects",
    category: "biology" as Category,
    description:
      "A biology-themed Python curriculum built in eight phases, from foundations through control flow, data structures, NumPy, Pandas, visualization, and scikit-learn — applied throughout to molecular biology and protein-analysis problems.",
    problem: "Building Python fluency specifically through biological problems, not generic exercises.",
    approach:
      "Structured as eight progressive phases, each pairing a Python concept with a molecular-biology or protein-analysis problem to apply it to.",
    result: "A growing, phase-structured body of work connecting core Python skills directly to biological data.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "scikit-learn"],
    github: "https://github.com/sunilnarayan419-ui/Mini-Bio-Python-Projects",
    status: "Growing",
  },
  {
    number: "05",
    name: "Finance & Logistics — 100 Python Projects",
    category: "data" as Category,
    description:
      "A 100-project curriculum in finance, business analytics, logistics, supply chain, operations research, and network engineering — progressing from single scripts to data pipelines, optimization systems, and decision-support tools.",
    problem:
      "Learning to use Python to understand, diagnose, model, and optimize real business and supply-chain systems, mirroring the biology curriculum but retargeted at computational business engineering.",
    approach:
      "Mirrors the biology curriculum's phase structure, moving from single scripts to data pipelines and optimization/decision-support tools as the projects progress.",
    result: "An ongoing, structured set of finance- and logistics-oriented Python projects of increasing complexity.",
    tech: ["Python", "NumPy", "Pandas", "NetworkX", "scikit-learn"],
    github: "https://github.com/sunilnarayan419-ui/Finance-Logistics-100-Python-Projects",
    status: "Ongoing",
  },
  {
    number: "06",
    name: "Python Practice Vault",
    category: "computation" as Category,
    description:
      "Fundamentals, logic drills, and problem-solving repetitions — the base layer everything else in this portfolio is built on.",
    problem: "Deliberate, repeated practice of core Python fundamentals underneath every other project.",
    approach: "An ongoing set of small, focused exercises revisited and expanded over time rather than a single finished artifact.",
    result: "A running record of fundamentals practice that supports every other project on this page.",
    tech: ["Python"],
    github: "https://github.com/sunilnarayan419-ui/python_practice",
    status: "Ongoing",
  },
];

export const journeyStages = [
  "Life Sciences",
  "Biotechnology",
  "Computational Biology",
  "Python",
  "Data",
  "AI",
  "Finance",
  "Strategy",
  "Life-Science Consulting",
];

export const philosophy = [
  { line: "Science explains what is possible.", accent: false },
  { line: "Data helps us understand what is happening.", accent: false },
  { line: "Economics tells us what is valuable.", accent: false },
  { line: "Strategy determines what we should do.", accent: true },
];

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
    summary:
      "Research support across government funding, CSR, NGO and corporate ecosystems — mapping who funds what, how organizations connect, and where the evidence for a decision actually comes from.",
    bullets: [
      "Research across government funding, CSR, NGO and corporate ecosystems",
      "Data collection, validation, and donor–recipient mapping",
      "Funding analysis and research reporting",
      "Data analysis and visualization in MS Excel and Power BI",
      "AI-assisted research workflows using tools such as ChatGPT and Claude alongside web-based research platforms",
    ],
  },
  {
    id: "data-science-conference",
    kind: "Conference & Hackathon",
    role: "Participant — Data Science Conference, January 2026 Edition",
    org: "School of Economics, University of Hyderabad",
    period: "January 2026",
    location: "Hyderabad",
    summary:
      "Supported by the Directorate of Institution of Eminence (IOE), with a hackathon on 25 January 2026 centered on data-driven problem solving.",
    bullets: [
      "Python-based data analysis with NumPy and Pandas on structured datasets",
      "Exploration of machine-learning approaches and pattern recognition",
      "Systems thinking toward scalable, efficient solution design",
      "Collaborative problem solving alongside a growing interest in AI for biology",
    ],
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

// Research & scientific engagement — sourced from Sunil's verified
// ResearchGate profile rather than presenting him as a published researcher.
export const research = {
  url: "https://www.researchgate.net/profile/Sunil-Mandloi-2",
  statement:
    "A Life Sciences undergraduate profile focused on translational research — where biology, biotechnology and computational approaches meet. The current focus is building foundations in molecular biology, biochemistry and quantitative biology, with an eye toward how lab discoveries move toward real-world application.",
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
      "Why is only around 10% of euchromatin transcriptionally active at any given time — and is there an intermediate state between heterochromatin and euchromatin?",
    context:
      "Posed while studying chromatin structure in second-year coursework: what determines which accessible regions of euchromatin are actually transcribed, and how techniques like Hi-C or histone-modification studies might help resolve an intermediate chromatin state.",
    date: "September 2026",
    answers: 2,
  },
};
