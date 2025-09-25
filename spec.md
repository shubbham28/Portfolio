# Interactive Portfolio Website Specification (Shubbham Gupta)

## 1. Overview
A **single-page scrolling portfolio site** showcasing Shubbham Gupta’s CV, projects, publications, skills, and personal highlights. The site should be **minimal, professional, responsive, and dynamic**, with light/dark mode support and interactive backgrounds.  

- **Tech stack:**  
  - **Frontend:** React (with Vite or CRA), CSS (Tailwind or Styled Components)  
  - **Deployment:** GitHub Pages / Netlify (initial free subdomain)  
  - **Data sources:**  
    - CV (PDF hosted on GitHub repo)  
    - GitHub API (pinned + latest repos)  
    - Manual JSON for publications, projects, testimonials, personal highlights  
  - **Forms:** Netlify Forms or Formspree → email  
  - **Visitor counter:** Free counter API or Netlify serverless function  

---

## 2. Site Architecture

### Sections (scroll order)
1. **Hero / Intro**
   - Static tagline: *“Data Scientist that builds AI agents turning ideas into reality”*  
   - Stylized avatar illustration  
   - Quick links (GitHub, LinkedIn, CV download button in nav)  

2. **About Me**
   - Short intro paragraph  
   - Highlight stats with icons (🎓 PhD in Data Science, 💼 5+ years experience, 📄 10+ publications)  

3. **Skills**
   - Grouped by category (Programming, Data Science, Cloud, Tools)  
   - Each category in its own card  
   - Skills tagged with **color-coded labels** (Expert = green, Intermediate = blue, Beginner = grey)  

4. **Experience (Timeline)**  
   - Vertical timeline  
   - Company logos in **color**  
   - Auto-expand on scroll  
   - Longer descriptions hidden under **“Read More”**  

5. **Publications**
   - Cards with title only visible  
   - Abstract collapsed by default → expands in modal popup  
   - Popup shows: abstract, citation details (authors, year, journal), external link  
   - Navigation arrows inside modal to browse  

6. **Projects**
   - Cards (image, title, short description, tech stack tags, GitHub + LinkedIn links)  
   - Ordered by **latest first**  
   - Modal popup for full description & larger screenshots  
   - Modal includes navigation arrows  

7. **Testimonials**
   - Rotating carousel with **text + name only**  
   - Auto-rotate with timer  
   - Pauses on hover  

8. **Personal Fun Section**
   - Fun cards (icon/image + short caption) for hobbies (running, travel, etc.)  

9. **Contact**
   - Quick links (Email, GitHub, LinkedIn, Twitter/X if provided)  
   - Contact form (Name, Email, Message → email via Netlify Forms/Formspree)  
   - Confirmation message shown after submission  

10. **Footer**
    - © Shubbham Gupta [Year]  
    - Visitor counter (plain number)  
    - Quick nav links with smooth scroll  

---

## 3. UI/UX & Styling

- **Theme:** Minimal, professional palette (blue, grey, white)  
- **Light/Dark Mode Toggle**  
- **Particle background (interactive, consistent across sections)**  
- **Animations:**  
  - Smooth fade-in for text/cards on scroll  
  - Auto-expanding timeline  
  - Smooth section scrolling  
  - Loading spinner before site loads  
- **Hero tagline:** Static (no typing animation)  
- **Nav Bar:**  
  - Sticky with active link highlighting  
  - Transparent at top → solid on scroll  
  - Contains nav links + Download CV button (blends in, not accent)  

---

## 4. Data Handling

- **CV:**  
  - Latest PDF pulled from GitHub repo for download button.  

- **GitHub integration:**  
  - Pull pinned repositories via GitHub API (fixed set).  
  - Display latest repos below pinned.  
  - Cache results client-side (to avoid hitting API limits).  

- **LinkedIn:**  
  - No API integration (manual links embedded in project cards).  

- **Visitor Counter:**  
  - Use a lightweight service (e.g., `countapi.xyz` or Netlify serverless).  
  - Display only in footer.  

- **Static Data (JSON):**  
  - Projects, Publications, Testimonials, Personal highlights stored in JSON file.  
  - Loaded at build time or lazy-loaded when section appears.  

---

## 5. Error Handling

- **GitHub API errors:**  
  - Show fallback message: *“Unable to load latest repos — check my GitHub”*  
- **CV download error:**  
  - Show fallback button linking directly to GitHub repo.  
- **Contact form errors:**  
  - Show inline error message if submission fails.  
- **Visitor counter failure:**  
  - Hide counter if service unavailable.  

---

## 6. Testing Plan

**Unit & Integration Testing (React Testing Library / Jest):**  
- ✅ Hero loads with avatar + tagline + links.  
- ✅ Nav links scroll smoothly & highlight active section.  
- ✅ Light/dark mode toggle works across all sections.  
- ✅ Skills cards render tags with correct color coding.  
- ✅ Timeline auto-expands on scroll.  
- ✅ Projects & Publications modals open, close, and cycle with arrows.  
- ✅ Contact form validates inputs, sends successfully, shows confirmation.  
- ✅ Visitor counter increments & displays correctly.  
- ✅ Footer nav links scroll smoothly.  

**Performance Testing:**  
- Ensure lazy loading reduces initial load.  
- Verify particle animations don’t slow mobile devices.  

**Cross-Device Responsiveness:**  
- Test across desktop, tablet, mobile.  
- Ensure sticky nav + modals work on small screens.  

**Deployment Testing:**  
- Verify GitHub Pages / Netlify deployment works.  
- Confirm CV download button pulls latest PDF from repo.  
