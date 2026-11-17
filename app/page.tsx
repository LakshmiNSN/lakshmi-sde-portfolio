import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2,
  Terminal, Database, Cpu, ExternalLink, GraduationCap, Trophy,
  BriefcaseBusiness, Sparkles, GitBranch, Menu, FileText
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "ATSPass.ai",
    type: "AI • Full-stack web app",
    description:
      "A free AI-powered resume checker that compares a resume with a job description and highlights missing keywords to support ATS-focused improvements.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    href: "https://github.com/LakshmiNSN/atspass-ai",
    label: "View repository",
    featured: true,
  },
  {
    number: "02",
    title: "Alexa+ RAG Assistant",
    type: "AI • Retrieval-Augmented Generation",
    description:
      "A Python-based Alexa+ assistant prototype with a Flask interface and retrieval-augmented question answering. Includes an MCP server as part of the project setup.",
    stack: ["Python", "Flask", "RAG", "MCP"],
    href: "https://github.com/LakshmiNSN/alexa-rag-assistant",
    label: "View repository",
    featured: true,
  },
  {
    number: "03",
    title: "7 Days of SQL",
    type: "Practice • SQL",
    description:
      "A structured seven-day SQL practice journey covering daily concepts, queries and hands-on exercises.",
    stack: ["SQL", "Query Practice"],
    href: "https://github.com/LakshmiNSN/7-days-of-sql-",
    label: "View repository",
    featured: false,
  },
  {
    number: "04",
    title: "Python Problem Solving",
    type: "Practice • Python",
    description:
      "A collection of Python problem-solving exercises built while strengthening programming fundamentals and logical thinking.",
    stack: ["Python", "Problem Solving"],
    href: "https://github.com/LakshmiNSN/Python-Problem-solving-",
    label: "View repository",
    featured: false,
  },
];

const skills = [
  { title: "Programming", items: ["Python", "SQL"], icon: Code2 },
  { title: "Backend", items: ["FastAPI", "REST APIs", "JWT Authentication", "Swagger"], icon: Terminal },
  { title: "Database", items: ["PostgreSQL", "MySQL"], icon: Database },
  { title: "Tools & AI", items: ["Git & GitHub", "Docker", "Postman", "Generative AI"], icon: Cpu },
];

function SectionTitle({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" aria-label="Sai Naga Lakshmi home">
            <span className="brand-mark">L.</span>
            <span>lakshmi<span className="brand-muted">.dev</span></span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact" className="nav-contact">Let&apos;s talk <ArrowUpRight size={14} /></a>
          </div>
        </nav>
      </header>

      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> Open to Software Engineering opportunities</div>
          <p className="hero-kicker">HELLO, WORLD! <span>👋</span></p>
          <h1>I&apos;m Sai Naga<br /><span className="gradient-text">Lakshmi.</span></h1>
          <h2 className="hero-role">Software Developer <span className="role-divider">/</span> Python &amp; Backend</h2>
          <p className="hero-description">
            I enjoy turning ideas into practical software. I&apos;m focused on Python,
            backend development, APIs and AI-powered applications — learning by
            building and improving one project at a time.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href="https://github.com/LakshmiNSN" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          </div>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/lakshmi21/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://github.com/LakshmiNSN" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://leetcode.com/u/sainagalakshmi626/" target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={18} /></a>
            <span className="social-caption">Find me around the web</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative developer code card">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="code-window">
            <div className="window-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span>lakshmi.py</span><span className="window-lock">●</span>
            </div>
            <div className="code-content">
              <p><span className="code-muted">01</span> <span className="code-purple">class</span> <span className="code-yellow">Developer</span>:</p>
              <p><span className="code-muted">02</span> &nbsp;&nbsp;<span className="code-purple">def</span> <span className="code-blue">__init__</span>(self):</p>
              <p><span className="code-muted">03</span> &nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="code-green">&quot;Lakshmi&quot;</span></p>
              <p><span className="code-muted">04</span> &nbsp;&nbsp;&nbsp;&nbsp;self.focus = [</p>
              <p><span className="code-muted">05</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">&quot;Python&quot;</span>,</p>
              <p><span className="code-muted">06</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">&quot;Backend&quot;</span>,</p>
              <p><span className="code-muted">07</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">&quot;AI&quot;</span></p>
              <p><span className="code-muted">08</span> &nbsp;&nbsp;&nbsp;&nbsp;]</p>
              <p><span className="code-muted">09</span> &nbsp;&nbsp;&nbsp;&nbsp;self.mindset = <span className="code-green">&quot;Keep building&quot;</span></p>
              <p><span className="code-muted">10</span></p>
              <p><span className="code-muted">11</span> &nbsp;&nbsp;<span className="code-purple">def</span> <span className="code-blue">build</span>(self):</p>
              <p><span className="code-muted">12</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-green">&quot;Ideas → Impact&quot;</span><span className="cursor">▋</span></p>
            </div>
            <div className="code-footer"><span><span className="status-dot" /> Python</span><span>UTF-8&nbsp;&nbsp; LF</span></div>
          </div>
          <div className="floating-chip chip-python"><span>🐍</span> Python</div>
          <div className="floating-chip chip-api"><Terminal size={15} /> REST APIs</div>
          <div className="floating-chip chip-ai"><Sparkles size={15} /> AI</div>
        </div>
        <a href="#about" className="scroll-cue"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="section container" id="about">
        <SectionTitle eyebrow="01 / ABOUT ME" title="A little about me." />
        <div className="about-grid">
          <div className="about-main">
            <p className="about-lead">Curious by nature. Developer by choice.</p>
            <p>
              I&apos;m a B.Tech Information Technology graduate from St. Martin&apos;s
              Engineering College, Hyderabad. I like understanding how things work
              behind the scenes and building applications that solve practical problems.
            </p>
            <p>
              My current focus is strengthening my software engineering fundamentals,
              writing clean Python code, building backend APIs and exploring how AI
              can make products more useful.
            </p>
            <div className="location-line"><MapPin size={16} /> Hyderabad, Telangana, India</div>
          </div>
          <div className="about-aside">
            <div className="mini-stat"><span className="stat-icon"><GraduationCap size={18} /></span><div><strong>2026</strong><small>B.Tech IT Graduate</small></div></div>
            <div className="mini-stat"><span className="stat-icon"><Code2 size={18} /></span><div><strong>Python + Backend</strong><small>Current learning focus</small></div></div>
            <div className="mini-stat"><span className="stat-icon"><Sparkles size={18} /></span><div><strong>AI Applications</strong><small>Building and exploring</small></div></div>
          </div>
        </div>
      </section>

      <section className="section container" id="skills">
        <SectionTitle eyebrow="02 / TOOLKIT" title="Technologies I work with." note="The tools and technologies I use while learning and building projects." />
        <div className="skills-grid">
          {skills.map((group) => {
            const Icon = group.icon;
            return <div className="skill-card" key={group.title}>
              <div className="skill-card-head"><span className="skill-icon"><Icon size={19} /></span><h3>{group.title}</h3></div>
              <div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </div>;
          })}
        </div>
      </section>

      <section className="section container" id="projects">
        <SectionTitle eyebrow="03 / SELECTED WORK" title="Things I&apos;ve been building." note="A few projects and practice repositories from my development journey." />
        <div className="projects-grid">
          {projects.map((project) => <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.number}>
            <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><ArrowUpRight size={19} /></a></div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tag-list project-tags">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <ExternalLink size={14} /></a>
          </article>)}
        </div>
        <div className="all-projects"><a href="https://github.com/LakshmiNSN?tab=repositories" target="_blank" rel="noreferrer">Explore all repositories on GitHub <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="section container" id="education">
        <SectionTitle eyebrow="04 / BACKGROUND" title="Education & achievements." />
        <div className="background-grid">
          <div className="education-card">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div><span className="timeline-date">2022 — 2026</span><h3>Bachelor of Technology</h3><p className="timeline-sub">Information Technology</p><p>St. Martin&apos;s Engineering College · Hyderabad</p><span className="score-pill">CGPA: 7.9 / 10</span></div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div><span className="timeline-date">2020 — 2022</span><h3>Intermediate</h3><p>Sri Chaitanya Junior College</p><span className="score-pill">73.3%</span></div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div><span className="timeline-date">Completed</span><h3>SSC</h3><p>Triveni Talent School</p><span className="score-pill">10 / 10 GPA</span></div>
            </div>
          </div>
          <div className="achievement-card">
            <div className="achievement-heading"><Trophy size={19} /><h3>Highlights</h3></div>
            <div className="achievement"><span className="achievement-symbol">🏆</span><div><strong>Vibe Coding Competition</strong><p>Winner</p></div></div>
            <div className="achievement"><span className="achievement-symbol">🥉</span><div><strong>Equinox Hackathon</strong><p>3rd Place</p></div></div>
            <div className="achievement"><span className="achievement-symbol">📘</span><div><strong>TCS iON Cognitive</strong><p>Score: 65%</p></div></div>
          </div>
        </div>
      </section>

      <section className="section container" id="contact">
        <div className="contact-panel">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Have an opportunity<br />or an idea? <span className="gradient-text">Let&apos;s connect.</span></h2>
          <p className="contact-copy">I&apos;m open to entry-level software engineering opportunities, collaborations and conversations about technology.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://www.linkedin.com/in/lakshmi21/" target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={15} /></a>
            <a className="button button-secondary" href="https://github.com/LakshmiNSN" target="_blank" rel="noreferrer"><Github size={17} /> Follow on GitHub</a>
          </div>
          <div className="contact-foot"><span><MapPin size={14} /> Hyderabad, India</span><span>Built with Next.js &amp; Tailwind CSS</span></div>
        </div>
      </section>

      <footer className="footer container">
        <a className="brand" href="#home"><span className="brand-mark">L.</span><span>lakshmi<span className="brand-muted">.dev</span></span></a>
        <p>Designed & built by Sai Naga Lakshmi · © {new Date().getFullYear()}</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </main>
  );
}
