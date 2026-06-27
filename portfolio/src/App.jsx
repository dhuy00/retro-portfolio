import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import avatar from "./assets/avatar.jpg";

const projects = [
  {
    id: 1,
    index: "01",
    title: "Shopee Clone",
    category: "Web",
    summary:
      "A full-stack commerce platform built around the complete buying and selling journey.",
    description:
      "An e-commerce application for sellers and customers to discover products, place orders, manage storefronts, and operate accounts through a cohesive workflow.",
    tech: ["React", "Express.js", "MySQL", "PostgreSQL"],
    features: [
      "Role-based customer and seller accounts",
      "Inventory, variants, pricing, and categories",
      "Cart and end-to-end order processing",
      "Product and shop review system",
    ],
    github: "https://github.com/dhuy00/MDM_project",
    tone: "lime",
  },
  {
    id: 2,
    index: "02",
    title: "Knowly",
    category: "Web",
    summary:
      "A collaborative project workspace for tracking tasks, issues, and team progress.",
    description:
      "Inspired by Redmine, Knowly helps teams organize projects, assign work, track progress, and keep daily collaboration in one clear workspace.",
    tech: ["React", "Node.js", "PostgreSQL"],
    features: [
      "Task and issue lifecycle management",
      "Shared project workspaces",
      "Member and manager permissions",
      "Progress and activity dashboard",
    ],
    github: "https://github.com/dhuy00/Knowly",
    tone: "violet",
  },
  {
    id: 3,
    index: "03",
    title: "University Manager",
    category: "Desktop",
    summary:
      "A security-focused academic administration system with granular data access.",
    description:
      "A Windows Forms application for managing students, staff, and courses while applying database security models and detailed activity auditing.",
    tech: ["C#", "Oracle", "WinForms"],
    features: [
      "DAC, RBAC, and OLS authorization",
      "Academic record administration",
      "Audit logging for sensitive changes",
      "Role-specific dashboards",
    ],
    github: "https://github.com/dhuy00/University-Management-App",
    tone: "pink",
  },
  {
    id: 4,
    index: "04",
    title: "Employee Operations",
    category: "Web",
    summary:
      "An internal operations platform connecting people, attendance, and payroll.",
    description:
      "A scalable enterprise application that streamlines employee records, attendance, payroll, permissions, and internal request workflows.",
    tech: ["React", "Spring Boot", "PostgreSQL", "Redux"],
    features: [
      "Employee and department management",
      "Attendance and payroll workflows",
      "Role-based permission controls",
      "Internal request processing",
    ],
    github: "https://gitlab.com/ZR1ck/empmanagement",
    tone: "violet",
  },
  {
    id: 5,
    index: "05",
    title: "GeoMart Analytics",
    category: "Data",
    summary:
      "A business intelligence warehouse turning fragmented data into decisions.",
    description:
      "A centralized data warehouse that uses ETL pipelines, OLAP analysis, dimensional modeling, and visual dashboards to surface business insights.",
    tech: ["SQL Server", "SSIS", "SSAS", "OLAP"],
    features: [
      "Multi-source ETL and data cleansing",
      "Hierarchical dimension modeling",
      "Drill-down, roll-up, slice, and dice",
      "Analytical dashboards and reporting",
    ],
    github: "https://github.com/dhuy00/project_BI",
    tone: "lime",
  },
];

const stack = [
  {
    label: "Frontend",
    value: "01",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    value: "02",
    skills: ["Laravel", "Node.js", "Spring Boot", "REST APIs"],
  },
  {
    label: "Data",
    value: "03",
    skills: ["PostgreSQL", "MySQL", "MariaDB", "Oracle"],
  },
  {
    label: "Workflow",
    value: "04",
    skills: ["Git", "Docker", "Figma", "CI/CD"],
  },
];

const navigationLinks = [
  ["Home", "home"],
  ["About", "about"],
  ["Stack", "stack"],
  ["Work", "work"],
  ["Experience", "experience"],
];

function Navigation() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [...navigationLinks.map(([, id]) => id), "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    let animationFrame;

    const updateActiveSection = () => {
      const probeY = window.innerHeight * 0.32;
      const currentSection =
        sections.find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= probeY && bounds.bottom > probeY;
        }) ?? sections.at(-1);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }

      animationFrame = undefined;
    };

    const scheduleUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <header className="site-header">
      <a
        className={activeSection === "home" ? "brand is-active" : "brand"}
        href="#home"
        aria-label="Go to home"
        aria-current={activeSection === "home" ? "page" : undefined}
      >
        <span>DH</span>
        <span className="brand-dot" />
      </a>
      <nav className={open ? "nav-links is-open" : "nav-links"}>
        {navigationLinks.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "is-active" : ""}
            aria-current={activeSection === id ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          className={activeSection === "contact" ? "nav-cta is-active" : "nav-cta"}
          href="#contact"
          aria-current={activeSection === "contact" ? "page" : undefined}
          onClick={() => setOpen(false)}
        >
          Let&apos;s talk <ArrowRight size={15} />
        </a>
      </nav>
      <button
        className="menu-button"
        onClick={() => setOpen((current) => !current)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero dark-section" id="home">
      <div className="starfield" />
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span className="status-dot" /> Available for new opportunities
          </p>
          <h1>
            I build digital
            <br />
            products that <span className="highlight">work.</span>
          </h1>
          <p className="hero-lead">
            I&apos;m Đức Huy, a full-stack developer turning complex requirements
            into focused, reliable web experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-inverted" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>
            <a
              className="text-link"
              href="/CV_VoDucHuy.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View résumé <ExternalLink size={15} />
            </a>
          </div>
          <div className="hero-meta">
            <span>Based in Ho Chi Minh City</span>
            <span>Full-stack / Web / Data</span>
          </div>
        </div>

        <div className="build-note reveal reveal-delay" aria-label="How I approach product development">
          <div className="note-binding" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <div className="note-header">
            <span>Field notes / 001</span>
            <span>HCM · 2026</span>
          </div>
          <p className="note-kicker">How I work</p>
          <h2>From rough idea to a product people can use.</h2>
          <div className="process-list">
            <div className="process-item">
              <span className="process-number">01</span>
              <div>
                <strong>Discover</strong>
                <p>Understand the real problem before choosing the tools.</p>
              </div>
            </div>
            <div className="process-item">
              <span className="process-number">02</span>
              <div>
                <strong>Build</strong>
                <p>Connect thoughtful interfaces to dependable systems.</p>
              </div>
            </div>
            <div className="process-item">
              <span className="process-number">03</span>
              <div>
                <strong>Refine</strong>
                <p>Test the edges, remove friction, then ship with care.</p>
              </div>
            </div>
          </div>
          <div className="note-footer">
            <span>Full-stack execution</span>
            <span className="note-signature">Huy.</span>
          </div>
          <div className="note-stamp" aria-hidden="true">BUILD<br />WITH<br />INTENT</div>
        </div>
      </div>
      <div className="scroll-note">
        <span>Scroll to inspect</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="light-section about" id="about">
      <div className="container about-grid">
        <div className="portrait-wrap reveal">
          <div className="portrait-frame">
            <img src={avatar} alt="Võ Đức Huy" />
          </div>
          <div className="portrait-caption">
            <span>Võ Đức Huy</span>
            <span>Full-stack developer</span>
          </div>
          <div className="portrait-sticker">Hello!</div>
        </div>

        <div className="about-copy reveal">
          <p className="eyebrow dark">01 / About me</p>
          <h2>Curiosity became a career in building for the web.</h2>
          <div className="about-text">
            <p>
              My path into programming started with Pascal in high school. That
              first curiosity led me to Information Technology at the University
              of Science, then into full-stack product development.
            </p>
            <p>
              Today I work across Vue.js, React, Laravel, databases, and APIs.
              I care about the details users notice and the architecture they
              never have to.
            </p>
          </div>
          <div className="about-facts">
            <div><strong>1+</strong><span>Year professional experience</span></div>
            <div><strong>5</strong><span>End-to-end projects</span></div>
            <div><strong>945</strong><span>TOEIC Listening & Reading</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="dark-section stack-section" id="stack">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Capabilities</p>
            <h2>Tools I use to move from idea to production.</h2>
          </div>
          <p>
            A practical toolkit shaped by product work—not a collection of
            buzzwords.
          </p>
        </div>
        <div className="stack-grid">
          {stack.map((group) => (
            <article className="stack-card" key={group.label}>
              <div className="stack-card-head">
                <span>{group.label}</span>
                <code>{group.value}</code>
              </div>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}<ArrowRight size={15} /></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="learning-strip">
          <span className="status-dot" />
          <strong>Currently exploring</strong>
          <span>Java</span><span>AWS</span><span>Three.js</span><span>UI/UX systems</span>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual tone-${project.tone}`}>
      <div className="visual-topbar">
        <span>{project.category.toLowerCase()}.case</span>
        <span>•••</span>
      </div>
      <div className="visual-content">
        <div className="visual-sidebar">
          <span /><span /><span /><span />
        </div>
        <div className="visual-main">
          <span className="visual-label">PROJECT / {project.index}</span>
          <strong>{project.title}</strong>
          <div className="visual-chart">
            <i /><i /><i /><i /><i />
          </div>
          <div className="visual-blocks"><span /><span /><span /></div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const filters = ["All", "Web", "Desktop", "Data"];
  const visible = filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className="light-section work-section" id="work">
      <div className="container">
        <div className="section-heading dark-heading">
          <div>
            <p className="eyebrow dark">03 / Selected work</p>
            <h2>Projects built to solve real workflows.</h2>
          </div>
          <div className="filter-row" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="project-list">
          {visible.map((project) => (
            <article className="project-row" key={project.id}>
              <ProjectVisual project={project} />
              <div className="project-copy">
                <div className="project-number">{project.index} / {project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tech-list">
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-actions">
                  <button className="button button-primary" onClick={() => setSelected(project)}>
                    View case study <ArrowRight size={16} />
                  </button>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>
                    <FiGithub size={19} /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <article
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close dialog">
              <X />
            </button>
            <p className="eyebrow dark">{selected.index} / Case study</p>
            <h2 id="project-title">{selected.title}</h2>
            <p className="modal-lead">{selected.description}</p>
            <div className="modal-grid">
              <div>
                <span className="modal-label">Core capabilities</span>
                <ul>
                  {selected.features.map((feature) => (
                    <li key={feature}><Check size={16} />{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="modal-label">Technology</span>
                <div className="modal-tech">
                  {selected.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
            <a className="button button-primary" href={selected.github} target="_blank" rel="noreferrer">
              <FiGithub size={17} /> View source
            </a>
          </article>
        </div>
      )}
    </section>
  );
}

function Experience() {
  return (
    <section className="dark-section experience-section" id="experience">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Experience</p>
            <h2>Learning fast. Shipping carefully.</h2>
          </div>
        </div>
        <div className="timeline">
          <article className="timeline-item featured">
            <div className="timeline-date">2025 — Present</div>
            <div className="timeline-mark"><BriefcaseBusiness size={18} /></div>
            <div className="timeline-card">
              <span className="role-tag">Professional experience</span>
              <h3>Fresher Full-Stack Developer</h3>
              <h4>Lampart Co., Ltd.</h4>
              <ul>
                <li>Develop responsive Vue.js interfaces and integrate Laravel REST APIs.</li>
                <li>Maintain enterprise modules for attendance, employee operations, and room booking.</li>
                <li>Contribute to a real-time internal chat application.</li>
              </ul>
              <div className="tech-list dark-tags">
                {["Vue.js", "Laravel", "MariaDB", "PHP", "Socket", "TypeScript"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">2021 — 2025</div>
            <div className="timeline-mark"><GraduationCap size={18} /></div>
            <div className="timeline-card">
              <span className="role-tag">Education</span>
              <h3>Bachelor of Information Technology</h3>
              <h4>University of Science</h4>
              <p>Built a strong foundation in software engineering, databases, security, and product development.</p>
            </div>
          </article>
        </div>
        <div className="certification-row">
          <span>English certifications / 2025</span>
          <strong>TOEIC L&R — 945</strong>
          <strong>TOEIC S&W — 320</strong>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <>
      <section className="light-section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow dark">05 / Contact</p>
            <h2>Have a useful problem to solve?</h2>
          </div>
          <div className="contact-copy">
            <p>
              I&apos;m open to full-stack opportunities where product thinking,
              thoughtful UI, and dependable engineering matter.
            </p>
            <a
              className="big-mail"
              href="https://www.linkedin.com/in/huy-duc-abb718356/"
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <ArrowRight />
            </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="squiggle" />
        <div className="container footer-grid">
          <a className="brand footer-brand" href="#home"><span>DH</span><span className="brand-dot" /></a>
          <p>Designed and built by Võ Đức Huy.<br />Ho Chi Minh City, Vietnam.</p>
          <div className="social-links">
            <a href="https://github.com/dhuy00" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/huy-duc-abb718356/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
            <a href="/CV_VoDucHuy.pdf" target="_blank" rel="noreferrer"><ExternalLink /> Résumé</a>
          </div>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Stack />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
