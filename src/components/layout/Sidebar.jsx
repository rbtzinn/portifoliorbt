import { LINKS, THEMES } from '../../data/portfolioData'
import { ICONS } from '../../data/icons'

const Sidebar = ({ page, navigate, lang, setLang, mode, setMode, theme, setTheme, t, ghData, sidebarOpen }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="brand">
        <span className="brand-mark">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        </span>
        <div>
          <p className="brand-name">Roberto Miranda</p>
          <p className="brand-sub">FRONTEND DEVELOPER</p>
        </div>
      </div>
      <div className="divider"></div>
      <nav>
        <p className="section-label">{t('nav-lbl')}</p>
        <ul className="nav-list">
          {['home', 'about', 'skills', 'projects', 'contact'].map(p => (
            <li key={p}>
              <button className={`nav-link ${page === p ? 'active' : ''}`} onClick={() => navigate(p)}>
                <span className="nav-icon">
                  {p === 'home' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
                  {p === 'about' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                  {p === 'skills' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>}
                  {p === 'projects' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>}
                  {p === 'contact' && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>}
                </span>
                <span className="nav-text">{t(`nav-${p}`)}</span>
                <span className="nav-arrow">→</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="spacer"></div>
      <div className="divider"></div>
      <div className="settings-group">
        <div>
          <div className="mode-row">
            <p className="mode-label">{t('mode-lbl')}</p>
            <div className="lang-pills">
              <button className={`lang-pill ${lang === 'pt' ? 'active' : ''}`} onClick={() => setLang('pt')}>PT</button>
              <button className={`lang-pill ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
          </div>
          <div className="mode-pills" style={{ marginTop: '.3rem' }}>
            <button className={`mode-pill ${mode === 'recruiter' ? 'active-recruiter' : ''}`} onClick={() => setMode('recruiter')}>{t('mode-recruiter')}</button>
            <button className={`mode-pill ${mode === 'dev' ? 'active-dev' : ''}`} onClick={() => setMode('dev')}>{t('mode-dev')}</button>
          </div>
          <div className="mode-row" style={{ marginTop: '.5rem' }}>
            <p className="mode-label">{t('theme-lbl')}</p>
            <div style={{ display: 'flex', gap: '5px' }}>
              {Object.keys(THEMES).map(color => (
                <button key={color} className={`theme-dot ${theme === color ? 'active' : ''}`} style={{ backgroundColor: THEMES[color].hex }} onClick={() => setTheme(color)} title={`Theme: ${color}`}></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="status-badge" style={{ marginBottom: '.75rem' }}>
        <span className="status-dot"></span><span className="status-text">{t('status-avail')}</span>
      </div>
      <div>
        <p className="section-label">{t('social-lbl')}</p>
        <div className="social-links">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub">GH</a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">IN</a>
          <a href={LINKS.resume} target="_blank" rel="noreferrer" className="social-link" title="Resume">CV</a>
        </div>
        <div style={{ marginTop: '0.45rem', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.55rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          {ICONS.github}
          <span>{ghData.repos} Repos</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>{ghData.followers} Followers</span>
        </div>
      </div>
      <a href={`mailto:${LINKS.email}`} className="email-link">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        {LINKS.email}
      </a>
    </aside>
  )
}

export default Sidebar
