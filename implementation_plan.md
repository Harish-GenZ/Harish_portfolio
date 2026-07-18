# Portfolio Website Build Prompt — Harish.dev

> Copy everything below into your coding agent as the initial instruction.

---

## ROLE

You are a senior frontend engineer and product designer. Build a **world-class, recruiter-ready personal portfolio website** for an AI/ML engineer. The result should feel like it belongs to someone who works at a frontier AI lab — clean, confident, technical, no template clichés (no generic "Hi, I'm a web developer" hero, no stock Unsplash tech photos, no default Bootstrap look).

---

## IDENTITY & BRANDING

- **Site name / brand:** `Harish.dev`
- **Full legal name (use in footer, meta tags, resume section, "About" intro):** Balaharish Alais Yogesh N
- **Display name everywhere else (nav, hero):** Harish
- **Tagline direction:** AI/ML Engineer building intelligent systems from first principles — not a generic "full-stack developer" tagline. Lean into ML/LLM/agents identity.
- **Contact:**
  - Email: balah8986@gmail.com
  - Phone: +91 7708035227
  - LinkedIn: linkedin.com/in/balaharish-yogesh-n-95a277305
  - GitHub: github.com/Harish-GenZ
  - LeetCode: leetcode.com/u/BALAHARISHALAISYOGESH
  - Location: Virudhunagar, Tamil Nadu, India

---

## TECH STACK (required)

- **React 18 + TypeScript**
- **Vite** as the build tool
- **Tailwind CSS** for styling (with a custom design token setup — no default Tailwind look)
- **Framer Motion** for scroll/entrance animations and micro-interactions
- **React Router** (or simple section-scroll single page — see Architecture below)
- Icons: `lucide-react`
- Fonts: pair a technical monospace (for code/labels/tags) with a clean modern sans-serif (for body/headings) — e.g. `Space Grotesk` or `Inter` for headings, `JetBrains Mono` for accents/labels
- Deployment target: Vercel or Netlify (static build, no backend required)
- Fully responsive (mobile-first), dark-mode-first design (with optional light mode toggle)
- Optimize for Lighthouse 90+ across Performance/Accessibility/SEO

---

## DESIGN DIRECTION

- **Aesthetic:** dark, technical, minimal — think Linear.app / Vercel.com / Anthropic.com energy. Deep near-black background (not pure #000), subtle gradient meshes or grid/noise texture, one confident accent color (suggest an electric indigo/violet or amber — pick one and use it consistently for CTAs, links, glow accents).
- **Typography-led design:** big confident headings, generous whitespace, no clutter.
- **Micro-interactions:** hover states on project cards (subtle lift + glow), animated section reveals on scroll (staggered fade/slide, not overused), smooth scroll navigation.
- **No stock photography.** Use the uploaded professional headshot only in the About/Hero section. Everything else should be typographic, iconographic, or abstract (subtle SVG/gradient shapes, terminal-style code snippets, or animated data/network visuals that nod to AI/ML work).
- **Avoid:** generic gradient-blob-hero, gradient text everywhere, gimmicky particle.js backgrounds, gradient buttons with rounded-full+shadow "SaaS landing page" clichés.

---

## SITE ARCHITECTURE

Single-page scroll site with anchor navigation (sticky/floating nav bar), sections in this order:

1. **Hero**
2. **About**
3. **Skills**
4. **Projects** (flagship + mini)
5. **Achievements / Publications**
6. **Education**
7. **Contact**
8. **Footer**

Build each section as its own component (`Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Achievements.tsx`, `Education.tsx`, `Contact.tsx`, `Footer.tsx`), with content sourced from typed data files (e.g. `data/projects.ts`, `data/skills.ts`) — **not hardcoded inline** — so new projects can be added later by just appending to an array.

---

## SECTION-BY-SECTION CONTENT

### 1. Hero
- Name: **Harish**
- Role line: AI/ML Engineer — building agents, LLM systems, and intelligent products
- Short punchy sub-line (rewrite, don't copy verbatim): passionate about solving real problems with ML, currently interning as an AI/ML engineer, final-year CS student
- CTAs: "View Projects" (scrolls to Projects), "Resume" (opens resume PDF — placeholder link), "Get in touch" (scrolls to Contact)
- Social icons: GitHub, LinkedIn, LeetCode, Email
- Subtle animated element suggested: a typing/terminal effect cycling through roles ("AI/ML Engineer", "LLM Builder", "Problem Solver") OR a minimal animated neural-net/graph SVG in the background — pick one, keep it tasteful and non-distracting

### 2. About
- Full name displayed once here: **Balaharish Alais Yogesh N**
- Professional headshot (use uploaded image, circular or soft-rounded frame)
- Rewritten bio (do not copy resume objective verbatim — make it specific and confident, not generic corporate-speak):
  - Final-year B.Tech Computer Science student at Kamaraj College of Engineering and Technology (2022–2026), CGPA 8.0, Honors in Product Development
  - Currently an AI/ML Engineering Intern at a startup
  - Builds end-to-end ML systems — from anomaly detection engines to real-time computer vision to LLM-powered agents
  - Long-term goal: contributing to frontier AI research/engineering
  - Languages: Tamil (fluent), English (fluent), Hindi (intermediate)

### 3. Skills
Group into categories (don't just dump a flat list — this is a common resume-website mistake):
- **Languages:** Java, Python, SQL
- **AI/ML:** Machine Learning, Deep Learning, Isolation Forest / anomaly detection, computer vision (InsightFace), LLM/agent development, NLP
- **Frontend:** React.js, TypeScript, Figma
- **Backend/Infra:** FastAPI, Node.js, PostgreSQL, Socket.IO
- **Other:** Critical Thinking, rapid prototyping / "vibe coding"

Render as clean icon+label chips/grid or category cards, not a boring bullet list. Consider a skill-tag cloud with subtle hover animation.

### 4. Projects — Flagship (full detail cards)
Each project card should have: title, tech stack tags, 2–3 rewritten highlight bullets, status badge (Published), and links (GitHub/live demo placeholders — leave `#` if unknown).

1. **InsiderWatch — AI-Based Insider Threat Detection System**
   - Stack: Python, FastAPI, React, Machine Learning, TypeScript
   - AI-powered insider threat detection platform with real-time monitoring of employee activity via USB tracking and browser behavior analysis
   - Hybrid anomaly detection engine combining Isolation Forest and Random Forest algorithms
   - Interactive dashboards for risk scoring, threat alerts, and security analytics
   - Status: Published; presented at IMSTEM 2026

2. **AttendifyX — Smart Attendance System using Deep Learning**
   - Stack: Python, InsightFace, React, Node.js, TypeScript
   - Real-time face recognition attendance system with scalable, secure backend services
   - Modern dashboards with automated analytics and reporting
   - Status: Published in IRJASH (International Research Journal on Advanced Science Hub)

3. **F.R.I.D.A.Y. — An Elite AI Voice Assistant**
   - Stack: Python, LiveKit, Google LLM
   - AI-powered voice assistant integrating natural language processing with fallback conversational capabilities
   - Demonstrates real-time AI agent design and cross-platform automation

4. **IPL Mock Auction Simulator with AI Franchise Engine**
   - Stack: React.js, Node.js, Socket.IO, PostgreSQL
   - Real-time multiplayer IPL auction platform with live bidding and automated auction workflows
   - Mathematical AI franchise engine evaluating player roles, squad balance, budget constraints, capped players, and overseas limits for realistic auction strategy simulation

### 5. Mini Projects (lighter-weight grid, smaller cards — title + one-liner + tags)
- Medicine-based Chatbot (Remedies) — internship project
- Heart Disease Prediction using ML
- Ticket Booking System (Java + DBMS)
- Muscle Factory — Fitness Web Platform
- EliteCart — Ecommerce Website

**Important:** Build the projects data structure to be easily extendable — leave clear comments/instructions in `data/projects.ts` showing how to add new projects later, since more will be added.

### 6. Achievements / Publications
- Authored & published "Attendifyx: Smart Attendance System Using Deep Learning" — International Research Journal on Advanced Science Hub (IRJASH)
- Presented & published "Quantum Computing in Drug Discovery" — 2nd International Conference on Futuristic Trends in Science, Engineering, and Management, Patna
- Presented "InsiderWatch — AI-based Threat Detection System" at IMSTEM 2026
- Oracle Java Certified Foundations Associate — International certification, scored 88%
- Value-Added Course completion in Data Science using Python & IoT

Display as a timeline or achievement-card grid with icons (paper/award/certificate icons).

### 7. Education
- **Kamaraj College of Engineering and Technology** — B.Tech Computer Science, 2022–2026, CGPA 8.0, Honors in Product Development
- **KVS English Medium School** (CBSE) — 2020–2022, SSLC 79%, HSC 76%

Simple vertical timeline component.

### 8. Contact
- Clear CTA: "Let's build something" / "Open to opportunities"
- Contact form (name, email, message) — can be a `mailto:` fallback or simple form UI (no backend required unless agent wants to wire up Formspree/EmailJS)
- Direct email/phone/social links repeated here

### 9. Footer
- © [current year] Balaharish Alais Yogesh N — full name here
- Quick nav links + social icons
- "Built with React & TypeScript" small credit line

---

## TECHNICAL REQUIREMENTS

- Fully typed TypeScript (no `any`)
- Component-driven, clean file structure (`/src/components`, `/src/data`, `/src/assets`, `/src/hooks`)
- SEO: proper `<title>`, meta description, Open Graph tags, favicon, using name "Harish.dev — AI/ML Engineer Portfolio"
- Accessibility: semantic HTML, proper alt text, keyboard-navigable nav, sufficient color contrast
- Performance: lazy-load below-the-fold sections/images, optimize the headshot image
- Smooth scroll + active-section highlighting in nav
- Mobile nav: hamburger menu with slide-in drawer
- Include a `README.md` explaining how to run, build, and add new projects to `data/projects.ts`

---

## WHAT NOT TO DO

- Don't copy resume bullet phrasing verbatim into the site — rewrite everything in a more confident, human, first-person voice
- Don't use a generic "developer portfolio template" hero (giant emoji wave, "Welcome to my portfolio")
- Don't clutter the design with more than one accent color
- Don't make the Skills section a boring flat bullet list
- Don't forget the site is extendable — new projects will be added later, so the data layer must be clean and easy to append to

---

## DELIVERABLE

A complete, runnable Vite + React + TypeScript project with all sections above implemented, using the content provided, ready to `npm install && npm run dev`.