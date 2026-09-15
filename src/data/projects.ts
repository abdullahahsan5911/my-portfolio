export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  // Paths under /public/assets/projects.
  images: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "localskillhub",
    name: "LocalSkillHub",
    description:
      "LocalSkillHub is a freelance marketplace for connecting people with trusted professionals in their own region. Clients can find local talent, compare reputation signals, agree on work, and manage projects in one place.",
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
    images: Array.from({ length: 28 }, (_, index) =>
      `/assets/projects/localskillhub/localskillhub${index + 1}.png`
    ),
    featured: true
  },
  {
    slug: "datax-lead-ledger",
    name: "DataX - Lead Ledger",
    description:
      "DataX Lead Ledger is a sales workspace that helps teams organize prospects from first contact to closed deal. It gives sales and marketing teams one place to track leads, conversations, follow-ups, and pipeline progress.",
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
    images: Array.from({ length: 11 }, (_, index) =>
      `/assets/projects/lead%20generation/l${index + 1}.png`
    ),
    featured: true
  },
  {
    slug: "rentconnect",
    name: "RentConnect",
    description:
      "RentConnect is a peer-to-peer rental marketplace where people can discover, book, and manage access to items or spaces offered by other users. The product is designed to make local rentals feel safer, clearer, and easier to coordinate.",
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
    images: [],
    featured: false
  },
  {
    slug: "esfylo-watches",
    name: "Esfylo Watches Store",
    description:
      "Esfylo is a client e-commerce store for premium watches, built to give customers a polished shopping experience from product discovery through checkout. The storefront supports curated collections, detailed product views, account flows, and a connected admin workspace for managing the catalog and orders.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "JWT Auth",
      "Cash on Delivery"
    ],
    features: [
      "Responsive watch storefront with home, collections, product detail, cart, and checkout experiences",
      "Product search, category browsing, image galleries, discounts, stock visibility, and related products",
      "Admin workspace for products, categories, orders, inventory, banners, reviews, coupons, and settings",
      "Customer account, wishlist, order flow, payment instructions, and WhatsApp support touchpoints"
    ],
    githubUrl: null,
    liveUrl: null,
    images: Array.from({ length: 10 }, (_, index) =>
      `/assets/projects/esfylo/e${index + 1}.png`
    ),
    featured: true
  },
  {
    slug: "heavencrafts-kitchen-store",
    name: "Heavencrafts Kitchen Crockery Store",
    description:
      "Heavencrafts is a client e-commerce store for kitchen crockery, cookware, glassware, and dining accessories. The experience combines editorial brand storytelling with a live catalog, product merchandising, detailed shopping flows, and store management tools.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "JWT Auth",
      "Cash on Delivery"
    ],
    features: [
      "Branded storefront with collection discovery, featured products, best sellers, and responsive navigation",
      "Catalog filtering, category pages, product galleries, variants, quantity controls, reviews, and recommendations",
      "Admin product and category management with images, pricing, stock, discounts, and merchandising controls",
      "Editorial About page, delivery messaging, customer support links, and promotional homepage sections"
    ],
    githubUrl: null,
    liveUrl: null,
    images: Array.from({ length: 6 }, (_, index) =>
      `/assets/projects/kitchen%20crockery/k${index + 1}.png`
    ),
    featured: true
  },


  // Additional repos exist that weren't verified in enough detail to publish yet.
  // Fill in description/tech/features/links and move into the array above when ready:
  //
  // { slug: "ecommerce", name: "Ecommerce", githubUrl: "https://github.com/abdullahahsan5911/ecommerce", ... }
  // { slug: "voxcabsolutions", name: "Voxcab Solutions", githubUrl: "https://github.com/abdullahahsan5911/voxcabsolutions", ... }
  // { slug: "healthcare-innovation", name: "Healthcare Innovation", liveUrl: "https://healthcare-inovation.vercel.app/", ... }
  // { slug: "gh-mobile", name: "GH Mobile Dashboard", liveUrl: "https://ghmobile.vercel.app/dashboard", ... }
];
