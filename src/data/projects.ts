export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  // Path under /public/assets/projects — replace the actual file when you have a screenshot.
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "localskillhub",
    name: "LocalSkillHub",
    description:
      "A region-specific freelance marketplace that pairs a standard gig-marketplace flow (post a job, send proposals, escrow contracts) with local trust signals — geo-filtered discovery, community endorsements, and a local reputation score — instead of purely global job matching.",
    tech: [
      "React (Vite)",
      "Tailwind CSS",
      "Redux / Zustand",
      "React Query",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Redis",
      "Socket.io",
      "JWT Auth",
      "Stripe / PayPal"
    ],
    features: [
      "Geo-filtered job and freelancer discovery with a map view",
      "Local reputation system combining verification, ratings, and community endorsements",
      "End-to-end proposal → contract → escrow payment workflow with milestone releases",
      "Real-time chat and negotiation between clients and freelancers via Socket.io"
    ],
    githubUrl: "https://github.com/abdullahahsan5911/localskillhub",
    // TODO: Add the live deployment URL for LocalSkillHub here once it's hosted.
    liveUrl: null,
    image: "/assets/projects/localskillhub.png",
    // TODO: Replace this image with an actual LocalSkillHub screenshot.
    featured: true
  },
  {
    slug: "datax-lead-ledger",
    name: "DataX — Lead Ledger",
    description:
      "An MVP CRM scaffold built for the DataX AI Business Automation Platform — authentication, role-aware users, and a full sales pipeline (leads, statuses, notes, follow-up tasks) driving a Next.js dashboard.",
    tech: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI (Python)",
      "PostgreSQL",
      "SQLAlchemy",
      "Redis",
      "JWT Auth"
    ],
    features: [
      "JWT authentication with role-based access (Admin, Sales, Marketing, Designer/Developer, Viewer)",
      "9-stage CRM pipeline (New → Qualified → Contacted → Opened → Replied → Meeting → Proposal Sent → Won/Lost) with full status-history audit trail",
      "Drag-and-drop Kanban dashboard for the sales pipeline, plus a lead detail view with notes and follow-up tasks",
      "Seeded business categories and a database schema designed with room for future modules (lead discovery, AI website generation, outreach automation)"
    ],
    // TODO: Add the GitHub repository link for this project once confirmed.
    githubUrl: null,
    // TODO: Add a live deployment URL if this project is hosted anywhere.
    liveUrl: null,
    image: "/assets/projects/datax-lead-ledger.png",
    // TODO: Replace this image with an actual Lead Ledger dashboard screenshot.
    featured: true
  },
  {
    slug: "rentconnect",
    name: "RentConnect",
    description:
      "A peer-to-peer rental marketplace built around trust and safety rather than just listings — identity verification, a reputation/trust score, demand-based dynamic pricing, and an escrow-backed booking workflow.",
    tech: [
      "React (Vite)",
      "Tailwind CSS",
      "React Query",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Redis",
      "Socket.io",
      "Stripe / PayPal",
      "Mapbox / Google Maps"
    ],
    features: [
      "Identity verification and a composite trust score (ratings, verified IDs, endorsements)",
      "Demand-based dynamic pricing engine with owner-configurable rules",
      "Escrow-backed booking workflow: request → confirm → payment hold → release",
      "Real-time chat, notifications, and a dispute-resolution module with evidence upload"
    ],
    // TODO: Add the GitHub repository link for this project once confirmed.
    githubUrl: null,
    liveUrl: null,
    image: "/assets/projects/rentconnect.png",
    // TODO: Replace this image with an actual RentConnect screenshot.
    featured: false
  },
  {
    slug: "rentonnect",
    name: "RentConnect",
    description:
      "A peer-to-peer rental marketplace built around trust and safety rather than just listings — identity verification, a reputation/trust score, demand-based dynamic pricing, and an escrow-backed booking workflow.",
    tech: [
      "React (Vite)",
      "Tailwind CSS",
      "React Query",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Redis",
      "Socket.io",
      "Stripe / PayPal",
      "Mapbox / Google Maps"
    ],
    features: [
      "Identity verification and a composite trust score (ratings, verified IDs, endorsements)",
      "Demand-based dynamic pricing engine with owner-configurable rules",
      "Escrow-backed booking workflow: request → confirm → payment hold → release",
      "Real-time chat, notifications, and a dispute-resolution module with evidence upload"
    ],
    // TODO: Add the GitHub repository link for this project once confirmed.
    githubUrl: null,
    liveUrl: null,
    image: "/assets/projects/rentconnect.png",
    // TODO: Replace this image with an actual RentConnect screenshot.
    featured: false
  },
  {
    slug: "rentconect",
    name: "RentConnect",
    description:
      "A peer-to-peer rental marketplace built around trust and safety rather than just listings — identity verification, a reputation/trust score, demand-based dynamic pricing, and an escrow-backed booking workflow.",
    tech: [
      "React (Vite)",
      "Tailwind CSS",
      "React Query",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Redis",
      "Socket.io",
      "Stripe / PayPal",
      "Mapbox / Google Maps"
    ],
    features: [
      "Identity verification and a composite trust score (ratings, verified IDs, endorsements)",
      "Demand-based dynamic pricing engine with owner-configurable rules",
      "Escrow-backed booking workflow: request → confirm → payment hold → release",
      "Real-time chat, notifications, and a dispute-resolution module with evidence upload"
    ],
    // TODO: Add the GitHub repository link for this project once confirmed.
    githubUrl: null,
    liveUrl: null,
    image: "/assets/projects/rentconnect.png",
    // TODO: Replace this image with an actual RentConnect screenshot.
    featured: false
  },
  {
    slug: "entconnect",
    name: "RentConnect",
    description:
      "A peer-to-peer rental marketplace built around trust and safety rather than just listings — identity verification, a reputation/trust score, demand-based dynamic pricing, and an escrow-backed booking workflow.",
    tech: [
      "React (Vite)",
      "Tailwind CSS",
      "React Query",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Redis",
      "Socket.io",
      "Stripe / PayPal",
      "Mapbox / Google Maps"
    ],
    features: [
      "Identity verification and a composite trust score (ratings, verified IDs, endorsements)",
      "Demand-based dynamic pricing engine with owner-configurable rules",
      "Escrow-backed booking workflow: request → confirm → payment hold → release",
      "Real-time chat, notifications, and a dispute-resolution module with evidence upload"
    ],
    // TODO: Add the GitHub repository link for this project once confirmed.
    githubUrl: null,
    liveUrl: null,
    image: "/assets/projects/rentconnect.png",
    // TODO: Replace this image with an actual RentConnect screenshot.
    featured: false
  }

  // Additional repos exist that weren't verified in enough detail to publish yet.
  // Fill in description/tech/features/links and move into the array above when ready:
  //
  // { slug: "ecommerce", name: "Ecommerce", githubUrl: "https://github.com/abdullahahsan5911/ecommerce", ... }
  // { slug: "voxcabsolutions", name: "Voxcab Solutions", githubUrl: "https://github.com/abdullahahsan5911/voxcabsolutions", ... }
  // { slug: "healthcare-innovation", name: "Healthcare Innovation", liveUrl: "https://healthcare-inovation.vercel.app/", ... }
  // { slug: "gh-mobile", name: "GH Mobile Dashboard", liveUrl: "https://ghmobile.vercel.app/dashboard", ... }
];
