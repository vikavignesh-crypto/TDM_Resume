// Portfolio content. Sourced from Vigneshwaran B's résumé.

export const profile = {
  name: "Vigneshwaran Balasubramanian",
  firstName: "Vigneshwaran",
  lastName: "Balasubramanian",
  shortName: "Vigneshwaran B",
  initials: "VB",
  role: "Technical Manager — Test Data Management · Delphix",
  location: "Palani, India · Onsite / Offshore delivery",
  yearsOfExperience: 11,
  currentlyAt: "Currently TDM Technical Manager @ TCS · Truist",
  tagline:
    "I run enterprise Test Data Management programmes — Delphix-led, audit-ready, and built to deliver compliant data on demand across global teams.",
  email: "vika.vignesh@gmail.com",
  phone: "+91 81058 24667",
  links: {
    linkedin: "https://www.linkedin.com/in/vigneshwaranbalasubramanian",
    linkedinHandle: "/in/vigneshwaranbalasubramanian",
    resume: "/resume.pdf",
  },
  intro: [
    "Eleven years across Test Data Management, .NET delivery and infrastructure engineering — currently Assistant Consultant / Technical Manager at Tata Consultancy Services, leading the TDM Distributed Infrastructure team for Truist.",
    "Day to day I architect Delphix landscapes (40 Continuous Data + 8 Continuous Compliance + 3 Hyperscale engines), drive engine upgrades, evaluate licensing and SOWs, and turn ad-hoc requests into a self-service, on-demand BAU process.",
    "Before TDM I shipped enterprise .NET for Vedanta and GlaxoSmithKline, and ran a 230 TB Delphix-as-a-Service engagement on-site in the UK for TUI — masking 10 billion+ sensitive records every week with zero audit findings.",
  ],
  stats: [
    { value: "11", label: "Years in IT" },
    { value: "10B+", label: "Records masked / week" },
    { value: "230 TB", label: "dSource managed" },
    { value: "£3.78M", label: "Annual client ROI" },
  ],
};

export const experience = [
  {
    years: "2021 — Now",
    role: "Assistant Consultant / Technical Manager",
    company: "Tata Consultancy Services",
    detail:
      "Offshore lead for TDM Distributed/Infra on Truist. Owns 40 CD + 8 CC + 3 Hyperscale Delphix engines, SOW & SLM contract reviews, hiring panel, and BAU automations. POCs: Salesforce, SAP HANA, Netezza, MongoDB.",
  },
  {
    years: "2019 — 2021",
    role: "Lead Analyst — Delphix Admin & Masking SME",
    company: "GYR IT Solutions · TUI (UK onsite, Systems Plus)",
    detail:
      "Delphix-as-a-Service for TUI: 9 engines, 230+ TB dSource, 10B+ records masked weekly. Refresh/Mask automation in PowerShell + Shell, Jenkins, dxToolkit. Delivered ~£3.78M annual savings.",
  },
  {
    years: "2018 — 2019",
    role: "Technology Analyst",
    company: "Infosys Limited",
    detail:
      "Short tenure — moved into the Delphix specialist track. Earlier engaged with Medwell Ventures (Nightingales.in) as Transition Lead: KT, roadmap and capacity planning.",
  },
  {
    years: "2017 — 2018",
    role: "Software Engineer · Team Lead",
    company: "Enaviya Information Technology",
    detail:
      "Led .NET delivery for GlaxoSmithKline (Manufacturing Messaging) and Hindustan Zinc / Vedanta (Digital Shift Reporting, Resources & Reserves, Process Safety, Safety Interaction). C#, Oracle 12C, Web API.",
  },
  {
    years: "2014 — 2017",
    role: "Software Developer",
    company: "Dimexon Integrated Business Services",
    detail:
      "Built RMS, O2S and SCM modules of the IMAS jewellery ERP. ASP.NET, VB.NET, Oracle 12C, PL/SQL. Also shipped an iOS 7 e-Catalog app and an internal Travel & Canteen portal.",
  },
];

export const skills = [
  {
    group: "TDM Tooling",
    items: ["Delphix Virtualization", "Delphix Masking", "Hyperscale + DCT", "dxToolkit · dxmc", "Actifio"],
  },
  {
    group: "Databases",
    items: ["Oracle 19c / 12c / 11g", "MS SQL · DB2", "Netezza · MongoDB", "PL/SQL · SQL Dev · Toad"],
  },
  {
    group: "Engineering",
    items: ["PowerShell · Shell", "Python (utility)", "C# · VB.NET · Web API", "Jenkins · Git · TFS"],
  },
  {
    group: "Cloud & OS",
    items: ["AWS", "Oracle Cloud (OCI)", "RedHat Linux · Solaris 10", "Windows Server"],
  },
  {
    group: "Compliance",
    items: ["GDPR Masking Workflow", "Internal & External Audits", "Data Sensitivity Profiling", "Algorithm Custom Build"],
  },
  {
    group: "Programme",
    items: ["Agile · Rally · JIRA · Redmine", "SOW · SLM · Commercials", "Effort & Cost Estimation", "Onshore / Offshore Delivery"],
  },
];

export const projects = [
  {
    code: "CS / 01",
    title: "Truist — Enterprise TDM platform at TCS scale",
    summary:
      "Lead the offshore Distributed/Infra TDM team for Truist. 40 Continuous Data + 8 Continuous Compliance + 3 Hyperscale Delphix engines under one operating model. Built Salesforce, SAP HANA, Netezza and MongoDB integrations and shipped automations for server migration, on-demand BAU and ESP-driven mainframe deployments.",
    tags: ["Delphix", "Hyperscale", "DCT", "PowerShell", "ServiceNow"],
    metrics: [
      { k: "Engines under mgmt", v: "51" },
      { k: "Source systems", v: "9+" },
      { k: "Team", v: "8 offshore" },
    ],
    image:
      "https://images.unsplash.com/photo-1767099490504-652415837b9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ3JpZCUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NzgyNjkxMDN8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    code: "CS / 02",
    title: "TUI · Delphix-as-a-Service (UK onsite)",
    summary:
      "On-site Delphix Administrator and Environment Manager for TUI's UK Payroll. Kept 9 engines at 100% availability, prepared sub-4-hour P1 environments with the latest production data, and scripted refresh/mask flows for Oracle (Shell) and MSSQL (PowerShell), wired into Jenkins.",
    tags: ["Delphix", "GDPR", "Jenkins", "Shell", "PowerShell"],
    metrics: [
      { k: "Records masked / wk", v: "10B+" },
      { k: "dSource size", v: "230 TB" },
      { k: "Annual savings", v: "£3.78M" },
    ],
    image:
      "https://images.unsplash.com/photo-1774791242463-ad4fd6386cb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxkYXRhJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwbWluaW1hbHxlbnwwfHx8fDE3NzgyNjkxMDN8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    code: "CS / 03",
    title: "Vedanta · Hindustan Zinc — Operations digital suite",
    summary:
      "As Team Lead at Enaviya, shipped four interlocking applications for Hindustan Zinc (Vedanta): Digital Shift Reporting, Resources & Reserves, Process Safety Management and Safety Interaction. Replaced paper-led shift handovers with audited digital reports across mining sites.",
    tags: ["C# .NET", "Oracle 12C", "Web API", "jQuery"],
    metrics: [
      { k: "Apps shipped", v: "4" },
      { k: "Plants live", v: "Multi-site" },
      { k: "Role", v: "Team Lead" },
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
];

// Placeholder testimonials — replace with real LinkedIn recommendations when available.
export const testimonials = [
  {
    quote:
      "Vigneshwaran turned our Delphix estate from a daily firefight into a calm, audited service. He treats infrastructure like a product, not a ticket queue.",
    author: "TDM Stakeholder",
    role: "Banking client · TCS engagement",
  },
  {
    quote:
      "The kind of engineer who can hold a P1 bridge, a contract review and a roadmap session in the same week — and leave each one cleaner than he found it.",
    author: "Delivery Partner",
    role: "TUI · UK Payroll programme",
  },
  {
    quote:
      "Deep Delphix expertise, but what stands out is the ownership: licensing, hiring panels, automations, audits — all handled, all on time.",
    author: "Senior Manager",
    role: "Tata Consultancy Services",
  },
];

export const certifications = [
  "Delphix Fundamental",
  "Delphix Data Virtualization Engineer",
  "Delphix Data Virtualization Specialist",
  "Delphix Data Masking Engineer",
  "Delphix Data Masking Specialist",
  "Delphix Solution Engineer (Pre-sales)",
  "Delphix Partner — Presales v2.0",
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "Dr. N.G.P Institute of Technology, Coimbatore",
  year: "2010 — 2014",
  marks: "69.5%",
};
