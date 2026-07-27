import { useEffect, useRef, useState } from 'react'
import { LINKS, THEMES, projects, techGroups } from './data/portfolioData'
import './styles/tailwind.css'

const copy = {
  pt: {
    nav: ['Sobre', 'Experiência', 'Projetos', 'Stack', 'Contato'],
    available: 'Disponível para oportunidades',
    eyebrow: 'Desenvolvedor Frontend · Recife, PE',
    heroTitle: 'Interfaces com clareza, código com propósito.',
    heroText: 'Desenvolvo produtos digitais rápidos, acessíveis e responsivos com React, TypeScript e Next.js — da ideia ao deploy.',
    viewWork: 'Explorar projetos',
    contact: 'Entrar em contato',
    selected: 'Projeto selecionado',
    openProject: 'Abrir projeto',
    scroll: 'Role para descobrir',
    aboutLabel: '01 / Sobre',
    aboutTitle: 'Transformo problemas reais em experiências digitais simples.',
    aboutText: 'Sou Desenvolvedor Frontend Júnior, formado em Ciência da Computação, com atuação em dashboards governamentais, e-commerce e aplicações mobile. Gosto de unir produto, design e engenharia para entregar interfaces que funcionam bem — e fazem sentido para quem usa.',
    experienceLabel: '02 / Experiência',
    experienceTitle: 'Trajetória profissional',
    experienceIntro: 'Experiência técnica construída entre produto digital, dados, operações públicas e projetos em produção.',
    projectsLabel: '03 / Projetos',
    projectsTitle: 'Trabalho selecionado',
    projectsIntro: 'Projetos que mostram como penso interface, produto, dados e implementação.',
    viewCase: 'Ver projeto',
    stackLabel: '04 / Stack',
    stackTitle: 'Ferramentas que uso para construir',
    stackIntro: 'Uma base sólida de frontend, complementada por mobile, backend e dados.',
    contactLabel: '05 / Contato',
    contactTitle: 'Tem um produto para tirar do papel?',
    contactText: 'Estou disponível para oportunidades remotas ou híbridas, projetos freelance e conversas sobre frontend.',
    emailMe: 'Enviar e-mail',
    copyEmail: 'Copiar e-mail',
    emailCopied: 'E-mail copiado para a área de transferência!',
    whatsapp: 'WhatsApp',
    resume: 'Baixar currículo',
    current: 'Atual',
    rights: 'Desenvolvido com React, intenção e café.',
    filterAll: 'Todos',
    filterReact: 'React & Next.js',
    filterMobile: 'Mobile & Hardware',
    filterData: 'Dados & Dashboards',
    showcaseTitle: 'Vitrine Interativa',
    switchNotice: 'Clique para navegar pelos cases:',
    bentoHeader: 'Visão Geral de Impacto',
    bentoCard1Title: 'EMPETUR · Dashboard Cultural',
    bentoCard1Desc: 'Plataforma analítica oficial em produção para transparência ativa com React, D3.js e mapas de calor.',
    bentoCard2Title: 'Developer Identity',
    bentoCard3Title: 'Hardware & IoT Mobile',
    bentoCard3Desc: 'Automação de estoque com RFID Java Android e controle de frotas Flutter.',
  },
  en: {
    nav: ['About', 'Experience', 'Projects', 'Stack', 'Contact'],
    available: 'Available for opportunities',
    eyebrow: 'Frontend Developer · Recife, Brazil',
    heroTitle: 'Clear interfaces, purposeful code.',
    heroText: 'I build fast, accessible, responsive digital products with React, TypeScript, and Next.js — from idea to deployment.',
    viewWork: 'Explore projects',
    contact: 'Get in touch',
    selected: 'Selected project',
    openProject: 'Open project',
    scroll: 'Scroll to discover',
    aboutLabel: '01 / About',
    aboutTitle: 'I turn real problems into simple digital experiences.',
    aboutText: 'I am a Junior Frontend Developer and Computer Science graduate with experience in government dashboards, e-commerce, and mobile applications. I combine product, design, and engineering to deliver interfaces that work well — and make sense to their users.',
    experienceLabel: '03 / Projects',
    experienceTitle: 'Professional journey',
    experienceIntro: 'Technical experience built across digital products, data, public operations, and production projects.',
    projectsLabel: '03 / Projects',
    projectsTitle: 'Selected work',
    projectsIntro: 'Projects that show how I approach interface, product, data, and implementation.',
    viewCase: 'View project',
    stackLabel: '04 / Stack',
    stackTitle: 'Tools I use to build',
    stackIntro: 'A strong frontend foundation supported by mobile, backend, and data skills.',
    contactLabel: '05 / Contact',
    contactTitle: 'Have a product ready to become real?',
    contactText: 'I am available for remote or hybrid opportunities, freelance work, and frontend conversations.',
    emailMe: 'Send an email',
    copyEmail: 'Copy email',
    emailCopied: 'Email copied to clipboard!',
    whatsapp: 'WhatsApp',
    resume: 'Download résumé',
    current: 'Present',
    rights: 'Built with React, intention, and coffee.',
    filterAll: 'All Work',
    filterReact: 'React & Next.js',
    filterMobile: 'Mobile & Hardware',
    filterData: 'Data & Dashboards',
    showcaseTitle: 'Interactive Showcase',
    switchNotice: 'Click to explore cases:',
    bentoHeader: 'Impact Overview',
    bentoCard1Title: 'EMPETUR · Cultural Dashboard',
    bentoCard1Desc: 'Official production analytics platform for active transparency using React, D3.js, and heatmaps.',
    bentoCard2Title: 'Developer Identity',
    bentoCard3Title: 'Hardware & IoT Mobile',
    bentoCard3Desc: 'Inventory automation with RFID Java Android and Flutter fleet management.',
  },
}

const experiences = {
  pt: [
    {
      role: 'Gestor Técnico — Compliance (TI & IA)',
      company: 'Administração de Suape',
      place: 'Ipojuca / Cabo de Santo Agostinho, PE',
      period: 'Jul 2026 — Atual',
      summary: 'Tecnologia e inteligência artificial aplicadas a controles internos, análise de dados, automação e mitigação de riscos.',
      tags: ['Compliance', 'Inteligência Artificial', 'Automação'],
    },
    {
      role: 'Desenvolvedor Frontend Júnior',
      company: 'EMPETUR',
      place: 'Recife, PE',
      period: '2025 — Atual',
      summary: 'Dashboards analíticos e KPIs com React, Next.js, TypeScript, D3.js e integração de dados governamentais.',
      tags: ['React', 'Next.js', 'TypeScript', 'D3.js'],
    },
    {
      role: 'Apoio Administrativo',
      company: 'RM Terceirizações · CGE-PE',
      place: 'Recife, PE',
      period: '2024 — 2025',
      summary: 'Organização de dados, processos e documentos com foco em rastreabilidade, controle operacional e prazos.',
      tags: ['Processos', 'Dados', 'Operações'],
    },
    {
      role: 'Desenvolvedor Full Stack Freelance',
      company: 'Smartracker Tecnologias',
      place: 'Remoto',
      period: '2022 — 2024',
      summary: 'Aplicativo Android de inventário RFID, leitura em tempo real, tratamento de dados e relatórios em CSV.',
      tags: ['Android', 'Java', 'RFID', 'SQLite'],
    },
    {
      role: 'Estagiário de Suporte de TI',
      company: 'Controladoria Geral do Estado',
      place: 'Recife, PE',
      period: '2022 — 2024',
      summary: 'Suporte em hardware, software e redes, inventário de ativos e gestão completa do ciclo de chamados.',
      tags: ['Suporte', 'Redes', 'Inventário'],
    },
  ],
  en: [
    {
      role: 'Technical Manager — Compliance (IT & AI)',
      company: 'Suape Port Administration',
      place: 'Ipojuca / Cabo de Santo Agostinho, Brazil',
      period: 'Jul 2026 — Present',
      summary: 'Technology and AI applied to internal controls, data analysis, automation, and risk mitigation.',
      tags: ['Compliance', 'Artificial Intelligence', 'Automation'],
    },
    {
      role: 'Junior Frontend Developer',
      company: 'EMPETUR',
      place: 'Recife, Brazil',
      period: '2025 — Present',
      summary: 'Analytics dashboards and KPIs using React, Next.js, TypeScript, D3.js, and government data integrations.',
      tags: ['React', 'Next.js', 'TypeScript', 'D3.js'],
    },
    {
      role: 'Administrative Support',
      company: 'RM Terceirizações · State Comptroller',
      place: 'Recife, Brazil',
      period: '2024 — 2025',
      summary: 'Data, process, and document organization focused on traceability, operational control, and deadlines.',
      tags: ['Processes', 'Data', 'Operations'],
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'Smartracker Tecnologias',
      place: 'Remote',
      period: '2022 — 2024',
      summary: 'Android RFID inventory app with real-time reading, data processing, and CSV reporting.',
      tags: ['Android', 'Java', 'RFID', 'SQLite'],
    },
    {
      role: 'IT Support Intern',
      company: 'State Comptroller',
      place: 'Recife, Brazil',
      period: '2022 — 2024',
      summary: 'Hardware, software, and network support, asset inventory, and complete ticket lifecycle management.',
      tags: ['Support', 'Networks', 'Inventory'],
    },
  ],
}

const projectOrder = ['luxe-store', 'dash', 'filmsport', 'frotas', 'rfid']

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolioLang') || 'pt')
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolioThemeV2') || 'aurora')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeShowcaseId, setActiveShowcaseId] = useState('luxe-store')
  const [projectFilter, setProjectFilter] = useState('all')
  const [toastMessage, setToastMessage] = useState('')

  const text = copy[lang]
  const orderedProjects = projectOrder.map(id => projects.find(project => project.id === id)).filter(Boolean)
  const activeShowcase = projects.find(p => p.id === activeShowcaseId) || orderedProjects[0]

  useEffect(() => {
    localStorage.setItem('portfolioLang', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  useEffect(() => {
    localStorage.setItem('portfolioThemeV2', theme)
    const themeObj = THEMES[theme] || THEMES.aurora
    document.documentElement.style.setProperty('--lime', themeObj.hex)
    document.documentElement.style.setProperty('--lime-soft', themeObj.dim)
    document.documentElement.style.setProperty('--accent-secondary', themeObj.secondary)
  }, [theme])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const sections = document.querySelectorAll('.section-new, .contact-new, .marquee, .bento-section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navTargets = ['sobre', 'experiencia', 'projetos', 'stack', 'contato']
  const closeMenu = () => setMenuOpen(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(LINKS.email)
    setToastMessage(text.emailCopied)
    setTimeout(() => setToastMessage(''), 3000)
  }

  // Filtering projects
  const filteredProjects = orderedProjects.filter(project => {
    if (projectFilter === 'react') return project.tags.includes('React') || project.tags.includes('Next.js') || project.tags.includes('TypeScript')
    if (projectFilter === 'mobile') return project.tags.includes('Flutter') || project.tags.includes('Java') || project.tags.includes('Android')
    if (projectFilter === 'data') return project.id === 'dash' || project.id === 'frotas' || project.id === 'rfid'
    return true
  })

  return (
    <div className="site">
      {toastMessage && (
        <div className="toast-notification">
          <CheckIcon />
          <p>{toastMessage}</p>
        </div>
      )}

      <header className="topbar-wrapper">
        <div className="topbar">
          <a className="logo" href="#inicio" aria-label="Roberto Miranda — início">
            <span>RM</span>
            <small>Frontend Developer</small>
          </a>

          <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
            {navTargets.map((target, index) => (
              <a key={target} href={`#${target}`} onClick={closeMenu}>
                <span>0{index + 1}</span>{text.nav[index]}
              </a>
            ))}
          </nav>

          <div className="topbar-actions">
            <div className="unified-control-bar">
              <div className="theme-selector-dots" aria-label="Seletor de tema">
                {Object.keys(THEMES).map(tColor => (
                  <button
                    key={tColor}
                    className={`theme-dot-item ${theme === tColor ? 'active' : ''}`}
                    style={{ backgroundColor: THEMES[tColor].hex }}
                    onClick={() => setTheme(tColor)}
                    title={`Tema: ${tColor}`}
                    aria-label={`Tema ${tColor}`}
                  />
                ))}
              </div>

              <span className="control-divider" />

              <div className="language-toggle-pill" aria-label="Idioma">
                <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
                <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
              </div>

              <span className="control-divider" />

              <a className="control-cv-btn" href={LINKS.resume} target="_blank" rel="noreferrer">
                <span>CV</span>
                <Arrow />
              </a>
            </div>

            <button
              className={`menu-toggle ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(value => !value)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              <i /><i />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION WITH INTERACTIVE MOCKUP SHOWCASE */}
        <section className="hero-new" id="inicio">
          <div className="hero-content">
            <p className="availability"><i />{text.available}</p>
            <p className="eyebrow">{text.eyebrow}</p>
            <h1>Roberto<br /><span>Miranda</span></h1>
            <p className="hero-statement">{text.heroTitle}</p>
            <p className="hero-copy-new">{text.heroText}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">{text.viewWork} <Arrow /></a>
              <a className="button button-ghost" href={`mailto:${LINKS.email}`}>{text.contact}</a>
            </div>
          </div>

          {/* SHOWCASE INTERATIVO */}
          <div className="hero-showcase-container">
            <div className="showcase-tabs-nav">
              <span className="showcase-label">{text.showcaseTitle}</span>
              <div className="showcase-pills">
                {orderedProjects.map((p, idx) => (
                  <button
                    key={p.id}
                    className={`showcase-tab ${activeShowcaseId === p.id ? 'active' : ''}`}
                    onClick={() => setActiveShowcaseId(p.id)}
                  >
                    0{idx + 1} {p.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="showcase-card">
              <div className="showcase-header-bar">
                <div className="browser-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="browser-url-bar">
                  <span>https://{activeShowcase.id}.robertomiranda.dev</span>
                </div>
                <a className="showcase-external-btn" href={activeShowcase.link} target="_blank" rel="noreferrer" title="Abrir em nova aba">
                  <Arrow />
                </a>
              </div>

              <a className={`showcase-media ${activeShowcase.isMobile ? 'is-mobile-media' : ''}`} href={activeShowcase.link} target="_blank" rel="noreferrer">
                {activeShowcase.isMobile && (
                  <img src={activeShowcase.image} className="showcase-bg-blur" aria-hidden="true" alt="" />
                )}
                <img src={activeShowcase.image} alt={`Preview de ${activeShowcase.title}`} className="showcase-main-img" />
                <span className="showcase-status-tag">{activeShowcase.status[lang]}</span>
              </a>

              <div className="showcase-body">
                <div>
                  <span className="showcase-client">{activeShowcase.client} · {activeShowcase.date}</span>
                  <h3>{activeShowcase.title}</h3>
                </div>
                <p className="showcase-desc">{activeShowcase.desc[lang]}</p>
                <div className="showcase-tags">
                  {activeShowcase.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID HIGHLIGHTS SECTION */}
        <section className="bento-section">
          <p className="section-label-new">{text.bentoHeader}</p>
          <div className="bento-grid">
            {/* Card 1: Featured Project Focus (EMPETUR) */}
            <a className="bento-card bento-hero-case" href="https://empetur-painel.vercel.app" target="_blank" rel="noreferrer">
              <div className="bento-badge">PRODUCTION PROJECT</div>
              <div className="bento-content">
                <h3>{text.bentoCard1Title}</h3>
                <p>{text.bentoCard1Desc}</p>
                <div className="mini-tags" style={{ marginTop: '14px' }}>
                  <span>React</span><span>D3.js</span><span>Next.js</span><span>Gov Data</span>
                </div>
              </div>
              <span className="bento-arrow"><Arrow /></span>
            </a>

            {/* Card 2: Developer Code Snippet / Identity */}
            <div className="bento-card bento-code">
              <div className="bento-card-head">
                <span className="code-lang">TypeScript / React</span>
                <span className="code-status">● Active</span>
              </div>
              <pre className="code-snippet">
                <code>
                  <span className="code-kw">const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name: <span className="code-str">'Roberto Miranda'</span>,<br />
                  &nbsp;&nbsp;role: <span className="code-str">'Frontend Engineer'</span>,<br />
                  &nbsp;&nbsp;stack: [<span className="code-str">'React'</span>, <span className="code-str">'TypeScript'</span>, <span className="code-str">'Next'</span>],<br />
                  &nbsp;&nbsp;focus: <span className="code-str">'Perf & UX'</span><br />
                  &#125;
                </code>
              </pre>
            </div>

            {/* Card 3: Metrics */}
            <div className="bento-card bento-metrics">
              <div className="metric-box">
                <strong>05</strong>
                <span>{lang === 'pt' ? 'Projetos em produção' : 'Production projects'}</span>
              </div>
              <div className="metric-box">
                <strong>04+</strong>
                <span>{lang === 'pt' ? 'Anos desenvolvendo' : 'Years building'}</span>
              </div>
              <div className="metric-box">
                <strong>PT/EN</strong>
                <span>{lang === 'pt' ? 'Comunicação Bilíngue' : 'Bilingual Skills'}</span>
              </div>
            </div>

            {/* Card 4: Hardware & Mobile Spotlight */}
            <div className="bento-card bento-spotlight">
              <span className="bento-badge">MOBILE & HARDWARE</span>
              <h3>{text.bentoCard3Title}</h3>
              <p>{text.bentoCard3Desc}</p>
              <div className="mini-tags" style={{ marginTop: '12px' }}>
                <span>Java Android</span><span>RFID</span><span>Flutter</span><span>SQLite</span>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div>
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'D3.js', 'Flutter', 'Node.js', 'Figma', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'D3.js', 'Flutter', 'Node.js', 'Figma'].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i /></span>
            ))}
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section className="section-new about-new" id="sobre">
          <div className="section-label-new">{text.aboutLabel}</div>
          <div className="about-copy">
            <h2>{text.aboutTitle}</h2>
            <p>{text.aboutText}</p>
            <div className="about-links">
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            </div>
          </div>
          <div className="stats">
            <article><strong>05</strong><span>{lang === 'pt' ? 'projetos selecionados' : 'selected projects'}</span></article>
            <article><strong>04+</strong><span>{lang === 'pt' ? 'anos construindo soluções' : 'years building solutions'}</span></article>
            <article><strong>PT/EN</strong><span>{lang === 'pt' ? 'interfaces e comunicação' : 'interfaces and communication'}</span></article>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="section-new experience-new" id="experiencia">
          <div className="section-heading">
            <div>
              <p className="section-label-new">{text.experienceLabel}</p>
              <h2>{text.experienceTitle}</h2>
            </div>
            <p>{text.experienceIntro}</p>
          </div>

          <div className="experience-list">
            {experiences[lang].map((experience, index) => (
              <article className="experience-row" key={`${experience.company}-${experience.period}`}>
                <span className="experience-index">0{index + 1}</span>
                <div className="experience-role">
                  <h3>{experience.role}</h3>
                  <p>{experience.company} · {experience.place}</p>
                </div>
                <p className="experience-summary">{experience.summary}</p>
                <div className="experience-meta">
                  <time>{experience.period}</time>
                  <div className="mini-tags">{experience.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION WITH CATEGORY FILTER */}
        <section className="section-new projects-new" id="projetos">
          <div className="section-heading">
            <div>
              <p className="section-label-new">{text.projectsLabel}</p>
              <h2>{text.projectsTitle}</h2>
            </div>
            <p>{text.projectsIntro}</p>
          </div>

          {/* FILTER PILLS */}
          <div className="projects-filter-bar">
            <button className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`} onClick={() => setProjectFilter('all')}>
              {text.filterAll} ({orderedProjects.length})
            </button>
            <button className={`filter-btn ${projectFilter === 'react' ? 'active' : ''}`} onClick={() => setProjectFilter('react')}>
              {text.filterReact}
            </button>
            <button className={`filter-btn ${projectFilter === 'mobile' ? 'active' : ''}`} onClick={() => setProjectFilter('mobile')}>
              {text.filterMobile}
            </button>
            <button className={`filter-btn ${projectFilter === 'data' ? 'active' : ''}`} onClick={() => setProjectFilter('data')}>
              {text.filterData}
            </button>
          </div>

          <div className="project-grid-new">
            {filteredProjects.map((project, index) => (
              <a
                className={`project-card-new project-${(index % 5) + 1}`}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.id}
              >
                <div className={`project-image-new ${project.isMobile ? 'is-mobile-image' : ''}`}>
                  {project.isMobile && (
                    <img src={project.image} className="project-bg-blur" aria-hidden="true" alt="" />
                  )}
                  <img src={project.image} alt={`Preview do projeto ${project.title}`} className="project-main-img" loading="lazy" />
                  <span className="project-arrow"><Arrow /></span>
                  <span className="project-count">0{index + 1}</span>
                </div>
                <div className="project-info-new">
                  <div>
                    <span>{project.client} · {project.date}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.desc[lang]}</p>
                  <div className="project-footer">
                    <div className="mini-tags">{project.tags.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div>
                    <span className="case-link">{text.viewCase} <Arrow /></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* STACK SECTION */}
        <section className="section-new stack-new" id="stack">
          <div className="section-heading">
            <div>
              <p className="section-label-new">{text.stackLabel}</p>
              <h2>{text.stackTitle}</h2>
            </div>
            <p>{text.stackIntro}</p>
          </div>

          <div className="stack-list">
            {techGroups.map((group, index) => (
              <article key={group.id}>
                <span>0{index + 1}</span>
                <h3>{group.cat}</h3>
                <div>{group.items.map(item => <span key={item.n}>{item.n}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION WITH QUICK COPY EMAIL BUTTON */}
        <section className="contact-new" id="contato">
          <p className="section-label-new">{text.contactLabel}</p>
          <div className="contact-layout">
            <div>
              <h2>{text.contactTitle}</h2>
              <p>{text.contactText}</p>
            </div>
            <div className="contact-actions">
              <a className="contact-main" href={`mailto:${LINKS.email}`}>
                <span>{text.emailMe}</span>
                <strong>{LINKS.email}</strong>
                <Arrow />
              </a>
              
              <button className="copy-email-btn" onClick={handleCopyEmail}>
                <CopyIcon />
                <span>{text.copyEmail}</span>
              </button>

              <div className="contact-social-row">
                <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">{text.whatsapp} <Arrow /></a>
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
                <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a href={LINKS.resume} target="_blank" rel="noreferrer">{text.resume} <Arrow /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a href="#inicio">Roberto Miranda</a>
        <p>{text.rights}</p>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
