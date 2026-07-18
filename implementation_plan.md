Restyle this existing React/TypeScript portfolio app with a new visual theme.
Do NOT change component structure, logic, routing, or content — only styling
(CSS / Tailwind classes / theme tokens).

THEME: "Live Terminal / IDE" aesthetic — the site should look like a code editor.

1. Typography
   - Primary font: JetBrains Mono (or Fira Code) for headings, nav, labels,
     project titles, buttons
   - Body/paragraph text: Inter (readability for longer bio text only)

2. Color palette (custom dark editor theme, not default Dracula/One Dark)
   - Background: near-black, e.g. #0d0f12
   - One signature accent color for links/CTAs/active states (pick one:
     electric blue or amber)
   - Secondary "syntax" palette used decoratively across the site:
     a muted green for tags/labels, a muted orange for keywords/skills,
     a muted purple for project titles — consistent, not random

3. Component chrome
   - Cards (projects, achievements, etc.) styled like code editor panels:
     thin border, subtle top bar with 3 dot "window controls" (like a
     mac terminal window), monospace headers
   - Section headers styled like file paths/comments, e.g. "// about"
     or "/** projects **/"
   - Buttons/links styled like editor tabs or terminal prompts (e.g.
     "$ view project" instead of plain "View Project")
   - Add a footer status-bar strip styled like VS Code's bottom bar
     (small text, icons, thin height, accent-colored branch icon)

4. Micro-interactions
   - Hover: subtle left-border highlight (like an active file in a
     sidebar), not scale/shadow-heavy hover effects
   - Cursor-blink accent on hero heading if feasible in pure CSS
   - Keep animations subtle — no glow/particle effects

5. Constraints
   - Mobile-first, must remain fully responsive
   - Keep all existing content, structure, and functionality untouched
   - Only touch CSS/Tailwind config/theme files and className usage