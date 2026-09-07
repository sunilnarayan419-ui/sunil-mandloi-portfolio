export const profile = {
  name: "Sunil Mandloi",
  label: "I.MSc Life Sciences",
  institution: "University of Hyderabad",
  email: "sunilnarayan419@gmail.com",
  linkedin: "https://www.linkedin.com/in/sunil-mandloi-1365582aa",
  github: "https://github.com/sunilnarayan419-ui",
  tagline:
    "Building at the intersection of biotechnology, computation, AI, data and business strategy.",
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Development" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" },
] as const;

export const expertiseDomains = [
  {
    id: "life-sciences",
    title: "Life Sciences",
    items: ["Molecular biology foundations", "Bioinformatics basics", "Protein & sequence analysis"],
  },
  {
    id: "computation",
    title: "Computation",
    items: ["Python", "Data structures & scripting", "Automation"],
  },
  {
    id: "ai-data",
    title: "AI & Data",
    items: ["Data analysis", "Applied AI for life sciences", "Analytics dashboards"],
  },
  {
    id: "business",
    title: "Business & Strategy",
    items: ["Financial modelling basics", "Startup runway analysis", "Strategic frameworks"],
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
    tech: ["Python"],
    github: "https://github.com/sunilnarayan419-ui/startup-runway-manager",
    status: "Active",
  },
  {
    number: "04",
    name: "Mini Bio-Python Projects",
    category: "biology" as Category,
    description:
      "A growing collection of small Python programs applied to molecular biology problems — where biological questions meet computational scripts.",
    tech: ["Python"],
    github: "https://github.com/sunilnarayan419-ui/Mini-Bio-Python-Projects",
    status: "Growing",
  },
  {
    number: "05",
    name: "Finance & Logistics — 100 Python Projects",
    category: "data" as Category,
    description:
      "A working set of finance- and logistics-oriented Python exercises, built as structured practice across data and operational problems.",
    tech: ["Python"],
    github: "https://github.com/sunilnarayan419-ui/Finance-Logistics-100-Python-Projects",
    status: "Ongoing",
  },
  {
    number: "06",
    name: "Python Practice Vault",
    category: "computation" as Category,
    description:
      "Fundamentals, logic drills, and problem-solving repetitions — the base layer everything else in this portfolio is built on.",
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
