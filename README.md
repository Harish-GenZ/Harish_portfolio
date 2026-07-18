# Harish.dev Portfolio

A world-class, recruiter-ready personal portfolio website for an AI/ML engineer. Built with React 18, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Getting Started

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Adding New Projects

The portfolio is designed to be easily extendable. All data is managed in typed files located in `src/data/`.

To add a new project, edit `src/data/projects.ts`:
- **Flagship Projects:** Add a new object to the `flagshipProjects` array. Include the `title`, `description`, `techStack`, `highlights`, `status`, `githubUrl`, and `liveUrl`.
- **Mini Projects:** Add a new object to the `miniProjects` array.

To update your skills, edit `src/data/skills.ts`.

## Tech Stack
- **React 18 & TypeScript**
- **Vite** (Build Tool)
- **Tailwind CSS v4** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
