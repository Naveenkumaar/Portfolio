import { useEffect, useState } from 'react'
import './App.css'
import { featured, more } from './data/projects'

const roles = [
  'GenAI / Data Scientist',
  'AI Engineer — Multi-Agent Systems',
  'Builder of agents that explain themselves',
]

function useRotatingText(words, interval = 2600) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words, interval])
  return words[index]
}

const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Bash'] },
  { label: 'AI / Agents', items: ['LLM orchestration', 'RAG', 'Guardrails & evals', 'STT/TTS pipelines'] },
  { label: 'Backend', items: ['FastAPI', 'SQLite', 'PostgreSQL', 'pytest'] },
  { label: 'Tooling', items: ['Docker', 'Git', 'GitHub Actions', 'Linux'] },
]

function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">NK</a>
      <nav>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#journal">Journal</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  const role = useRotatingText(roles)
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Hi, I'm</p>
      <h1>Naveen Kumaar</h1>
      <p className="role" key={role}>{role}</p>
      <p className="hero-sub">
        I design systems that run AI agents from data, not code — config-driven
        platforms and cascaded voice agents, shipped with tests and a written
        decision log for every call I make.
      </p>
      <div className="hero-ctas">
        <a className="btn btn-primary" href="#work">See the work</a>
        <a className="btn btn-ghost" href="https://github.com/Naveenkumaar/design-journal" target="_blank" rel="noreferrer">
          Read the design journal
        </a>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-head">
        <h3>{project.name}</h3>
        <div className="project-links">
          <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>Repo ↗</a>
          <a href={project.journal} target="_blank" rel="noreferrer" aria-label={`${project.name} design journal entry`}>Journal ↗</a>
        </div>
      </div>
      <p className="project-tag">{project.tag}</p>
      <p className="project-blurb">{project.blurb}</p>
      <ul className="project-points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="chip-row">
        {project.stack.map((s) => (
          <span className="chip" key={s}>{s}</span>
        ))}
      </div>
    </article>
  )
}

function MoreProjects() {
  return (
    <div className="more-grid">
      {more.map((p) => (
        <a className="more-card" key={p.name} href={p.url} target="_blank" rel="noreferrer">
          <span className="more-name">{p.name}</span>
          <span className="more-tag">{p.tag}</span>
        </a>
      ))}
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="section">
      <h2>Featured builds</h2>
      <p className="section-sub">Two systems I designed, built, and documented end to end.</p>
      <div className="project-grid">
        {featured.map((p) => (
          <ProjectCard project={p} key={p.name} />
        ))}
      </div>
      <h3 className="more-heading">More projects</h3>
      <MoreProjects />
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Tech I reach for</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h4>{group.label}</h4>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Journal() {
  return (
    <section id="journal" className="section journal">
      <h2>Why a design journal</h2>
      <p className="section-sub">
        Every system I ship gets a written entry: the problem, the architecture,
        the decisions and why, the problems I hit and how I fixed them, and what
        I'd change if I rebuilt it today. It's how I keep myself honest about
        trade-offs instead of just shipping code.
      </p>
      <a className="btn btn-primary" href="https://github.com/Naveenkumaar/design-journal" target="_blank" rel="noreferrer">
        Browse the journal ↗
      </a>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Let's talk</h2>
      <p className="section-sub">Open to conversations about agent systems, voice AI, and GenAI products.</p>
      <div className="contact-links">
        <a href="mailto:jotheesssivan@gmail.com">jotheesssivan@gmail.com</a>
        <a href="https://www.linkedin.com/in/naveen-kumaar-/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Naveenkumaar" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Design, build, document, ship — in that order.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
