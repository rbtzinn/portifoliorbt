import { LINKS } from '../../data/portfolioData'

const ContactPage = ({ t, lang }) => {
  const copyEmail = (e) => {
    const btn = e.currentTarget; navigator.clipboard.writeText(LINKS.email)
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
    btn.style.color = 'var(--accent)'; btn.style.borderColor = 'var(--accent)'
    setTimeout(() => {
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
      btn.style.color = ''; btn.style.borderColor = ''
    }, 2000)
  }

  return (
    <div>
      <div className="page-header stagger">
        <p className="sec-label">{t('sec-cont-lbl')}</p>
        <h1 className="page-title" dangerouslySetInnerHTML={{ __html: t('sec-cont-title') }}></h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '500px', lineHeight: 1.6 }}>{t('cont-desc')}</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <span className="contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
          <div className="contact-info"><p className="contact-lbl">E-MAIL</p><a href={`mailto:${LINKS.email}`} className="contact-val">{LINKS.email}</a></div>
          <button className="copy-btn" onClick={copyEmail}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></button>
        </div>
        <div className="contact-card">
          <span className="contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.18 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
          <div className="contact-info"><p className="contact-lbl">TELEFONE / WHATSAPP</p><a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="contact-val">(81) 98331-2369</a></div>
        </div>
      </div>
      <div className="available-banner" style={{ marginTop: '2rem' }}>
        <span className="status-dot"></span><p className="available-text">{t('cont-avail')}</p>
      </div>
    </div>
  )
}

export default ContactPage