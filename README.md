# 🚀 Portfolio — Roberto Miranda

Portfolio pessoal desenvolvido com **React + Vite**, com terminal interativo, easter eggs, temas customizáveis e suporte bilíngue (PT/EN).

## Stack

- React 18
- Vite 4
- CSS Custom Properties (sem Tailwind)
- Fontes: Syne + JetBrains Mono

## Comandos

```bash
npm install   # instalar dependências
npm run dev   # iniciar servidor dev (http://localhost:5173)
npm run build # gerar build de produção
```

## Estrutura

```
src/
├── App.jsx
├── main.jsx
├── styles/
│   └── global.css
├── data/
│   ├── i18n.js
│   ├── portfolioData.js
│   └── icons.jsx
├── hooks/
│   └── useKonamiCode.js
└── components/
    ├── ui/
    │   ├── CustomCursor.jsx
    │   ├── Matrix.jsx
    │   ├── KonamiOverlay.jsx
    │   ├── Terminal.jsx
    │   └── ProjectModal.jsx
    ├── layout/
    │   └── Sidebar.jsx
    └── sections/
        ├── HomePage.jsx
        ├── AboutPage.jsx
        ├── SkillsPage.jsx
        ├── ProjectsPage.jsx
        └── ContactPage.jsx
```

## Easter Eggs

- **Konami Code**: ↑↑↓↓←→←→BA no teclado
- **Terminal**: `matrix`, `sudo hire roberto`, `curriculo`
