import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LINKS, projects, techGroups } from './data/portfolioData'
import HeroScene from './components/ui/HeroScene'
import './styles/tailwind.css'

gsap.registerPlugin(ScrollTrigger)

const content = {
  pt: {
    nav: ['Projetos', 'Experiência', 'Sobre', 'Contato'],
    eyebrow: 'Desenvolvedor Frontend · Recife, Brasil',
    titleA: 'Produtos digitais',
    titleB: 'claros, rápidos',
    titleC: 'e bem construídos.',
    intro: 'Transformo necessidades reais em interfaces responsivas e confiáveis — de dashboards governamentais a e-commerces e aplicações mobile.',
    work: 'Conhecer projetos',
    contact: 'Falar comigo',
    availability: 'Disponível para novas oportunidades',
    featured: 'Case em destaque',
    featuredCopy: 'Dados públicos complexos transformados em uma experiência clara de consulta e transparência.',
    live: 'Ver projeto ao vivo',
    proof: [
      ['5', 'projetos selecionados'],
      ['4+', 'anos construindo soluções'],
      ['Web + Mobile', 'experiência multidisciplinar'],
    ],
    projectsLabel: 'Trabalho selecionado',
    projectsTitle: 'Projetos feitos para funcionar no mundo real.',
    projectsIntro: 'Uma seleção de produtos em produção e projetos autorais, com decisões de interface, integração e engenharia explicadas sem ruído.',
    open: 'Abrir projeto',
    result: 'Principais entregas',
    experienceLabel: 'Experiência',
    experienceTitle: 'Tecnologia aplicada a produto, dados e operação.',
    aboutLabel: 'Sobre',
    aboutTitle: 'Frontend com visão de produto e responsabilidade de entrega.',
    aboutCopy: 'Sou Roberto Miranda, graduado em Ciência da Computação. Minha experiência combina desenvolvimento frontend, visualização de dados, aplicações mobile e tecnologia aplicada a processos públicos. Gosto de entender o problema antes de escrever código e de entregar interfaces que sejam simples para quem usa e sustentáveis para quem mantém.',
    stackLabel: 'Competências',
    stackTitle: 'Tecnologias que sustentam meu trabalho',
    contactLabel: 'Vamos conversar',
    contactTitle: 'Tem um desafio em frontend ou produto digital?',
    contactCopy: 'Estou aberto a oportunidades remotas ou híbridas, projetos freelance e boas conversas sobre tecnologia.',
    email: 'Enviar e-mail',
    copy: 'Copiar e-mail',
    copied: 'E-mail copiado',
    cv: 'Baixar currículo',
    current: 'Atual',
    footer: 'Projetado e desenvolvido por Roberto Miranda.',
  },
  en: {
    nav: ['Projects', 'Experience', 'About', 'Contact'],
    eyebrow: 'Frontend Developer · Recife, Brazil',
    titleA: 'Digital products',
    titleB: 'that feel clear,',
    titleC: 'fast and solid.',
    intro: 'I turn real needs into responsive, reliable interfaces — from government dashboards to e-commerce and mobile applications.',
    work: 'Explore projects',
    contact: 'Get in touch',
    availability: 'Available for new opportunities',
    featured: 'Featured case',
    featuredCopy: 'Complex public data transformed into a clear experience for research and transparency.',
    live: 'View live project',
    proof: [
      ['5', 'selected projects'],
      ['4+', 'years building solutions'],
      ['Web + Mobile', 'multidisciplinary experience'],
    ],
    projectsLabel: 'Selected work',
    projectsTitle: 'Projects built to work in the real world.',
    projectsIntro: 'A selection of production products and personal work, showing interface, integration, and engineering decisions without the noise.',
    open: 'Open project',
    result: 'Key outcomes',
    experienceLabel: 'Experience',
    experienceTitle: 'Technology applied to product, data, and operations.',
    aboutLabel: 'About',
    aboutTitle: 'Frontend expertise with product thinking and delivery ownership.',
    aboutCopy: 'I am Roberto Miranda, a Computer Science graduate. My experience combines frontend development, data visualization, mobile applications, and technology applied to public processes. I understand the problem before writing code and build interfaces that are simple to use and sustainable to maintain.',
    stackLabel: 'Capabilities',
    stackTitle: 'Technologies behind my work',
    contactLabel: 'Let’s talk',
    contactTitle: 'Have a frontend or digital product challenge?',
    contactCopy: 'I am open to remote or hybrid opportunities, freelance projects, and good conversations about technology.',
    email: 'Send email',
    copy: 'Copy email',
    copied: 'Email copied',
    cv: 'Download résumé',
    current: 'Present',
    footer: 'Designed and developed by Roberto Miranda.',
  },
}

const experiences = {
  pt: [
    ['Gestor Técnico — Compliance (TI & IA)', 'Administração de Suape', 'Jul 2026 — Atual', 'Tecnologia, automação e inteligência artificial aplicadas a controles internos, análise de dados e mitigação de riscos.'],
    ['Desenvolvedor Frontend Júnior', 'EMPETUR', '2025 — Atual', 'Dashboards analíticos e indicadores com React, Next.js, TypeScript, D3.js e integração de dados governamentais.'],
    ['Apoio Administrativo', 'RM Terceirizações · CGE-PE', '2024 — 2025', 'Organização de dados, processos e documentos com foco em rastreabilidade, controle operacional e prazos.'],
    ['Desenvolvedor Full Stack Freelance', 'Smartracker Tecnologias', '2022 — 2024', 'Aplicativo Android de inventário RFID com leitura em tempo real, tratamento de dados e relatórios em CSV.'],
    ['Estagiário de Suporte de TI', 'Controladoria Geral do Estado', '2022 — 2024', 'Suporte em hardware, software e redes, inventário de ativos e gestão do ciclo de chamados.'],
  ],
  en: [
    ['Technical Manager — Compliance (IT & AI)', 'Suape Port Administration', 'Jul 2026 — Present', 'Technology, automation, and AI applied to internal controls, data analysis, and risk mitigation.'],
    ['Junior Frontend Developer', 'EMPETUR', '2025 — Present', 'Analytics dashboards and indicators using React, Next.js, TypeScript, D3.js, and government data integrations.'],
    ['Administrative Support', 'RM Terceirizações · State Comptroller', '2024 — 2025', 'Data, process, and document organization focused on traceability, operational control, and deadlines.'],
    ['Freelance Full Stack Developer', 'Smartracker Tecnologias', '2022 — 2024', 'Android RFID inventory app with real-time reading, data processing, and CSV reports.'],
    ['IT Support Intern', 'State Comptroller', '2022 — 2024', 'Hardware, software, and network support, asset inventory, and ticket lifecycle management.'],
  ],
}

const projectOrder = ['dash', 'luxe-store', 'frotas', 'filmsport', 'rfid']

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function App() {
  const appRef = useRef(null)
  const [lang, setLang] = useState(() => localStorage.getItem('portfolioLang') || 'pt')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const text = content[lang]
  const orderedProjects = projectOrder.map((id) => projects.find((project) => project.id === id)).filter(Boolean)
  const featured = orderedProjects[0]

  useEffect(() => {
    localStorage.setItem('portfolioLang', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return undefined

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .from('.hero-kicker', { opacity: 0, y: 18, duration: .65 })
        .from('.hero h1 span', { opacity: 0, yPercent: 110, rotate: 2, duration: .9, stagger: .1 }, '-=.4')
        .from('.hero-copy > p, .hero-actions, .availability', { opacity: 0, y: 20, duration: .65, stagger: .08 }, '-=.55')
        .from('.scene-shell', { opacity: 0, scale: .92, rotate: 2, duration: 1 }, '-=.95')

      gsap.to('.scene-shell', {
        yPercent: 16,
        rotate: -2,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
      })

      gsap.from('.proof-row > div', {
        opacity: 0,
        y: 28,
        stagger: .12,
        duration: .7,
        scrollTrigger: { trigger: '.proof-row', start: 'top 86%' },
      })

      gsap.utils.toArray('.section-intro').forEach((heading) => {
        gsap.from(heading.children, {
          opacity: 0,
          y: 34,
          stagger: .1,
          duration: .8,
          ease: 'power3.out',
          scrollTrigger: { trigger: heading, start: 'top 82%' },
        })
      })

      gsap.utils.toArray('.project-row').forEach((row) => {
        const media = row.querySelector('.project-media')
        const copy = row.querySelector('.project-copy')
        gsap.from([media, copy], {
          opacity: 0,
          y: 56,
          stagger: .12,
          duration: .9,
          ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 82%' },
        })
        if (!media.classList.contains('dashboard')) {
          gsap.to(row.querySelector('.project-image'), {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: .8 },
          })
        }
      })

      gsap.from('.timeline article', {
        opacity: 0,
        x: -28,
        stagger: .1,
        duration: .65,
        scrollTrigger: { trigger: '.timeline', start: 'top 82%' },
      })

      gsap.from('.about-main, .skills-panel', {
        opacity: 0,
        y: 44,
        stagger: .15,
        duration: .85,
        scrollTrigger: { trigger: '.about-section', start: 'top 78%' },
      })

      gsap.from('.contact-section > *', {
        opacity: 0,
        y: 34,
        stagger: .1,
        duration: .75,
        scrollTrigger: { trigger: '.contact-section', start: 'top 80%' },
      })
    }, appRef)

    return () => context.revert()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText(LINKS.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <div className="site-shell" ref={appRef}>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Roberto Miranda — início" onClick={closeMenu}>
            <span>RM</span>
            <div><strong>Roberto Miranda</strong><small>Frontend Developer</small></div>
          </a>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
            {['projetos', 'experiencia', 'sobre', 'contato'].map((target, index) => (
              <a href={`#${target}`} key={target} onClick={closeMenu}>{text.nav[index]}</a>
            ))}
          </nav>

          <div className="header-actions">
            <div className="language-switch" aria-label="Selecionar idioma">
              <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            </div>
            <a className="header-cv" href={LINKS.resume} target="_blank" rel="noreferrer">CV <Arrow /></a>
            <button className={menuOpen ? 'menu-button is-open' : 'menu-button'} onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}><i /><i /></button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="hero-kicker"><span />{text.eyebrow}</div>
            <h1><span>{text.titleA}</span><span><em>{text.titleB}</em></span><span>{text.titleC}</span></h1>
            <p>{text.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projetos">{text.work} <Arrow /></a>
              <a className="button secondary" href={`mailto:${LINKS.email}`}>{text.contact}</a>
            </div>
            <div className="availability"><span />{text.availability}</div>
          </div>

          <div className="scene-shell">
            <HeroScene />
            <div className="scene-grid" />
            <div className="scene-label"><span>{text.featured}</span><small>WEBGL / THREE.JS</small></div>
            <div className="scene-card">
              <small>{featured.client} · {featured.date}</small>
              <strong>{featured.title}</strong>
              <p>{text.featuredCopy}</p>
              <a href={featured.link} target="_blank" rel="noreferrer">{text.live} <Arrow /></a>
            </div>
            <span className="scene-coordinate coordinate-a">35.4° S</span>
            <span className="scene-coordinate coordinate-b">008 / 026</span>
          </div>
        </section>

        <section className="proof-row" aria-label="Resumo profissional">
          {text.proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section className="section projects-section" id="projetos" data-reveal>
          <div className="section-intro">
            <p className="section-label">01 · {text.projectsLabel}</p>
            <h2>{text.projectsTitle}</h2>
            <p>{text.projectsIntro}</p>
          </div>

          <div className="projects-list">
            {orderedProjects.map((project, index) => (
              <article className="project-row" key={project.id}>
                <a className={`project-media${project.isMobile ? ' mobile' : ''}${project.id === 'dash' ? ' dashboard' : ''}`} href={project.link} target="_blank" rel="noreferrer">
                  {project.isMobile && <img className="project-blur" src={project.image} alt="" aria-hidden="true" />}
                  <img className="project-image" src={project.image} alt={`Preview de ${project.title}`} loading="lazy" />
                  <span className="project-number">0{index + 1}</span>
                </a>
                <div className="project-copy">
                  <div className="project-meta"><span>{project.client}</span><span>{project.date}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.desc[lang]}</p>
                  <div className="project-outcomes">
                    <small>{text.result}</small>
                    <ul>{project.highlights[lang].slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className="project-bottom">
                    <div className="tag-list">{project.tags.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a href={project.link} target="_blank" rel="noreferrer">{text.open} <Arrow /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experiencia" data-reveal>
          <div className="section-intro compact">
            <p className="section-label">02 · {text.experienceLabel}</p>
            <h2>{text.experienceTitle}</h2>
          </div>
          <div className="timeline">
            {experiences[lang].map(([role, company, period, description], index) => (
              <article key={`${company}-${period}`}>
                <span className="timeline-index">0{index + 1}</span>
                <div><h3>{role}</h3><p>{company}</p></div>
                <p>{description}</p>
                <time>{period}</time>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="sobre" data-reveal>
          <div className="about-main">
            <p className="section-label">03 · {text.aboutLabel}</p>
            <h2>{text.aboutTitle}</h2>
            <p>{text.aboutCopy}</p>
            <div className="profile-links">
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href={LINKS.resume} target="_blank" rel="noreferrer">{text.cv} <Arrow /></a>
            </div>
          </div>
          <aside className="skills-panel">
            <p className="section-label">04 · {text.stackLabel}</p>
            <h3>{text.stackTitle}</h3>
            {techGroups.map((group) => (
              <div className="skill-group" key={group.id}>
                <strong>{group.cat}</strong>
                <div>{group.items.slice(0, 6).map((item) => <span key={item.n}>{item.n}</span>)}</div>
              </div>
            ))}
          </aside>
        </section>

        <section className="contact-section" id="contato" data-reveal>
          <p className="section-label">05 · {text.contactLabel}</p>
          <h2>{text.contactTitle}</h2>
          <p>{text.contactCopy}</p>
          <div className="contact-actions">
            <a className="button light" href={`mailto:${LINKS.email}`}>{text.email} <Arrow /></a>
            <button className="button outline" onClick={copyEmail}>{copied ? text.copied : text.copy}</button>
          </div>
          <a className="contact-email" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
        </section>
      </main>

      <footer>
        <a href="#inicio">Roberto Miranda</a>
        <p>{text.footer}</p>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
