import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import ExperienceTimeline from './components/ExperienceTimeline'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Personal from './components/Personal'
import BackToTop from './components/BackToTop'
import ParticlesBackground from './components/ParticlesBackground'
import EducationTimeline from './components/EducationTimeline'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600) // simulate asset preload
    return () => clearTimeout(t)
  }, [])

  const experiences = [
  {
    "id": "fullstack-adapt",
    "role": "Data Scientist (Full Stack)",
    "company": "Marketing Analytics Startup, ADAPT Centre, Trinity College Dublin",
    "period": "July 2025 - Present",
    "description": [
  "Designed and deployed Marketing Mix Modeling (MMM) and causal attribution pipelines to map consumer journeys and channel ROI.",
  "Unified marketing data sources (Google Analytics, Meta/Facebook Ads, YouTube, internal campaigns) into automated pipelines for spend optimization and attribution.",
  "Delivered actionable insights that improved marketing budget allocation and reduced waste from misleading advertising signals.",
  "Engineered scalable workflows for data ingestion, transformation, and analysis using Pandas, NumPy, FastAPI, and AWS (S3, Batch, Docker).",
  "Developed reproducible testing and validation frameworks (PyTest, CI/CD) to ensure robustness and reliability of attribution models.",
  "Bridged models to product by deploying pipelines into production and enabling interactive dashboards and visuals (Plotly, Vega, React)."
    ]
  },
  {
    "id": "phd-ucd",
    "role": "PhD Researcher",
    "company": "Nutrition, Biomarkers, & Health Lab, University College Dublin",
    "period": "Sep 2020 - Apr 2025",
    "description": [
      "Designed MetaboVariation, a Bayesian model capturing intra-individual metabolic variation for personalized healthcare.",
      "Built interactive Shiny dashboards for effective visualization and communication of complex results.",
      "Collaborated across European research teams to bridge biostatistics and clinical applications.",
      "Received national recognition with 'Best Poster Award' and co-authored a peer-reviewed publication."
    ]
  },
  {
    "id": "intern-novartis",
    "role": "Data Science & AI Research Intern",
    "company": "Novartis Ireland Limited",
    "period": "Jun 2021 - Sep 2021",
    "description": [
      "Developed a Python pipeline for survival analysis on real-world cardiovascular data from over 40,000 patients.",
      "Applied Cox and parametric models to identify predictors of ASCVD outcomes.",
      "Ensured clean, modular, and well-documented code using SOLID principles.",
      "Presented findings across cross-functional teams, translating clinical goals into technical execution."
    ]
  },
  {
    "id": "fellow-ucd",
    "role": "Research Fellow (Short-Term)",
    "company": "University College Dublin",
    "period": "Jan 2021 - Jun 2021",
    "description": [
      "Designed the 'Sheepdog Algorithm', a bio-inspired feature selection method based on herding behavior.",
      "Performed benchmarking and A/B testing to evaluate accuracy versus dimensionality.",
      "Worked with domain experts to tailor algorithms for deployment.",
      "Presented the work to over 200 professionals, showcasing strong communication and scientific storytelling."
    ]
  }
]

  const education = [
  {
    "id": "phd-datasci",
    "degree": "PhD in Data Science",
    "institution": "University College Dublin",
    "location": "Dublin, Ireland",
    "period": "Sep 2020 - Apr 2025",
    "description": [
      "Focused on predictive modeling, scalable ML systems, and feature selection research.",
      "Published scientific work and received a national award for research excellence.",
      "Contributed to interdisciplinary teaching and led international collaborations."
    ]
  },
  {
    "id": "msc-data",
    "degree": "MSc in Data and Computational Science",
    "institution": "University College Dublin",
    "location": "Dublin, Ireland",
    "period": "Sep 2019 - Aug 2020",
    "description": [
      "Completed advanced coursework in machine learning, Bayesian analysis, and predictive analytics.",
      "Conducted applied research in healthcare using survival analysis.",
      "Built strong programming skills across R, Mathematica, and Fortran."
    ]
  },
  {
    "id": "btech-cse",
    "degree": "B.Tech in Computer Science and Engineering",
    "institution": "Guru Gobind Singh Indraprastha University",
    "location": "New Delhi, India",
    "period": "Sep 2015 - Aug 2019",
    "description": [
      "Gained a foundational understanding of OS, big data, and web/mobile development.",
      "Worked with Java, Python, and C++ across various academic and personal projects.",
      "Built strong grounding in database management and system design."
    ]
  }
]


  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-neutral-950 text-neutral-200">
        <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs tracking-wide uppercase">Loading portfolio...</p>
      </div>
    )
  }
  return (
    <>
      <ParticlesBackground />
      <NavBar />
      <main className="pt-20">
        <Intro />
        <About />
        <Skills />
        <section id="experience" className="container-section py-32">
          <h2 className="text-3xl font-bold mb-16 heading-gradient text-center">Experience</h2>
          <ExperienceTimeline experiences={experiences} />
        </section>
        <section id="education" className="container-section py-32">
          <h2 className="text-3xl font-bold mb-16 heading-gradient text-center">Education</h2>
          <EducationTimeline items={education} />
        </section>
        <Publications />
        <Projects />
        <Personal />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </>
  )
}

export default App
