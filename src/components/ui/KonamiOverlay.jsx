const KonamiOverlay = ({ show, onClose, t }) => {
  if (!show) return null
  return (
    <div className={`konami-overlay ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="konami-scanlines"></div>
      <div className="konami-box" onClick={e => e.stopPropagation()}>
        <p className="konami-cheat">↑ ↑ ↓ ↓ ← → ← → B A — CHEAT CODE</p>
        <h2 className="konami-title"><span className="konami-title-glitch" data-text="MODO HACKER">MODO HACKER</span></h2>
        <p className="konami-msg">Você encontrou o easter egg secreto.<br />Esse portfólio foi construído com <span>café ☕</span>, <span>Syne Bold</span><br />e uma quantidade suspeita de <span>git commits.</span></p>
        <div className="konami-stats">
          <div className="konami-stat"><p className="konami-stat-lbl">{t('stat-commits')}</p><p className="konami-stat-val">∞</p></div>
          <div className="konami-stat"><p className="konami-stat-lbl">{t('stat-bugs')}</p><p className="konami-stat-val">404</p></div>
          <div className="konami-stat"><p className="konami-stat-lbl">{t('stat-coffee')}</p><p className="konami-stat-val">99+</p></div>
          <div className="konami-stat"><p className="konami-stat-lbl">{t('stat-so')}</p><p className="konami-stat-val">∞ ABA</p></div>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--text-muted)', marginBottom: '.75rem' }}>{t('konami-footer')}</p>
        <button className="konami-close" onClick={onClose}>{t('konami-close')}</button>
      </div>
    </div>
  )
}

export default KonamiOverlay
