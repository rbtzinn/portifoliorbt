import Terminal from '../ui/Terminal'
import { skillsData } from '../../data/portfolioData'
import { LINKS } from '../../data/portfolioData'

const HomePage = ({ mode, lang, t, navigate, setLang, startMatrix, setTheme }) => {
  return (
    <div>
      {mode === 'dev' ? (
        <Terminal lang={lang} t={t} navigate={navigate} setLang={setLang} startMatrix={startMatrix} setTheme={setTheme} />
      ) : (
        <section className="hero stagger">
          <p className="greeting"><span className="greeting-line"></span><span>{t('hero-greet')}</span></p>
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('hero-title') }}></h1>
          <p className="hero-sub">{t('hero-sub')}</p>
          <div className="cta-group">
            <button className="btn-primary" onClick={() => navigate('projects')}>{t('btn-proj')} <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button>
            <a href={`mailto:${LINKS.email}`} className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> {t('btn-contact')}</a>
          </div>
          <div className="tech-stack"><span className="tech-pill">React</span><span className="tech-pill">TypeScript</span><span className="tech-pill">Flutter</span><span className="tech-pill">Node.js</span><span className="tech-pill">Java</span><span className="tech-pill">Docker</span></div>
          <div className="hero-decor"><div className="decor-grid"></div></div>
        </section>
      )}
      <section style={{ paddingTop: '2rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="sec-label">{t('sec-skills-lbl')}</p>
          <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: t('sec-skills-title') }}></h2>
          <p style={{ fontSize: '.95rem', color: 'var(--text-muted)', maxWidth: '380px', lineHeight: 1.6 }}>{t('sec-skills-sub')}</p>
        </div>
        <div className="skills-grid">
          {skillsData.map((s, i) => (
            <div key={s.id} className="skill-card">
              <div className="card-header"><span className="card-index">0{i + 1}</span><span className="card-level">{s.level[lang]}</span></div>
              <h3 className="skill-name">{s.title[lang]}</h3>
              <p className="skill-desc">{s.desc[lang]}</p>
              <div className="progress-block">
                <div className="progress-meta"><span className="progress-lbl">{lang === 'pt' ? 'Proficiência' : 'Proficiency'}</span><span className="progress-val">{s.progress}%</span></div>
                <div className="progress-track"><div className="progress-fill" data-width={s.progress}></div></div>
              </div>
              <div className="tag-group">{s.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
