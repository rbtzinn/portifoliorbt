import { techGroups } from '../../data/portfolioData'
import { ICONS } from '../../data/icons'

const SkillsPage = ({ t }) => {
  return (
    <div>
      <div className="page-header stagger">
        <p className="sec-label">{t('sec-skills-lbl')}</p>
        <h1 className="page-title">Hard <span className="accent">Skills</span></h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '440px', lineHeight: 1.6 }}>{t('skills-desc')}</p>
      </div>
      <div>
        {techGroups.map(g => (
          <div key={g.id} className="skill-group">
            <div className="group-header">
              <span className={`group-icon icon-${g.color}`}>{ICONS[g.icon]}</span>
              <h2 className={`group-title color-${g.color}`}>{g.cat}</h2>
            </div>
            <div className="items-grid">
              {g.items.map((item, i) => (
                <div key={item.n} className="skill-row">
                  <div className="skill-meta"><span className="skill-nm">{item.n}</span><span className="skill-pct">{item.v}%</span></div>
                  <div className="track"><div className={`fill fill-${g.color}`} data-width={item.v} style={{ transitionDelay: `${i * 0.06}s` }}></div></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPage