import { useState, useEffect, useCallback } from 'react'
import i18n from './data/i18n'
import { THEMES, projects } from './data/portfolioData'
import useKonamiCode from './hooks/useKonamiCode'
import CustomCursor from './components/ui/CustomCursor'
import Matrix from './components/ui/Matrix'
import KonamiOverlay from './components/ui/KonamiOverlay'
import ProjectModal from './components/ui/ProjectModal'
import Sidebar from './components/layout/Sidebar'
import HomePage from './components/sections/HomePage'
import AboutPage from './components/sections/AboutPage'
import SkillsPage from './components/sections/SkillsPage'
import ProjectsPage from './components/sections/ProjectsPage'
import ContactPage from './components/sections/ContactPage'
import './styles/global.css'

export default function App() {
  const [lang, setLangState] = useState(() => localStorage.getItem('portfolioLang') || 'pt')
  const [mode, setModeState] = useState(() => localStorage.getItem('portfolioMode') || 'dev')
  const [theme, setThemeState] = useState(() => localStorage.getItem('portfolioTheme') || 'yellow')
  const [page, setPage] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [ghData, setGhData] = useState({ repos: '-', followers: '-' })
  const [showKonami, setShowKonami] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [matrixActive, setMatrixActive] = useState(false)
  const [modalProj, setModalProj] = useState(null)
  const [modalLoading, setModalLoading] = useState(false)
  const [modalLogs, setModalLogs] = useState([])

  const t = useCallback((key) => i18n[lang][key], [lang])

  const setLang = (v) => { setLangState(v); localStorage.setItem('portfolioLang', v) }
  const setMode = (v) => { setModeState(v); localStorage.setItem('portfolioMode', v) }
  const setTheme = (v) => { setThemeState(v); localStorage.setItem('portfolioTheme', v) }

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', THEMES[theme].hex)
    document.documentElement.style.setProperty('--accent-dim', THEMES[theme].dim)
  }, [theme])

  useEffect(() => {
    fetch('https://api.github.com/users/rbtzinn')
      .then(res => res.json())
      .then(data => { if (data.public_repos !== undefined) setGhData({ repos: data.public_repos, followers: data.followers }) })
      .catch(err => console.error('GitHub Fetch Error', err))
  }, [])

  useKonamiCode(
    () => setShowKonami(true),
    () => { setShowHint(true); setTimeout(() => setShowHint(false), 2000) }
  )

  const navigate = (newPage) => { setPage(newPage); setSidebarOpen(false); window.scrollTo(0, 0) }

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-width]').forEach((el, i) => { setTimeout(() => el.style.width = el.dataset.width + '%', 100 + i * 80) })
          e.target.classList.add('animated'); obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    const timer = setTimeout(() => {
      document.querySelectorAll('.stagger, .skill-card, .skill-group').forEach(el => obs.observe(el))
    }, 50)
    return () => { obs.disconnect(); clearTimeout(timer) }
  }, [page, lang, mode])

  const openModal = (projId) => {
    const p = projects.find(x => x.id === projId); if (!p) return
    setModalProj(p); setModalLoading(true); setModalLogs([]); document.body.style.overflow = 'hidden'
    const rawLogs = [
      { text: '$ git clone projeto.git' }, { text: 'Cloning into <span class="info">projeto</span>...' },
      { text: '<span class="ok">✓</span> remote: Enumerating objects: 142' }, { text: '<span class="ok">✓</span> Receiving objects: 100% (142/142)' },
      { text: '<span class="ok">✓</span> Resolving deltas: 100%' }, { text: '$ cd projeto && npm install' },
      { text: '<span class="warn">⚙</span> Installing dependencies...' }, { text: '<span class="ok">✓</span> packages installed successfully' },
      { text: '$ npm run build' }, { text: '<span class="accent">▶</span> Loading project data...<span class="cursor-blink"></span>' }
    ]
    let delay = 0
    rawLogs.forEach((line) => { setTimeout(() => setModalLogs(prev => [...prev, line]), delay); delay += 120 })
    setTimeout(() => { setModalLoading(false) }, delay + 500)
  }

  const closeModal = () => { setModalProj(null); document.body.style.overflow = '' }

  return (
    <div className="portfolio-root">
      <CustomCursor />
      <Matrix active={matrixActive} onEnd={() => setMatrixActive(false)} />
      <KonamiOverlay show={showKonami} onClose={() => setShowKonami(false)} t={t} />
      <div className={`hint-toast ${showHint ? 'show' : 'hide'}`}>Konami Code: ↑↑↓↓←→←→BA</div>

      <div className="shell">
        <Sidebar
          page={page} navigate={navigate} lang={lang} setLang={setLang}
          mode={mode} setMode={setMode} theme={theme} setTheme={setTheme}
          t={t} ghData={ghData} sidebarOpen={sidebarOpen}
        />
        <main className="main">
          <div className={`page ${page === 'home' ? 'active visible' : ''}`}>
            <HomePage mode={mode} lang={lang} t={t} navigate={navigate} setLang={setLang} startMatrix={() => setMatrixActive(true)} setTheme={setTheme} />
          </div>
          <div className={`page ${page === 'about' ? 'active visible' : ''}`}>
            <AboutPage t={t} lang={lang} />
          </div>
          <div className={`page ${page === 'skills' ? 'active visible' : ''}`}>
            <SkillsPage t={t} />
          </div>
          <div className={`page ${page === 'projects' ? 'active visible' : ''}`}>
            <ProjectsPage t={t} lang={lang} openModal={openModal} />
          </div>
          <div className={`page ${page === 'contact' ? 'active visible' : ''}`}>
            <ContactPage t={t} lang={lang} />
          </div>
        </main>
      </div>

      <button className={`hamburger ${sidebarOpen ? 'open hidden' : ''}`} onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span className="ham-line"></span><span className="ham-line"></span><span className="ham-line"></span>
      </button>
      <div className={`backdrop ${sidebarOpen ? 'show' : ''}`} onClick={() => setSidebarOpen(false)}></div>

      <ProjectModal
        modalProj={modalProj} modalLoading={modalLoading} modalLogs={modalLogs}
        closeModal={closeModal} lang={lang} t={t}
      />
    </div>
  )
}
