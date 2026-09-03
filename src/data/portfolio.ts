// Central source of truth for all site-level (non-list) portfolio data.
// Edit this file to update the hero, about section, contact info, and nav —
// no component in src/components should ever hard-code these values.

export const portfolio = {
  name: "Abdullah Ahsan",
  title: "Full-Stack Web Developer",
  roleTags: ["React.js", "Node.js", "JavaScript", "REST APIs"],
  location: "Islamabad, Pakistan",
  email: "abdullahahsan7799@gmail.com",
  // TODO: Add a phone number here if you want it shown/linked in the Contact section.
  phone: null as string | null,

  intro:
    "I build full-stack web applications end to end — from REST APIs and databases to the React interfaces on top of them.",

  about: [
    "I'm a Computer Science student and web developer focused on web application development and Node.js. I have hands-on experience building web applications with JavaScript, React.js, Node.js, REST APIs, Firebase, and modern web tooling.",
    "I've contributed to web development projects at AlfaOrigin, and earlier supported short-term projects at Data X Technologies, where I picked up practical, production-oriented development habits.",
    "Outside of client and freelance work, I build side projects to explore backend architecture and web engineering more deeply — most recently LocalSkillHub, a region-specific freelance marketplace with its own trust and reputation system."
  ],

  social: {
    github: "https://github.com/abdullahahsan5911",
    linkedin: "https://www.linkedin.com/in/abdullahahsan-90a60641b"
    // TODO: Add other social/profile links here (e.g. Twitter/X, personal blog) if you have them.
  },

  resume: {
    // The Resume/CV button in the Hero and Navbar links here.
    href: "/cv/abdullah-ahsan-resume.pdf",
    label: "Download CV"
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ],

  // Small, factual stats shown near the hero/about section.
  // Only include numbers that are directly verifiable from the data files below.
  stats: [
    { label: "Years of professional experience", value: "1+" },
    { label: "Featured projects", value: "3" },
    { label: "Core stack", value: "MERN + Next.js" }
  ]
};
