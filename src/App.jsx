import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/main.css'

gsap.registerPlugin(ScrollTrigger)

const LINKS = {
  email: 'rbtgabriel04@gmail.com',
  github: 'https://github.com/rbtzinn',
  linkedin: 'https://www.linkedin.com/in/roberto-gabriel-ara%C3%BAjo-miranda/',
  resume: '/assets/Roberto_GabrielCV.pdf',
}

const projects = [
  {
    title: 'Dashboard Cultural',
    kind: 'Dados públicos · produto em produção',
    client: 'EMPETUR',
    date: '2026',
    image: '/assets/media/projects/emeptur-painel.webp',
    link: 'https://empetur-painel.vercel.app',
    description: 'Uma plataforma analítica que transforma bases governamentais complexas em uma consulta simples, visual e transparente.',
    impact: ['Mapa interativo de Pernambuco com D3.js', 'Normalização de dados públicos não estruturados', 'Indicadores e filtros para tomada de decisão'],
    stack: ['React', 'TypeScript', 'D3.js', 'PapaParse'],
    tone: 'sky',
    fit: 'contain',
  },
  {
    title: 'Rolê de Bike',
    kind: 'Eventos & turismo local · inscrição online',
    client: 'Rolê de Bike',
    date: '2026',
    image: '/assets/media/projects/role-de-bike.webp',
    link: 'https://roledebike.vercel.app/',
    description: 'Plataforma de eventos que transforma a divulgação do passeio em uma jornada completa de inscrição, pagamento e relacionamento com os participantes.',
    impact: ['Inscrição com autenticação e histórico do participante', 'Pagamento via Pix com QR Code e acompanhamento de status', 'Painel administrativo para gestão das inscrições'],
    stack: ['React', 'Firebase', 'Tailwind', 'Pix'],
    tone: 'lilac',
    fit: 'cover',
  },
  {
    title: 'Laura Cake',
    kind: 'Food service · cardápio digital',
    client: 'Laura Cake e Sabores da Casa',
    date: '2026',
    image: '/assets/media/projects/laura-cake.webp',
    link: 'https://laura-cake-cardapio-digital.anaiv.workers.dev/',
    description: 'Cardápio responsivo que organiza a descoberta dos produtos, simplifica a personalização do pedido e conduz a compra até o WhatsApp.',
    impact: ['Carrinho persistente com opções, adicionais e observações', 'Disponibilidade automática por dia e horário', 'Cálculo de entrega, embalagem e total antes do WhatsApp'],
    stack: ['React', 'TypeScript', 'Tailwind', 'WhatsApp'],
    tone: 'sun',
    fit: 'cover',
  },
  {
    title: 'LUXE Store',
    kind: 'E-commerce · experiência editorial',
    client: 'Projeto autoral',
    date: '2026',
    image: '/assets/media/projects/luxe-store.webp',
    link: 'https://luxestore-eight.vercel.app/',
    description: 'E-commerce bilíngue com catálogo dinâmico, direção visual premium e uma experiência de compra fluida em qualquer tela.',
    impact: ['Catálogo integrado à DummyJSON', 'Internacionalização completa PT-BR e EN', 'Navegação responsiva orientada à conversão'],
    stack: ['React', 'TypeScript', 'Tailwind', 'i18n'],
    tone: 'coral',
    fit: 'cover',
  },
  {
    title: 'APP/WEB de Frotas',
    kind: 'Operação logística · mobile first',
    client: 'Logistics Corp',
    date: '2026',
    image: '/assets/media/projects/frotas-demo.webp',
    link: 'https://frotasapp.vercel.app',
    description: 'Controle de frotas com assinatura digital, funcionamento offline e sincronização automática para equipes em campo.',
    impact: ['Assinatura capturada em canvas', 'Fila offline com sincronização automática', 'Integração com Google Sheets'],
    stack: ['Flutter', 'Dart', 'Apps Script', 'Offline'],
    tone: 'mint',
    fit: 'contain',
  },
  {
    title: 'StreamVibe',
    kind: 'Entretenimento · produto autoral',
    client: 'Projeto autoral',
    date: '2026',
    image: '/assets/media/projects/streamvibe.webp',
    link: 'https://films-port.vercel.app',
    description: 'Catálogo de filmes com descoberta de conteúdo, detalhes, trailers e uma lista pessoal que permanece entre sessões.',
    impact: ['Dados em tempo real pela API TMDB', 'Destaques editoriais dinâmicos', 'Favoritos persistidos localmente'],
    stack: ['React', 'TypeScript', 'TMDB API', 'Vite'],
    tone: 'lilac',
    fit: 'cover',
  },
  {
    title: 'Leitor de RFID',
    kind: 'Inventário · aplicação Android',
    client: 'Novo Atacarejo',
    date: '2025',
    image: '/assets/media/projects/rfid-novo.webp',
    link: 'https://github.com/rbtzinn/RFID-NovoAtacarejo',
    description: 'Aplicação implantada em loja para acelerar inventários através da leitura de etiquetas RFID em tempo real.',
    impact: ['Integração direta com hardware RFID', 'Relatórios de inventário em CSV', 'Processamento e conferência de estoque'],
    stack: ['Java', 'Android', 'RFID', 'SQLite'],
    tone: 'sun',
    fit: 'phone',
  },
]

const experience = [
  {
    role: 'Gestor Técnico — Compliance (TI & IA)',
    company: 'Administração de Suape',
    period: 'Jul 2026 — agora',
    description: 'Tecnologia, automação e inteligência artificial aplicadas a controles internos, análise de dados e mitigação de riscos.',
  },
  {
    role: 'Desenvolvedor Frontend Júnior',
    company: 'EMPETUR',
    period: '2025 — agora',
    description: 'Dashboards analíticos, visualização de dados e interfaces públicas construídas com React, Next.js, TypeScript e D3.js.',
  },
  {
    role: 'Apoio Administrativo',
    company: 'RM Terceirizações · CGE-PE',
    period: '2024 — 2025',
    description: 'Organização de processos e dados com foco em rastreabilidade, controle operacional e cumprimento de prazos.',
  },
  {
    role: 'Desenvolvedor Full Stack Freelance',
    company: 'Smartracker Tecnologias',
    period: '2022 — 2024',
    description: 'Desenvolvimento de uma solução Android para inventário RFID, processamento de dados e relatórios operacionais.',
  },
  {
    role: 'Estagiário de Suporte de TI',
    company: 'Controladoria Geral do Estado',
    period: '2022 — 2024',
    description: 'Suporte a hardware, software e redes, inventário de ativos e acompanhamento do ciclo de chamados.',
  },
]

const skillGroups = [
  {
    label: 'Interfaces',
    description: 'React · TypeScript · Next.js · JavaScript · HTML semântico · CSS / Sass · Tailwind',
  },
  {
    label: 'Produto visual',
    description: 'Figma · Design responsivo · Acessibilidade · D3.js · GSAP · Three.js · Design systems',
  },
  {
    label: 'Aplicações',
    description: 'React Native · Flutter · Dart · Java Android · Node.js · PostgreSQL · Git',
  },
]

function Arrow({ direction = 'up' }) {
  return <span aria-hidden="true">{direction === 'down' ? '↓' : '↗'}</span>
}

function ProjectCard({ project, index }) {
  const order = String(index + 1).padStart(2, '0')

  return (
    <article className={`project-card project-card--${project.tone}`} style={{ '--card-index': index }}>
      <div className="project-card__topline">
        <span>{project.kind}</span>
        <span>{order} / {String(projects.length).padStart(2, '0')}</span>
      </div>

      <div className="project-card__grid">
        <a
          className={`project-visual project-visual--${project.fit}`}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir ${project.title} em uma nova aba`}
        >
          <span className="project-visual__chrome" aria-hidden="true"><i /><i /><i /></span>
          <img
            src={project.image}
            alt={`Interface do projeto ${project.title}`}
            loading="lazy"
            decoding="async"
            width="1600"
            height="900"
          />
          <span className="project-visual__action">Visitar projeto <Arrow /></span>
        </a>

        <div className="project-info">
          <div className="project-meta">
            <span>{project.client}</span>
            <span>{project.date}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul aria-label={`Destaques de ${project.title}`}>
            {project.impact.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="project-footer">
            <div className="project-tags" aria-label="Tecnologias">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer">Abrir projeto <Arrow /></a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const rootRef = useRef(null)
  const navRef = useRef(null)
  const menuButtonRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    if (!menuOpen) return () => document.body.classList.remove('menu-open')

    const focusable = [
      ...navRef.current.querySelectorAll('a[href]'),
      menuButtonRef.current,
    ].filter(Boolean)
    const firstItem = focusable[0]
    const lastItem = focusable.at(-1)
    const focusTimer = window.setTimeout(() => firstItem?.focus(), 60)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }

      if (event.key !== 'Tab' || focusable.length === 0) return
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 721px)')
    const closeMenuOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    desktop.addEventListener('change', closeMenuOnDesktop)
    return () => desktop.removeEventListener('change', closeMenuOnDesktop)
  }, [])

  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add(
      {
        allowMotion: '(prefers-reduced-motion: no-preference)',
        stacksCards: '(min-width: 901px)',
      },
      ({ conditions }) => {
        if (!conditions.allowMotion) return undefined

        const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })
        intro
          .from('.masthead-word__inner', { yPercent: 112, duration: 1.15, stagger: 0.09 })
          .from('.hero-intro > *', { opacity: 0, y: 24, duration: 0.7, stagger: 0.08 }, '-=.78')
          .from('.hero-showcase', { opacity: 0, y: 28, duration: 0.9 }, '-=.86')
          .from('.hero-bottom', { opacity: 0, y: 18, duration: 0.65 }, '-=.72')

        gsap.to('.scroll-progress', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { start: 0, end: 'max', scrub: 0.25 },
        })

        gsap.utils.toArray('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 42,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 86%', once: true },
          })
        })

        // Os cards sao sticky e se empilham. Conforme o proximo sobe por cima,
        // o de baixo recua: o range de scroll vai do momento em que o proximo
        // entra na viewport ate ele alcancar a linha do sticky — ou seja, o
        // scrub acompanha a cobertura real, nao um intervalo arbitrario.
        if (conditions.stacksCards) {
          const cards = gsap.utils.toArray('.project-card')

          cards.forEach((card, index) => {
            const next = cards[index + 1]
            if (!next) return

            gsap.to(card, {
              scale: 0.93,
              '--card-dim': 0.32,
              ease: 'none',
              scrollTrigger: {
                trigger: next,
                // Termina em 55% e nao na linha do sticky: os cards sao mais
                // altos que a viewport, entao ao chegar no sticky o card de
                // baixo ja esta 100% coberto e o efeito nao seria visto.
                start: 'top 92%',
                end: 'top 55%',
                scrub: 0.4,
              },
            })
          })
        }

        let cancelled = false
        document.fonts?.ready.then(() => {
          if (!cancelled) ScrollTrigger.refresh()
        })

        return () => {
          cancelled = true
        }
      },
    )

    return () => media.revert()
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${LINKS.email}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="portfolio" ref={rootRef}>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="scroll-progress" aria-hidden="true" />

      <header className={menuOpen ? 'topbar menu-is-open' : 'topbar'}>
        <a className="monogram" href="#inicio" onClick={closeMenu} aria-label="Roberto Miranda — início">RM</a>

        <nav
          className={menuOpen ? 'nav is-open' : 'nav'}
          id="navigation"
          ref={navRef}
          aria-label="Navegação principal"
        >
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#experiencia" onClick={closeMenu}>Experiência</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="nav-cv" href={LINKS.resume} target="_blank" rel="noreferrer">Currículo <Arrow /></a>
        </nav>

        <div className="topbar-side">
          <span className="topbar-location">Recife · Brasil</span>
          <button
            className="menu-toggle"
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="navigation"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-pattern" aria-hidden="true" />

          <div className="hero-intro">
            <p className="eyebrow"><i aria-hidden="true" /> Frontend developer & creative coder</p>
            <p className="hero-statement">Transformo dados, regras e ideias em produtos digitais claros, rápidos e agradáveis de usar.</p>
          </div>

          <h1 className="masthead" id="hero-title" aria-label="Roberto Miranda">
            <span className="masthead-word"><span className="masthead-word__inner">Roberto</span></span>
            <span className="masthead-word masthead-word--serif"><span className="masthead-word__inner">Miranda</span></span>
          </h1>

          <article className="hero-showcase">
            <div className="hero-showcase__bar">
              <span>Case em destaque</span>
              <span>Em produção · 2026</span>
            </div>
            <a className="hero-showcase__screen" href={projects[0].link} target="_blank" rel="noreferrer" aria-label="Abrir Dashboard Cultural em uma nova aba">
              <img src={projects[0].image} alt="Dashboard Cultural da EMPETUR" width="1600" height="910" decoding="async" fetchpriority="high" />
              <span>Abrir case <Arrow /></span>
            </a>
            <div className="hero-showcase__caption">
              <div>
                <small>EMPETUR · Dados públicos</small>
                <h2>Dashboard Cultural</h2>
              </div>
              <p>Indicadores e mapas transformados em uma consulta visual, direta e transparente.</p>
            </div>
          </article>

          <div className="hero-bottom">
            <span className="availability"><i aria-hidden="true" /> Disponível para oportunidades</span>
            <a href="#projetos">Ver projetos <Arrow direction="down" /></a>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>
            <span>Interfaces com intenção</span><i>✦</i>
            <span>React & TypeScript</span><i>✦</i>
            <span>Dados que fazem sentido</span><i>✦</i>
            <span>Movimento com propósito</span><i>✦</i>
            <span>Interfaces com intenção</span><i>✦</i>
            <span>React & TypeScript</span><i>✦</i>
            <span>Dados que fazem sentido</span><i>✦</i>
            <span>Movimento com propósito</span><i>✦</i>
          </div>
        </div>

        <section className="projects" id="projetos" aria-labelledby="projects-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Trabalho selecionado · 2025—2026</p>
            <h2 id="projects-title">Produtos que já<br /><em>saíram da ideia.</em></h2>
            <p>Projetos reais e autorais apresentados pelo problema resolvido, pela experiência criada e pela engenharia que sustenta cada entrega.</p>
          </div>

          <div className="project-stack">
            {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
          </div>
        </section>

        <section className="experience" id="experiencia" aria-labelledby="experience-title">
          <div className="experience-heading" data-reveal>
            <p className="eyebrow">Trajetória profissional</p>
            <h2 id="experience-title">Experiência<br /><span>em contexto.</span></h2>
            <p>Uma carreira construída entre produto digital, dados, operação pública e tecnologia aplicada a problemas concretos.</p>
          </div>

          <div className="experience-list">
            {experience.map((item) => (
              <article data-reveal key={`${item.company}-${item.period}`}>
                <time>{item.period}</time>
                <div><h3>{item.role}</h3><strong>{item.company}</strong></div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="sobre" aria-labelledby="about-title">
          <div className="about-lead" data-reveal>
            <p className="eyebrow">Sobre mim</p>
            <p className="about-quote">Eu projeto no navegador e penso no produto inteiro.</p>
          </div>

          <div className="about-copy" data-reveal>
            <h2 id="about-title">Olá, sou Roberto.</h2>
            <p>Sou formado em Ciência da Computação e desenvolvedor frontend com experiência em produtos web, visualização de dados e aplicações mobile. Trabalho na interseção entre clareza visual e engenharia: entendo o contexto, organizo a informação e construo interfaces que continuam boas depois do lançamento.</p>
            <p>Hoje aplico tecnologia, automação e IA em ambientes de operação e compliance, sem deixar de lado o que mais gosto de fazer: transformar problemas confusos em produtos digitais diretos, acessíveis e bem acabados.</p>
            <div className="profile-links">
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href={LINKS.resume} target="_blank" rel="noreferrer">Baixar currículo <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="capabilities" aria-labelledby="capabilities-title">
          <div className="capabilities-title" data-reveal>
            <p className="eyebrow">Ferramentas & competências</p>
            <h2 id="capabilities-title">Do primeiro wireframe<br />ao deploy.</h2>
          </div>

          <div className="capability-groups">
            {skillGroups.map((group) => (
              <article className="capability-group" data-reveal key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <p className="eyebrow">Vamos construir algo bom</p>
          <h2 id="contact-title">Tem uma ideia?<br /><em>Me chama.</em></h2>
          <div className="contact-row">
            <p>Aberto a oportunidades frontend, projetos freelance e colaborações com pessoas que valorizam produto e acabamento.</p>
            <div className="contact-actions">
              <a href={`mailto:${LINKS.email}`}>Enviar e-mail <Arrow /></a>
              <button type="button" onClick={copyEmail}>
                <span aria-live="polite">{copied ? 'E-mail copiado' : 'Copiar e-mail'}</span>
              </button>
            </div>
          </div>
          <a className="contact-email" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
        </section>
      </main>

      <footer>
        <strong>Roberto Miranda</strong>
        <span>Frontend Developer · Recife, PE</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </div>
  )
}
