import { useEffect, useState } from 'react'
import { LINKS, projects, techGroups } from './data/portfolioData'
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
    whatsapp: 'WhatsApp',
    resume: 'Baixar currículo',
    current: 'Atual',
    rights: 'Desenvolvido com React, intenção e café.',
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
    experienceLabel: '02 / Experience',
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
    whatsapp: 'WhatsApp',
    resume: 'Download résumé',
    current: 'Present',
    rights: 'Built with React, intention, and coffee.',
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

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolioLang') || 'pt')
  const [menuOpen, setMenuOpen] = useState(false)
  const text = copy[lang]
  const orderedProjects = projectOrder.map(id => projects.find(project => project.id === id)).filter(Boolean)
  const featured = orderedProjects[0]

  useEffect(() => {
    localStorage.setItem('portfolioLang', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const navTargets = ['sobre', 'experiencia', 'projetos', 'stack', 'contato']
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className="topbar">
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
          <div className="language" aria-label="Idioma">
            <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <a className="nav-cv" href={LINKS.resume} target="_blank" rel="noreferrer">CV <Arrow /></a>
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(value => !value)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <i /><i />
          </button>
        </div>
      </header>

      <main>
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

          <a className="featured-card" href={featured.link} target="_blank" rel="noreferrer">
            <div className="featured-media">
              <img src={featured.image} alt={`Preview do projeto ${featured.title}`} />
              <span className="featured-number">01</span>
              <span className="featured-open"><Arrow /></span>
            </div>
            <div className="featured-info">
              <span>{text.selected}</span>
              <h2>{featured.title}</h2>
              <p>{featured.client} · {featured.date}</p>
              <div className="mini-tags">
                {featured.tags.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </a>

          <div className="hero-side-note">
            <span>2022—2026</span>
            <p>{text.scroll}</p>
            <i />
          </div>
        </section>

        <div className="marquee" aria-label="Tecnologias">
          <div>
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'D3.js', 'Flutter', 'Node.js', 'Figma', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS'].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i /></span>
            ))}
          </div>
        </div>

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

        <section className="section-new projects-new" id="projetos">
          <div className="section-heading">
            <div>
              <p className="section-label-new">{text.projectsLabel}</p>
              <h2>{text.projectsTitle}</h2>
            </div>
            <p>{text.projectsIntro}</p>
          </div>

          <div className="project-grid-new">
            {orderedProjects.map((project, index) => (
              <a
                className={`project-card-new project-${index + 1}`}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.id}
              >
                <div className="project-image-new">
                  <img src={project.image} alt={`Preview do projeto ${project.title}`} loading="lazy" />
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
              <div>
                <a href={LINKS.whatsapp} target="_blank" rel="noreferrer">{text.whatsapp} <Arrow /></a>
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
