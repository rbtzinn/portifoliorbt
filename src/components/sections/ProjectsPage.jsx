import { projects } from '../../data/portfolioData'
import { ICONS } from '../../data/icons'

const ProjectsPage = ({ t, lang, openModal }) => {
  return (
    <div>
      <div className="page-header stagger">
        <p className="sec-label">{t('sec-proj-lbl')}</p>
        <h1 className="page-title" dangerouslySetInnerHTML={{ __html: t('sec-proj-title') }}></h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '500px', lineHeight: 1.6 }}>{t('proj-desc')}</p>
      </div>
      <div className="proj-grid">
        {projects.map((p, i) => (
          <div key={p.id} className="proj-card" onClick={() => openModal(p.id)}>
            <div className="proj-top"><span className="proj-idx">0{i + 1}</span><span className={`status ${p.statusClass}`}>{p.status[lang]}</span></div>
            <div>
              <div className="proj-title-row"><h2 className="proj-title">{p.title}</h2><span className="proj-arrow">{ICONS.arrow}</span></div>
              <p className="proj-client">{p.client}<span className="proj-date"> · {p.date}</span></p>
            </div>
            <p className="proj-desc">{p.desc[lang]}</p>
            <div className="tag-group">{p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
