const ProjectModal = ({ modalProj, modalLoading, modalLogs, closeModal, lang, t }) => {
  return (
    <div className={`modal-overlay ${modalProj ? 'open' : ''}`} onClick={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-bar">
          <div className="modal-dots"><span className="modal-dot red"></span><span className="modal-dot yellow"></span><span className="modal-dot green"></span></div>
          <span className="modal-filename">{modalProj?.id}.md</span>
          <button className="modal-close" onClick={closeModal}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
        {modalLoading && (
          <div className="modal-loading" style={{ display: 'flex' }}>
            {modalLogs.map((l, i) => (
              <div key={i} className="log-line visible" dangerouslySetInnerHTML={{ __html: `<span class="prompt">❯ </span>${l.text}` }}></div>
            ))}
          </div>
        )}
        {!modalLoading && modalProj && (
          <>
            <div className="modal-media">
              {modalProj.image ? (
                modalProj.image.endsWith('.mp4') ? (
                  <video
                    src={modalProj.image}
                    className="modal-img-content"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={modalProj.image}
                    alt={modalProj.title}
                    className="modal-img-content"
                  />
                )
              ) : (
                // Fallback: Se não tiver imagem no data, mostra o botão de play de antes
                <div className="play-btn-mock">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              )}
            </div>
            <div className="modal-body visible">
              <div className="modal-header-row">
                <h2 className="modal-title">{modalProj.title}</h2>
                <div className="modal-meta">
                  <span className={`modal-badge ${modalProj.statusClass}`}>{modalProj.status[lang]}</span>
                  <span className="modal-badge" style={{ color: 'var(--text-muted)', borderColor: 'var(--border)', background: 'var(--surface-3)' }}>{modalProj.date}</span>
                </div>
              </div>
              <div><p className="modal-section-lbl">{t('mdl-desc')}</p><p className="modal-desc">{modalProj.desc[lang]}</p></div>
              <div>
                <p className="modal-section-lbl">{t('mdl-tech')}</p>
                <div className="modal-highlights">
                  {modalProj.highlights[lang].map(h => <div key={h} className="modal-highlight"><span className="modal-highlight-dot"></span>{h}</div>)}
                </div>
              </div>
              <div>
                <p className="modal-section-lbl">{t('mdl-stack')}</p>
                <div className="modal-tags">{modalProj.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
              </div>
            </div>
            <div className="modal-footer" style={{ display: 'flex' }}>
              <div className="modal-client-info">
                <span>{lang === 'pt' ? 'Cliente' : 'Client'}</span> {modalProj.client}<br />
                <span>{lang === 'pt' ? 'Entrega' : 'Delivery'}</span> {modalProj.date}
              </div>
              <a href={modalProj.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '.8rem', padding: '.55rem 1.1rem' }}>
                {t('mdl-btn')} <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectModal