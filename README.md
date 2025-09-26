# Shubbham Gupta — Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS. It showcases sections like Intro, About, Skills, Experience, Education, Publications, Projects, and Contact, with a dark-only theme and smooth interactions.

## Features

- Dark-only design with Tailwind CSS
- Sticky navbar with eased smooth-scrolling to sections
- Full-screen particle background (tsParticles slim) with hover/click interactions
- Publications modal (wider layout, justified abstracts)
- Projects loaded from local JSON with optional LinkedIn links
- Contact form powered by Netlify Forms (honeypot + reCAPTCHA)

## Tech Stack

- React + Vite
- Tailwind CSS
- react-tsparticles (tsParticles slim engine)
- Netlify (hosting) + Netlify Forms
<<<<<<< HEAD
=======

## Getting Started

Prerequisites: Node.js 18+ and npm

Install and run locally:

```bash
npm install
npm run dev
```

Build and preview production:

```bash
npm run build
npm run preview
```

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`

Forms & reCAPTCHA:

- The contact form uses Netlify Forms with a honeypot and `data-netlify-recaptcha`.
- The reCAPTCHA widget is injected by Netlify on a deployed site (it may not render in plain local dev). Use a deployed preview or `netlify dev` to test end-to-end.
- Configure notifications in the Netlify dashboard under Forms.

## Editing Content

- Update your details, links, and section content in the React components and JSON content files (e.g., skills, publications, projects).
- Replace the avatar and assets in `public/` as needed.

## License

This repository contains personal portfolio content. You can reference the structure, but please replace content, images, and data with your own before reuse.
>>>>>>> 292b199 (Resolved the icon issue)
