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
    name: 'Library Management System',
    category: 'Application / Management System',
    description:
      'A Python-based library application for storing books, managing users, and issuing and returning books — structured for clarity and extendability.',
    technology: ['Python'],
    problem: 'Practical, well-structured record-keeping: books, borrowers, and circulation, built as a real application rather than a script.',
    url: 'https://github.com/sunilnarayan419-ui/Library-Management-System',
  },
  {
    number: '02',
    name: 'Sales Performance Tracker',
    category: 'Business Analytics',
    description:
      'A modular tracker designed to monitor sales activities, analyze team performance, track targets, and generate actionable insights through a clean, practical, scalable interface.',
    technology: ['Python'],
    problem: 'Turning raw sales activity into performance visibility — targets, trends, and team-level insight in one place.',
    url: 'https://github.com/sunilnarayan419-ui/sales-performer-trackers',
  },
  {
    number: '03',
    name: 'Startup Runway Manager',
    category: 'Finance',
    description: 'A prototype to calculate startup cash burn, runway, and basic financial health for early-stage founders.',
    technology: ['Python'],
    problem: 'Making an early-stage company\u2019s financial runway legible — when cash runs out, and what changes that timeline.',
    url: 'https://github.com/sunilnarayan419-ui/startup-runway-manager',
  },
  {
    number: '04',
    name: 'Mini-Bio-Python-Projects',
    category: 'Computational Biology / Curriculum',
    description:
      'A biology-themed Python curriculum built in eight phases, from foundations through control flow, data structures, NumPy, Pandas, visualization, and scikit-learn — applied throughout to molecular biology and protein-analysis problems.',
    technology: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn'],
    problem: 'Building Python fluency specifically through biological problems, not generic exercises.',
    url: 'https://github.com/sunilnarayan419-ui/Mini-Bio-Python-Projects',
  },
  {
    number: '05',
    name: 'Finance-Logistics-100-Python-Projects',
    category: 'Business Analytics / Operations Research',
    description:
      'A 100-project curriculum in finance, business analytics, logistics, supply chain, operations research, and network engineering — progressing from single scripts to data pipelines, optimization systems, and decision-support tools.',
    technology: ['Python', 'NumPy', 'Pandas', 'NetworkX', 'scikit-learn'],
    problem: 'Learning to use Python to understand, diagnose, model, and optimize real business and supply-chain systems, mirroring the biology curriculum but retargeted at computational business engineering.',
    url: 'https://github.com/sunilnarayan419-ui/Finance-Logistics-100-Python-Projects',
  },
  {
    number: '06',
    name: 'python_practice',
    category: 'Fundamentals',
    description: 'An ongoing set of Python exercises for fundamentals, logic, and problem-solving repetitions.',
    technology: ['Python'],
    problem: 'Deliberate, repeated practice of core Python fundamentals underneath every other project.',
    url: 'https://github.com/sunilnarayan419-ui/python_practice',
  },
]
