export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  images?: string[];
};

export const experience: Experience[] = [
  {
    company: "Data X Technologies",
    role: "Web Developer Intern",
    location: "Islamabad, Pakistan",
    start: "July 2026",
    end: "August 2026",
    highlights: [
      "Contributed to the design, development, and improvement of responsive websites and web applications.",
      "Implemented features with modern web technologies, optimized website performance, and troubleshot technical issues.",
      "Demonstrated strong technical skills, problem-solving ability, attention to detail, and professional collaboration."
    ],
    images: ["/assets/certificates/datax experience letter.png"]
  },
  {
    company: "AlfaOrigin",
    role: "Full-Stack Web Developer",
    location: "Rawalpindi, Pakistan",
    start: "July 2025",
    end: "September 2025",
    highlights: [
      "Worked in the web development department on responsive and user-focused web projects.",
      "Recognized for a motivated, dependable, and performance-oriented approach to assigned work."
    ],
    images: ["/assets/certificates/alpha origin.png"]
  }
];
