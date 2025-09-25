# Prompt Plan for Portfolio Development

This document outlines the step-by-step development blueprint and the exact prompts for guiding an LLM in an iterative, test-driven coding process.

---

## Phase 1: Project Setup

### Prompt 1: Project Setup
```
You are coding a React portfolio.  
Task: Bootstrap a Vite React project with TailwindCSS, ESLint, and Prettier.  
Deliverables: package.json, tailwind.config.js, eslint/prettier configs.  
Write Jest test to confirm App renders “Hello World”.  
```

---

## Phase 2: Core Sections

### Prompt 2: Hero Section
```
Implement Hero.jsx with:  
- Avatar placeholder  
- Tagline: “Data Scientist that builds AI agents turning ideas into reality”  
- Links: GitHub, LinkedIn  

Write Jest/RTL test: confirm tagline renders and links exist.  
```

### Prompt 3: Nav + Footer
```
Add sticky NavBar with links: Hero, About, Skills, Experience, Publications, Projects, Testimonials, Personal, Contact.  
Add Footer.jsx with © Shubbham Gupta {year} + visitor counter placeholder.  

Write Jest/RTL test: clicking nav scrolls to About section.  
```

---

## Phase 3: Sections

### Prompt 4: About + Skills
```
Implement About.jsx: short text + highlight stats with icons.  
Implement Skills.jsx: load JSON categories → render cards with color-coded tags (green=Expert, blue=Intermediate, grey=Beginner).  

Test: confirm skills render with correct color classes.  
```

### Prompt 5: Timeline
```
Implement ExperienceTimeline.jsx as vertical timeline.  
Props: array of experiences (company, role, description).  
Auto-expand entries when scrolled into view.  

Test: confirm that timeline items appear after scrolling into view.  
```

---

## Phase 4: Content Features

### Prompt 6: Publications + Projects
```
Implement Publications.jsx:  
- Cards with title only.  
- Modal popup with abstract + citation.  
- Navigation arrows.  

Implement Projects.jsx:  
- Cards with screenshot, title, description, tech stack.  
- Modal popup with full info.  
- GitHub API integration (pinned + latest).  

Test: modal opens, closes, and arrows cycle correctly.  
```

---

## Phase 5: Contact + Extras

### Prompt 7: Contact + Extras
```
Implement Contact.jsx:  
- Quick links (email, GitHub, LinkedIn).  
- Contact form (Netlify Forms/Formspree).  
- Confirmation message on submit.  

Add Testimonials carousel + Personal fun cards.  

Test: contact form validates required fields and shows confirmation.  
```

---

## Phase 6: Final Polish

### Prompt 8: Final Polish
```
Add:  
- Interactive particle background.  
- Light/dark mode toggle.  
- Back to Top floating button.  
- Loading spinner before site renders.  

Test: confirm toggle switches theme and Back to Top scrolls correctly.  
```
