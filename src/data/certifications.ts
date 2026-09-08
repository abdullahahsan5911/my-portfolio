export type Certification = {
  name: string;
  // TODO: LinkedIn's export didn't preserve issuing organizations for these - confirm and fill in the issuer for each certificate below.
  issuer: string | null;
  date: string | null;
  credentialUrl: string | null;
  image: string | null;
};

export const certifications: Certification[] = [
  {
    name: "AI Seekho 2026 - Regional Shortlist",
    issuer: "AI Seekho / Google for Developers",
    date: "2026",
    credentialUrl: null,
    image: "/assets/certificates/ai.jpg"
  },
  {
    name: "Web Development",
    issuer: "DevCastle Career Institute",
    date: "2024",
    credentialUrl: null,
    image: "/assets/certificates/dev castle.jpg"
  },
  {
    name: "CodeAir 3.0 - Category Alpha",
    issuer: "Microsoft Learn Student Ambassadors, Air University",
    date: null,
    credentialUrl: null,
    image: "/assets/certificates/codeair.jpg"
  }
];
