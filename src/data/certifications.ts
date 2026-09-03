export type Certification = {
  name: string;
  // TODO: LinkedIn's export didn't preserve issuing organizations for these —
  // confirm and fill in the issuer for each certificate below.
  issuer: string | null;
  date: string | null;
  credentialUrl: string | null;
  image: string | null;
};

export const certifications: Certification[] = [
  {
    name: "AI Seekho",
    issuer: null,
    date: null,
    credentialUrl: null,
    image: null
  },
  {
    name: "Web Development",
    issuer: null,
    date: null,
    credentialUrl: null,
    image: null
  },
  {
    name: "Code Air",
    issuer: null,
    date: null,
    credentialUrl: null,
    image: null
  }
];
