import { useState, useEffect, useRef, useCallback } from 'react'
import { LINKS } from '../../data/portfolioData'

const Terminal = ({ lang, t, navigate, setLang, startMatrix, setTheme }) => {
  const [lines, setLines] = useState([])
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState(() => JSON.parse(sessionStorage.getItem('termHistory') || '[]'))
  const [hIndex, setHIndex] = useState(-1)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (lines.length > 0) sessionStorage.setItem('termLines', JSON.stringify(lines))
    else sessionStorage.removeItem('termLines')
  }, [lines])

  const typeLines = useCallback(async (newLines, startIndex = 0) => {
    for (let i = startIndex; i < newLines.length; i++) {
      await new Promise(r => setTimeout(r, 55))
      setLines(prev => [...prev, newLines[i]])
    }
    await new Promise(r => setTimeout(r, 80))
    setLines(prev => [...prev, { text: '', cls: 'blank' }])
  }, [])

  const hasBooted = useRef(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('termLines')
    if (saved) {
      setLines(JSON.parse(saved));
      return
    }

    // Se já rodou uma vez nesta montagem, não roda de novo
    if (hasBooted.current) return;
    hasBooted.current = true;

    const bootLines = [
      { text: 'Booting roberto-os v2.0...', cls: 'info' },
      { text: '✓ System loaded successfully', cls: 'ok' },
      { text: '✓ 3 production projects found', cls: 'ok' },
      { text: '', cls: 'blank' },
      { text: 'Bem-vindo ao portfólio de <span style="color:var(--accent);font-weight:700">Roberto Miranda</span>', cls: 'hi' },
      { text: 'Digite <span style="color:var(--accent)">help</span> para comandos divertidos.', cls: '' },
      { text: '', cls: 'blank' }
    ]

    let delay = 0
    bootLines.forEach((line) => {
      setTimeout(() => {
        setLines(prev => [...prev, line])
      }, delay);
      delay += 200
    })
  }, [])

  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight }, [lines])

  const getTerminalResponses = () => ({
    whoami: [
      { text: 'Roberto Miranda', cls: 'ac' },
      { text: lang === 'pt' ? 'Full Stack Developer · Recife, PE · 21 anos' : 'Full Stack Developer · Recife, PE · 21 years old', cls: 'hi' }, { text: '', cls: 'blank' },
      { text: lang === 'pt' ? 'Formado em Ciência da Computação — UNINASSAU' : 'B.S. in Computer Science — UNINASSAU', cls: '' }, { text: '', cls: 'blank' },
      { text: 'Stack: React · TypeScript · Flutter · Node.js · Java', cls: '' },
      { text: lang === 'pt' ? 'Projetos em produção: 2 apps Android + 1 dashboard' : 'Production projects: 2 Android apps + 1 dashboard', cls: 'ok' }, { text: '', cls: 'blank' },
      { text: lang === 'pt' ? '"Código limpo, entrega rápida, zero enrolação."' : '"Clean code, fast delivery, no nonsense."', cls: 'info' }
    ],
    'ls': [
      { text: lang === 'pt' ? 'projetos/' : 'projects/', cls: 'info' },
      { text: '  01  leitor-rfid/       [Java/Android/RFID]', cls: '' }, { text: '  02  app-frotas/        [Flutter/Dart]', cls: '' },
      { text: '  03  dashboard-empetur/ [React/D3.js]', cls: '' }, { text: '', cls: 'blank' },
      { text: lang === 'pt' ? '→ use "open projects" para ver detalhes' : '→ use "open projects" to see details', cls: 'info' }
    ],
    'cat skills.txt': [
      { text: '# skills.txt', cls: 'ac' }, { text: '', cls: 'blank' },
      { text: '[Front-End]   HTML5 95% · CSS3 92% · JS/TS 88% · React 87%', cls: '' },
      { text: '[Mobile]      Flutter 78% · React Native 72% · Java/Kotlin 75%', cls: '' },
      { text: '[Back-End]    Node.js 74% · PostgreSQL 70% · MySQL 72%', cls: '' },
      { text: '[DevOps]      Git 88% · Docker 58% · AWS 50%', cls: '' }, { text: '', cls: 'blank' },
      { text: lang === 'pt' ? '→ use "open skills" para ver gráficos' : '→ use "open skills" to see charts', cls: 'info' }
    ],
    'contact': [
      { text: 'roberto@contato:', cls: 'ac' }, { text: '  email    rbtgabriel04@gmail.com', cls: 'hi' }, { text: '  whatsapp +55 (81) 98331-2369', cls: 'hi' },
      { text: '  github   github.com/rbtzinn', cls: 'hi' }, { text: '  linkedin linkedin.com/in/robertomiranda', cls: 'hi' }
    ],
    'theme': [
      { text: lang === 'pt' ? 'Uso: theme <cor>' : 'Usage: theme <color>', cls: 'hi' },
      { text: 'Cores / Colors: yellow, cyan, purple, green, orange', cls: '' }
    ],
    'help': [
      { text: lang === 'pt' ? 'Comandos disponíveis:' : 'Available commands:', cls: 'hi' },
      { text: '  whoami         → ' + (lang === 'pt' ? 'quem sou eu' : 'who am i'), cls: '' },
      { text: '  ls             → ' + (lang === 'pt' ? 'listar projetos' : 'list projects'), cls: '' },
      { text: '  cat skills.txt → ' + (lang === 'pt' ? 'ver stack técnico' : 'view tech stack'), cls: '' },
      { text: '  open <page>    → ' + (lang === 'pt' ? 'navegar' : 'navigate') + ' (home|about|skills|projects|contact)', cls: '' },
      { text: '  set-lang <lg>  → ' + (lang === 'pt' ? 'mudar idioma' : 'change language') + ' (pt|en)', cls: '' },
      { text: '  theme <color>  → ' + (lang === 'pt' ? 'mudar cor do tema' : 'change theme color'), cls: '' },
      { text: '  contact        → ' + (lang === 'pt' ? 'contato' : 'contact info'), cls: '' },
      { text: '  clear          → ' + (lang === 'pt' ? 'limpar terminal' : 'clear terminal'), cls: '' },
      { text: '', cls: 'blank' },
      { text: lang === 'pt' ? '[ EASTER EGGS ]' : '[ EASTER EGGS ]', cls: 'hi' },
      { text: "  matrix         → the illusion of choice", cls: 'info' },
      { text: "  sudo hire roberto → it's business time", cls: 'info' },
      { text: '  curriculo      → download CV', cls: 'info' }
    ]
  })

  const handleCommand = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    const newHistory = [raw.trim(), ...history]; setHistory(newHistory); sessionStorage.setItem('termHistory', JSON.stringify(newHistory)); setHIndex(-1)
    setLines(prev => [...prev, { text: `<span class="t-prompt-txt">roberto@portfolio:~$</span> <span class="t-cmd-txt">${raw}</span>`, cls: 'show' }])

    if (cmd === 'clear') { setTimeout(() => { setLines([]) }, 80); return }
    if (cmd === 'matrix') { setLines(prev => [...prev, { text: lang === 'pt' ? 'Wake up, Neo...' : 'Wake up, Neo...', cls: 'ok' }, { text: '', cls: 'blank' }]); setTimeout(() => startMatrix(), 500); return }
    if (cmd === 'sudo hire roberto' || cmd === 'sudo contratar roberto' || cmd === 'hire') {
      setLines(prev => [...prev, { text: lang === 'pt' ? 'Abrindo cliente de email...' : 'Opening email client...', cls: 'ok' }, { text: '', cls: 'blank' }])
      setTimeout(() => window.location.href = `mailto:${LINKS.email}?subject=Vaga de Full Stack: Temos interesse!`, 800); return
    }
    if (cmd === 'curriculo' || cmd === 'resume' || cmd === 'cv') {
      setLines(prev => [...prev, { text: lang === 'pt' ? 'Gerando download do currículo...' : 'Generating resume download...', cls: 'info' }])
      setTimeout(() => { setLines(prev => [...prev, { text: '✓ Download iniciado.', cls: 'ok' }, { text: '', cls: 'blank' }]); window.open(LINKS.resume, '_blank') }, 1000); return
    }

    if (cmd.startsWith('set-lang') || cmd.startsWith('set lang') || cmd.startsWith('lang')) {
      const parts = cmd.split(' '); const l = parts[parts.length - 1].trim()
      if (l === 'en' || l === 'pt') { setLang(l); setLines(prev => [...prev, { text: `✓ Idioma / Language: ${l.toUpperCase()}`, cls: 'ok' }, { text: '', cls: 'blank' }]) }
      else { setLines(prev => [...prev, { text: `bash: invalid language. Use 'pt' or 'en'`, cls: 'err' }, { text: '', cls: 'blank' }]) }
      return
    }

    if (cmd.startsWith('theme ')) {
      const color = cmd.split(' ')[1]
      const VALID = ['yellow', 'cyan', 'purple', 'green', 'orange']
      if (VALID.includes(color)) {
        setTheme(color)
        setLines(prev => [...prev, { text: `✓ Tema alterado para / Theme changed to: ${color}`, cls: 'ok' }, { text: '', cls: 'blank' }])
      } else {
        setLines(prev => [...prev, { text: `bash: theme: invalid color. Try: yellow, cyan, purple, green, orange`, cls: 'err' }, { text: '', cls: 'blank' }])
      }
      return
    }

    if (cmd.startsWith('open ')) {
      const page = cmd.replace('open ', '').trim()
      if (['home', 'about', 'skills', 'projects', 'contact'].includes(page)) {
        setLines(prev => [...prev, { text: `→ ${lang === 'pt' ? 'navegando para' : 'navigating to'} ${page}...`, cls: 'info' }, { text: '', cls: 'blank' }])
        setTimeout(() => navigate(page), 400)
      } else { setLines(prev => [...prev, { text: `bash: open: '${page}' not found`, cls: 'err' }, { text: '', cls: 'blank' }]) }
      return
    }

    const responses = getTerminalResponses()
    let targetCmd = cmd === 'ls projects' ? 'ls' : cmd
    const resp = responses[targetCmd]

    if (resp) { typeLines(resp) }
    else { setLines(prev => [...prev, { text: `bash: ${raw.trim()}: command not found`, cls: 'err' }, { text: lang === 'pt' ? 'digite "help" para ver os comandos' : 'type "help" for commands', cls: '' }, { text: '', cls: 'blank' }]) }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { handleCommand(inputVal); setInputVal('') }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (hIndex < history.length - 1) { const nextIdx = hIndex + 1; setHIndex(nextIdx); setInputVal(history[nextIdx]) } }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (hIndex > 0) { const prevIdx = hIndex - 1; setHIndex(prevIdx); setInputVal(history[prevIdx]) } else { setHIndex(-1); setInputVal('') } }
    else if (e.key === 'Tab') {
      e.preventDefault(); const val = inputVal.toLowerCase()
      const all = Object.keys(getTerminalResponses()).concat(['open home', 'open about', 'open skills', 'open projects', 'open contact', 'matrix', 'sudo hire roberto', 'curriculo', 'set-lang en', 'set-lang pt', 'theme yellow', 'theme cyan', 'theme purple', 'theme green', 'theme orange'])
      const match = all.find(c => c.startsWith(val)); if (match) setInputVal(match)
    }
  }

  return (
    <section className="hero-terminal" id="hero-dev">
      <div className="terminal-window" onClick={() => document.getElementById('t-input').focus()}>
        <div className="terminal-bar">
          <span className="t-dot red"></span><span className="t-dot yellow"></span><span className="t-dot green"></span>
          <span className="terminal-title">roberto@portfolio — bash</span>
        </div>
        <div className="terminal-body" ref={bodyRef}>
          {lines.map((l, i) => (
            <div key={i} className={l.cls === 'blank' ? 't-blank t-line show' : `t-line t-out show ${l.cls}`} dangerouslySetInnerHTML={{ __html: l.text }}></div>
          ))}
        </div>
        <div className="terminal-input-row">
          <span className="t-prompt-static">roberto@portfolio:~$&nbsp;</span>
          <input className="t-input" id="t-input" placeholder={t('term-ph')} value={inputVal} onChange={e => setInputVal(e.target.value)} onKeyDown={handleKeyDown} autoComplete="off" spellCheck="false" />
        </div>
      </div>
      <p className="terminal-hint" dangerouslySetInnerHTML={{ __html: lang === 'en' ? `💡 try: <span>help</span> · <span>theme cyan</span> · <span>ls projects</span>` : `💡 tente: <span>help</span> · <span>theme cyan</span> · <span>ls projects</span>` }}></p>
    </section>
  )
}

export default Terminal