export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  // Keep this empty rather than inventing responsibilities that weren't stated.
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "AlfaOrigin",
    role: "Web Developer",
    location: "Rawalpindi, Pakistan",
    start: "July 2025",
    end: "September 2026",
    highlights: []
    // TODO: Add specific responsibilities/highlights for this role once confirmed.
  },
  {
    company: "Data X Technologies",
    role: "Web Developer",
    location: "Islamabad, Pakistan",
    start: "July 2026",
    end: "August 2026",
    highlights: [
      "Built the Lead Ledger CRM scaffold — see the DataX — Lead Ledger project for details."
    ]
  }
];
