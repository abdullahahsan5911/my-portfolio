# Abdullah Ahsan — Portfolio

A personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Install & run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Where your information lives

Everything personal — name, bio, projects, experience, education, certifications, skills, nav, and contact
info — is centralized under `src/data/`. Components never hard-code this content; they import it from these
files. Change your information in one place and it updates everywhere it's used.

| File | Contains |
|---|---|
| `src/data/portfolio.ts` | Name, title, intro, about paragraphs, social links, resume link, nav items, stats |
| `src/data/projects.ts` | Every project card (name, description, tech, features, links, image) |
| `src/data/experience.ts` | Work history entries |
| `src/data/education.ts` | Education entries |
| `src/data/certifications.ts` | Certifications |
| `src/data/skills.ts` | Skills, grouped by category |

### Add a project

Open `src/data/projects.ts` and add a new object to the `projects` array following the existing `Project`
type (name, description, tech, features, links, image path). To feature it prominently, set `featured: true`.
A few unverified repos are already noted as commented-out stubs at the bottom of the file — fill them in and
move them into the array when you have the details confirmed.

### Add a certificate

Add an entry to the `certifications` array in `src/data/certifications.ts`.

### Update experience

Edit or add an entry to the `experience` array in `src/data/experience.ts`.

### Change theme colors

Every color in the site is a CSS variable defined in `src/app/globals.css`, under `:root` (light theme) and
`.dark` (dark theme). Change a value there and it updates across the whole site — no component files need to
be touched. Tailwind exposes these as utilities (`bg-background`, `text-foreground`, `bg-primary`, etc.) via
`tailwind.config.ts`.

### Replace images

Image files live under `public/assets/`:

- `public/assets/profile/` — your profile/headshot photo
- `public/assets/projects/` — project screenshots (referenced by `image` in `src/data/projects.ts`)
- `public/assets/certificates/` — certificate images, if you add any

Each project's `image` field currently points at a placeholder path with a `// TODO` comment in
`src/data/projects.ts` telling you exactly which file to replace.

### Where the CV is located

`public/cv/abdullah-ahsan-resume.pdf`. The Resume/CV button (in the navbar and hero) links to
`portfolio.resume.href` in `src/data/portfolio.ts` — update that if you rename or move the file. The CV
content mirrors the same verified data as the site; regenerate it from `build_cv.py` if you have it, or edit
the PDF directly.

## Notes on unverified content

A few things intentionally use `TODO` placeholders instead of invented details:

- Two GitHub repositories mentioned in project docs (RentConnect, DataX — Lead Ledger) don't yet have a
  confirmed repo URL — see the `githubUrl: null` fields in `src/data/projects.ts`.
- Certification issuers/dates in `src/data/certifications.ts` weren't preserved in the LinkedIn export.
- A few additional repos (`ecommerce`, `voxcabsolutions`, and the two Vercel-only demos) aren't included as
  full project cards yet because there wasn't enough verified detail about them — see the commented-out stubs
  at the bottom of `src/data/projects.ts`.

Fill these in with real information once you have it; don't invent placeholder content to replace them.
