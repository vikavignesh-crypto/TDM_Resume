// Portfolio content - placeholders, edit freely.

export const profile = {
  name: "Alex Morgan",
  firstName: "Alex",
  lastName: "Morgan",
  role: "Project Manager — Test Data Management",
  location: "Remote · Available Worldwide",
  yearsOfExperience: 12,
  tagline:
    "I lead Test Data Management programmes that turn fragile pipelines into compliant, repeatable, audit-ready systems.",
  email: "contact@example.com",
  phone: "+1 (555) 010-1234",
  links: {
    linkedin: "https://www.linkedin.com/in/example",
    github: "https://github.com/example",
    resume: "/resume.pdf",
  },
  intro: [
    "Twelve years building, breaking and rebuilding the systems behind enterprise software delivery.",
    "Today I run a Test Data Management programme for a regulated, multi-region platform — orchestrating the people, the policies, and the pipelines that make 'safe data, on demand' a reality.",
    "I believe great project management is mostly about removing surprise: predictable releases, traceable decisions, and teams that ship without heroics.",
  ],
  stats: [
    { value: "12", label: "Years in IT" },
    { value: "40+", label: "Programs delivered" },
    { value: "9", label: "Industries" },
    { value: "0", label: "Audit findings, FY24" },
  ],
};

export const experience = [
  {
    years: "2023 — Now",
    role: "Project Manager, Test Data Management",
    company: "Northwind Financial Services",
    detail:
      "Owns the end-to-end TDM programme: data masking, synthetic generation, on-demand provisioning across 14 environments. Cut data prep time 78%.",
  },
  {
    years: "2020 — 2023",
    role: "Senior Delivery Manager",
    company: "Helix Digital",
    detail:
      "Led 6-stream agile programme rebuilding the QA platform. Introduced TDM-as-a-Service and shift-left test strategy across 9 product teams.",
  },
  {
    years: "2017 — 2020",
    role: "Test Lead / Scrum Master",
    company: "Avant Health",
    detail:
      "Drove HIPAA-compliant test data flows. Built reusable masking libraries reused by 20+ teams. Trained 60+ engineers in risk-based testing.",
  },
  {
    years: "2014 — 2017",
    role: "QA Engineer → QA Lead",
    company: "Caelum Systems",
    detail:
      "Hands-on automation in Selenium/Java. Migrated regression suite from 22 hours to 47 minutes through parallelisation and data isolation.",
  },
  {
    years: "2013 — 2014",
    role: "Junior QA Engineer",
    company: "Pendrel Labs",
    detail:
      "First role. Manual + scripted testing for an early SaaS product. Learned the craft of writing tests that actually fail when something is wrong.",
  },
];

export const skills = [
  { group: "Programme", items: ["TDM Strategy", "Agile / SAFe", "Risk Management", "Stakeholder Mgmt"] },
  { group: "TDM Tooling", items: ["Informatica TDM", "Delphix", "K2View", "Synthetic Data"] },
  { group: "Compliance", items: ["GDPR", "HIPAA", "PCI-DSS", "SOC 2"] },
  { group: "Engineering", items: ["SQL · Python", "Jenkins · GitLab CI", "Docker · K8s", "Observability"] },
  { group: "QA / Test", items: ["Shift-left", "TDM-as-a-Service", "Selenium · Playwright", "JMeter"] },
  { group: "Leadership", items: ["Coaching", "Hiring", "Vendor Mgmt", "Budget Ownership"] },
];

export const projects = [
  {
    code: "CS / 01",
    title: "On-demand TDM platform for a global bank",
    summary:
      "Designed and shipped a self-service portal that gives 1,200 engineers compliant test data in under 9 minutes — down from 5 days.",
    tags: ["Delphix", "K8s", "Python", "GDPR"],
    metrics: [
      { k: "Provisioning time", v: "−97%" },
      { k: "Audit findings", v: "0" },
      { k: "Engineers served", v: "1,200" },
    ],
    image:
      "https://images.unsplash.com/photo-1767099490504-652415837b9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ3JpZCUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzgyNjkxMDN8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    code: "CS / 02",
    title: "Synthetic data pipeline for HIPAA workloads",
    summary:
      "Replaced production clones with a privacy-preserving synthetic generator. Removed 14TB of regulated data from non-prod environments.",
    tags: ["Synthetic", "HIPAA", "Python", "Airflow"],
    metrics: [
      { k: "PII removed", v: "14 TB" },
      { k: "Coverage parity", v: "98.4%" },
      { k: "Cost", v: "−42%" },
    ],
    image:
      "https://images.unsplash.com/photo-1774791242463-ad4fd6386cb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxkYXRhJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwbWluaW1hbHxlbnwwfHx8fDE3NzgyNjkxMDN8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    code: "CS / 03",
    title: "QA platform rebuild — 9 product teams",
    summary:
      "Programme-managed the rewrite of an aging QA platform. Introduced trunk-based delivery, ephemeral envs, and a shared test data fabric.",
    tags: ["Agile", "Platform", "TDM", "DevEx"],
    metrics: [
      { k: "Lead time", v: "−63%" },
      { k: "Escaped defects", v: "−71%" },
      { k: "Teams onboarded", v: "9" },
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "Alex made our TDM programme feel less like a project and more like a product. We finally have data we can trust — on demand.",
    author: "M. Okafor",
    role: "Director of Engineering, Northwind",
  },
  {
    quote:
      "One of the rare PMs who can read a query plan and a budget. He'll find the bottleneck before the engineers do.",
    author: "S. Ramirez",
    role: "VP Quality, Helix Digital",
  },
  {
    quote:
      "Calm, exacting, and impossible to surprise. Exactly what you want running a regulated programme.",
    author: "J. Patel",
    role: "Head of Compliance, Avant Health",
  },
];

export const certifications = [
  "PMP — Project Management Professional",
  "PMI-ACP — Agile Certified Practitioner",
  "Certified Scrum Master (CSM)",
  "ISTQB Advanced — Test Manager",
  "AWS Cloud Practitioner",
];
