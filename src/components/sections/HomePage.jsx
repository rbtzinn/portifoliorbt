import { lazy, Suspense } from 'react'
import { skillsData, LINKS } from '../../data/portfolioData'

const Terminal = lazy(() => import('../ui/Terminal'))

const homeCopy = {
  pt: {
    label: '// portfólio · 2026',
    intro: 'Crio interfaces rápidas, responsivas e orientadas a produto — de e-commerces a dashboards analíticos em produção.',
    work: 'Ver projetos',
    contact: 'Falar comigo',
    panel: 'Projetos em produção',
    delivery: 'Experiência real',
    responsive: 'Responsivo',
  },
  en: {
    label: '// portfolio · 2026',
    intro: 'I build fast, responsive, product-led interfaces — from e-commerce experiences to production analytics dashboards.',
    work: 'View projects',
    contact: 'Contact me',
    panel: 'Projects in production',
    delivery: 'Real experience',
    responsive: 'Responsive',
  },
}

const HomePage = ({ mode, lang, t, navigate, setLang, startMatrix, setTheme }) => {
  const emailHref = `mailto:${LINKS.email}?subject=${encodeURIComponent('Contato via portfolio')}`
  const copy = homeCopy[lang]

  return (
    <div>
      {mode === 'dev' ? (
        <Suspense fallback={<section className="hero-terminal" />}>
          <Terminal lang={lang} t={t} navigate={navigate} setLang={setLang} startMatrix={startMatrix} setTheme={setTheme} />
        </Suspense>
      ) : (
        <section className="hero hero-poster stagger">
          <div className="hero-blueprint" aria-hidden="true" />
          <div className="hero-copy">
            <p className="hero-kicker">{copy.label}</p>
            <h1 className="poster-name">
              <span>ROBERTO</span>
              <span>MIRANDA</span>
            </h1>
            <div className="poster-rule" aria-hidden="true"><span /></div>
            <p className="poster-role">FRONTEND <span>DEVELOPER</span></p>
            <div className="poster-stack" aria-label="Tecnologias principais">
              <span>React</span><i /> <span>TypeScript</span><i /> <span>Next.js</span>
            </div>
            <p className="hero-sub">{copy.intro}</p>
            <div className="cta-group">
              <button className="btn-primary" onClick={() => navigate('projects')}>
                {copy.work} <span aria-hidden="true">↗</span>
              </button>
              <a href={emailHref} className="btn-secondary">{copy.contact}</a>
            </div>
          </div>

          <div className="hero-dashboard" aria-label={lang === 'pt' ? 'Resumo do portfólio' : 'Portfolio overview'}>
            <div className="dash-panel dash-chart">
              <div className="dash-panel-head">
                <div><span className="dash-square" /><span className="dash-heading">{copy.delivery}</span></div>
                <span className="dash-live"><i /> LIVE</span>
              </div>
              <div className="chart-area" aria-hidden="true">
                <span className="chart-grid" />
                <div className="chart-line line-1" />
                <div className="chart-line line-2" />
                <div className="chart-line line-3" />
                <div className="chart-line line-4" />
                <div className="chart-line line-5" />
                <i className="chart-dot dot-1" /><i className="chart-dot dot-2" /><i className="chart-dot dot-3" />
                <i className="chart-dot dot-4" /><i className="chart-dot dot-5" /><i className="chart-dot dot-6" />
              </div>
              <div className="dash-legend"><span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span></div>
            </div>

            <button className="dash-panel dash-project" onClick={() => navigate('projects')}>
              <div className="dash-project-image">
                <img src="/assets/media/projects/emeptur-painel.png" alt="Dashboard Cultural da EMPETUR" />
              </div>
              <div className="dash-project-copy">
                <span>CASE 03 / EMPETUR</span>
                <strong>Dashboard Cultural</strong>
                <p>React · D3.js · Tailwind</p>
                <i className="dash-progress"><span /></i>
              </div>
            </button>

            <div className="dash-mini-grid">
              <div className="dash-panel dash-metric">
                <span className="metric-ring"><i /></span>
                <div><strong>05</strong><span>{copy.panel}</span></div>
              </div>
              <div className="dash-panel dash-code">
                <span>&lt;/&gt;</span>
                <div><i /><i /><i /><i /></div>
                <strong>UI + DATA + MOBILE</strong>
              </div>
            </div>

            <div className="dash-device">
              <span className="device-notch" />
              <div className="device-screen">
                <i className="device-menu" />
                <div className="device-hero"><span /><i /><i /></div>
                <div className="device-lines"><i /><i /><i /></div>
                <span className="device-button">{copy.responsive}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="home-skills">
        <div className="home-section-head">
          <div>
            <p className="sec-label">{t('sec-skills-lbl')}</p>
            <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: t('sec-skills-title') }} />
          </div>
          <p>{t('sec-skills-sub')}</p>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <article key={skill.id} className="skill-card">
              <div className="card-header"><span className="card-index">0{index + 1}</span><span className="card-level">{skill.level[lang]}</span></div>
              <h3 className="skill-name">{skill.title[lang]}</h3>
              <p className="skill-desc">{skill.desc[lang]}</p>
              <div className="progress-block">
                <div className="progress-meta"><span className="progress-lbl">{lang === 'pt' ? 'Proficiência' : 'Proficiency'}</span><span className="progress-val">{skill.progress}%</span></div>
                <div className="progress-track"><div className="progress-fill" data-width={skill.progress} /></div>
              </div>
              <div className="tag-group">{skill.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
