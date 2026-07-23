import { ICONS } from '../../data/icons'
import { projects } from '../../data/portfolioData'

const copy = {
  pt: {
    eyebrow: '// perfil profissional',
    title: <>Frontend com visão de <span className="accent">produto.</span></>,
    bio: 'Desenvolvedor Frontend Júnior formado em Ciência da Computação, com experiência em e-commerce, produtos mobile e dashboards analíticos governamentais. Trabalho com React, TypeScript e Next.js, da descoberta e prototipação ao deploy.',
    availability: 'Disponível para trabalho remoto ou híbrido',
    experienceLabel: '// experiência',
    experienceTitle: <>Trajetória <span className="accent">Profissional</span></>,
    projectsLabel: '// projetos selecionados',
    projectsTitle: <>Do conceito à <span className="accent">produção</span></>,
    projectsIntro: 'Uma seleção dos projetos mais recentes do currículo, com interfaces responsivas, integrações reais e foco em resultado.',
    projectAction: 'Ver case',
    educationLabel: '// formação',
    educationTitle: <>Educação <span className="accent">Acadêmica</span></>,
    current: 'Atual',
  },
  en: {
    eyebrow: '// professional profile',
    title: <>Frontend with a <span className="accent">product mindset.</span></>,
    bio: 'Junior Frontend Developer and Computer Science graduate with experience in e-commerce, mobile products, and government analytics dashboards. I work with React, TypeScript, and Next.js, from discovery and prototyping through deployment.',
    availability: 'Available for remote or hybrid opportunities',
    experienceLabel: '// experience',
    experienceTitle: <>Professional <span className="accent">Journey</span></>,
    projectsLabel: '// selected projects',
    projectsTitle: <>From concept to <span className="accent">production</span></>,
    projectsIntro: 'A selection of the latest projects from my résumé, combining responsive interfaces, real integrations, and measurable outcomes.',
    projectAction: 'View case',
    educationLabel: '// education',
    educationTitle: <>Academic <span className="accent">Background</span></>,
    current: 'Present',
  },
}

const experiences = {
  pt: [
    {
      role: 'Gestor Técnico — Compliance (TI & IA)',
      company: 'Administração de Suape',
      location: 'Ipojuca / Cabo de Santo Agostinho, PE',
      period: 'Jul 2026 — Atual',
      bullets: [
        'Aplicação de TI e Inteligência Artificial para fortalecer controles internos e apoiar a mitigação de riscos.',
        'Mapeamento de processos e estruturação de rotinas de monitoramento, automação e análise de dados.',
        'Interface com áreas internas para alinhamento de exigências regulatórias e institucionais.',
      ],
    },
    {
      role: 'Desenvolvedor Frontend Júnior',
      company: 'EMPETUR — Empresa de Turismo de Pernambuco',
      location: 'Recife, PE',
      period: '2025 — Atual',
      bullets: [
        'Desenvolvimento de dashboards analíticos e KPIs estratégicos para controle interno.',
        'Painéis interativos com React, Next.js, TypeScript, Tailwind CSS, D3.js e Recharts.',
        'Integração de APIs REST e fontes governamentais, com entregas iterativas orientadas à usabilidade.',
      ],
    },
    {
      role: 'Apoio Administrativo',
      company: 'RM Terceirizações · Controladoria Geral do Estado',
      location: 'Recife, PE',
      period: '2024 — 2025',
      bullets: [
        'Organização de documentos, dados e processos com foco em rastreabilidade e cumprimento de prazos.',
        'Apoio a relatórios, sistemas internos, planilhas de controle e rotinas administrativas.',
      ],
    },
    {
      role: 'Freelance — Desenvolvedor Full Stack',
      company: 'Smartracker Tecnologias',
      location: 'Remoto',
      period: '2022 — 2024',
      bullets: [
        'Aplicativo Android para inventário RFID do Novo Atacarejo, funcional em produção.',
        'Leitura de tags em tempo real, backend para tratamento de dados e exportação de relatórios em CSV.',
      ],
    },
    {
      role: 'Estagiário — Suporte de TI',
      company: 'Controladoria Geral do Estado',
      location: 'Recife, PE',
      period: '2022 — 2024',
      bullets: [
        'Suporte em hardware, software e redes, manutenção de equipamentos e gestão do ciclo de chamados.',
        'Gerenciamento de inventário e documentação técnica padronizada.',
      ],
    },
  ],
  en: [
    {
      role: 'Technical Manager — Compliance (IT & AI)',
      company: 'Suape Port Administration',
      location: 'Ipojuca / Cabo de Santo Agostinho, Brazil',
      period: 'Jul 2026 — Present',
      bullets: [
        'Applying IT and Artificial Intelligence to strengthen internal controls and risk mitigation.',
        'Mapping processes and structuring monitoring, automation, and data analysis routines.',
        'Working across internal teams to align regulatory and institutional requirements.',
      ],
    },
    {
      role: 'Junior Frontend Developer',
      company: 'EMPETUR — Pernambuco Tourism Board',
      location: 'Recife, Brazil',
      period: '2025 — Present',
      bullets: [
        'Building analytics dashboards and strategic KPIs for internal operations.',
        'Interactive products with React, Next.js, TypeScript, Tailwind CSS, D3.js, and Recharts.',
        'REST API and government data integrations with iterative, usability-led delivery.',
      ],
    },
    {
      role: 'Administrative Support',
      company: 'RM Terceirizações · State Comptroller',
      location: 'Recife, Brazil',
      period: '2024 — 2025',
      bullets: [
        'Organized documents, data, and processes with a focus on traceability and deadlines.',
        'Supported reports, internal systems, control sheets, and administrative workflows.',
      ],
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'Smartracker Tecnologias',
      location: 'Remote',
      period: '2022 — 2024',
      bullets: [
        'Production Android app for Novo Atacarejo RFID inventory operations.',
        'Real-time tag reading, data-processing backend, and CSV report exports.',
      ],
    },
    {
      role: 'IT Support Intern',
      company: 'State Comptroller',
      location: 'Recife, Brazil',
      period: '2022 — 2024',
      bullets: [
        'Hardware, software, and network support, equipment maintenance, and ticket lifecycle management.',
        'IT inventory management and standardized technical documentation.',
      ],
    },
  ],
}

const education = {
  pt: [
    ['Graduação', 'Análise e Desenvolvimento de Sistemas', 'Gran Faculdade · 2025 — 2026'],
    ['Bacharelado', 'Ciência da Computação', 'UNINASSAU · 2022 — 2025'],
    ['Curso Profissionalizante', 'Engenheiro Front-end', 'EBAC · 2023 — 2025'],
  ],
  en: [
    ['Associate Degree', 'Systems Analysis and Development', 'Gran Faculdade · 2025 — 2026'],
    ["Bachelor's Degree", 'Computer Science', 'UNINASSAU · 2022 — 2025'],
    ['Professional Program', 'Frontend Engineer', 'EBAC · 2023 — 2025'],
  ],
}

const cvProjectIds = ['luxe-store', 'filmsport', 'dash', 'frotas', 'rfid']

const AboutPage = ({ lang, openModal }) => {
  const text = copy[lang]
  const selectedProjects = cvProjectIds
    .map(id => projects.find(project => project.id === id))
    .filter(Boolean)

  return (
    <div className="about-page">
      <header className="page-header about-hero stagger">
        <div>
          <p className="sec-label">{text.eyebrow}</p>
          <h1 className="page-title">Roberto <span className="accent">Miranda</span></h1>
          <p className="about-positioning">{text.title}</p>
          <p className="bio">{text.bio}</p>
          <div className="meta-row">
            <span className="meta-item">Recife, PE</span>
            <span className="meta-item">React · TypeScript · Next.js</span>
            <span className="meta-item meta-available"><span className="live-dot" />{text.availability}</span>
          </div>
        </div>
        <aside className="about-stats" aria-label={lang === 'pt' ? 'Resumo profissional' : 'Professional summary'}>
          <div><strong>05</strong><span>{lang === 'pt' ? 'projetos em destaque' : 'featured projects'}</span></div>
          <div><strong>04+</strong><span>{lang === 'pt' ? 'anos construindo soluções' : 'years building solutions'}</span></div>
          <div><strong>PT / EN</strong><span>{lang === 'pt' ? 'comunicação e interfaces' : 'communication and interfaces'}</span></div>
        </aside>
      </header>

      <section className="section">
        <p className="sec-label">{text.experienceLabel}</p>
        <h2 className="sec-title">{text.experienceTitle}</h2>
        <div className="timeline timeline-modern">
          {experiences[lang].map((experience, index) => (
            <article className="tl-item" key={`${experience.company}-${experience.period}`}>
              <div className="tl-dot" />
              {index < experiences[lang].length - 1 && <div className="tl-line" />}
              <div className="tl-content">
                <div className="tl-header">
                  <div>
                    <p className="tl-role">{experience.role}</p>
                    <p className="tl-company">{experience.company} <span className="tl-loc">· {experience.location}</span></p>
                  </div>
                  <span className="tl-period">{experience.period}</span>
                </div>
                <ul className="bullets">
                  {experience.bullets.map(bullet => (
                    <li className="bullet" key={bullet}>
                      <span className="bullet-arrow">{ICONS.arrow}</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-projects">
        <div className="section-intro">
          <div>
            <p className="sec-label">{text.projectsLabel}</p>
            <h2 className="sec-title">{text.projectsTitle}</h2>
          </div>
          <p>{text.projectsIntro}</p>
        </div>
        <div className="about-project-grid">
          {selectedProjects.map((project, index) => (
            <button className="about-project-card" key={project.id} onClick={() => openModal(project.id)}>
              <div className="about-project-media">
                <img src={project.image} alt="" loading="lazy" />
                <span className="about-project-index">0{index + 1}</span>
              </div>
              <div className="about-project-body">
                <div>
                  <p className="about-project-client">{project.client} · {project.date}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="about-project-arrow" aria-hidden="true">{ICONS.arrow}</span>
                <p>{project.desc[lang]}</p>
                <div className="tag-group">
                  {project.tags.slice(0, 4).map(tag => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <span className="about-project-action">{text.projectAction} <span aria-hidden="true">↗</span></span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="sec-label">{text.educationLabel}</p>
        <h2 className="sec-title">{text.educationTitle}</h2>
        <div className="edu-grid about-education">
          {education[lang].map(([type, degree, institution]) => (
            <article className="edu-card" key={degree}>
              <span className="edu-type">{type}</span>
              <h3 className="edu-degree">{degree}</h3>
              <p className="edu-inst">{institution}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
