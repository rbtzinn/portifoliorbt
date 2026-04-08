import { ICONS } from '../../data/icons'

const AboutPage = ({ t, lang }) => {
  return (
    <div>
      <div className="page-header stagger">
        <p className="sec-label">{t('sec-about-lbl')}</p>
        <h1 className="page-title">Roberto <span className="accent">Miranda</span></h1>
        <p className="bio">{t('bio-text')}</p>
        <div className="meta-row">
          <span className="meta-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Recife, PE</span>
          <span className="meta-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> {t('age')}</span>
          <span className="meta-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> {t('degree')}</span>
          <span className="meta-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> {t('lang-level')}</span>
        </div>
      </div>
      <div className="section">
        <p className="sec-label">{t('sec-exp-lbl')}</p>
        <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: t('sec-exp-title') }}></h2>
        <div className="timeline" style={{ marginTop: '2rem' }}>
          <div className="tl-item">
            <div className="tl-dot"></div><div className="tl-line"></div>
            <div className="tl-content">
              <div className="tl-header">
                <div><p className="tl-role">{t('exp1-role')}</p><p className="tl-company">Controladoria Geral do Estado <span className="tl-loc">· Recife, PE</span></p></div>
                <span className="tl-period">2022 – 2024</span>
              </div>
              <ul className="bullets">
                <li className="bullet"><span className="bullet-arrow">{ICONS.arrow}</span><span>{t('exp1-b1')}</span></li>
                <li className="bullet"><span className="bullet-arrow">{ICONS.arrow}</span><span>{t('exp1-b2')}</span></li>
              </ul>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-content">
              <div className="tl-header">
                <div><p className="tl-role">Freelance Developer</p><p className="tl-company">Smartracker Tecnologias <span className="tl-loc">{t('remote')}</span></p></div>
                <span className="tl-period">2022 – 2024</span>
              </div>
              <ul className="bullets">
                <li className="bullet"><span className="bullet-arrow">{ICONS.arrow}</span><span>{t('exp2-b1')}</span></li>
                <li className="bullet"><span className="bullet-arrow">{ICONS.arrow}</span><span>{t('exp2-b2')}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <p className="sec-label">{t('sec-edu-lbl')}</p>
        <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: t('sec-edu-title') }}></h2>
        <div className="edu-grid" style={{ marginTop: '2rem' }}>
          <div className="edu-card"><span className="edu-type">{t('edu1-type')}</span><h3 className="edu-degree">{t('edu1-deg')}</h3><p className="edu-inst">UNINASSAU</p></div>
          <div className="edu-card"><span className="edu-type">{t('edu2-type')}</span><h3 className="edu-degree">{t('edu2-deg')}</h3><p className="edu-inst">EBAC</p></div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage