export const LINKS = {
  github: "https://github.com/rbtzinn",
  linkedin: "https://www.linkedin.com/in/roberto-gabriel-araújo-miranda/",
  resume: "assets/Roberto_GabrielCV.pdf",
  email: "rbtgabriel04@gmail.com",
  whatsapp: "https://wa.me/5581983312369"
}

export const THEMES = {
  yellow: { hex: '#d4ff00', dim: 'rgba(212,255,0,0.07)' },
  cyan: { hex: '#00f0ff', dim: 'rgba(0,240,255,0.07)' },
  purple: { hex: '#b026ff', dim: 'rgba(176,38,255,0.07)' },
  green: { hex: '#00ff44', dim: 'rgba(0,255,68,0.07)' },
  orange: { hex: '#ff9900', dim: 'rgba(255,153,0,0.07)' }
}

export const skillsData = [
  { id: 'frontend', title: { pt: 'Front-End', en: 'Front-End' }, level: { pt: 'Avançado', en: 'Advanced' }, desc: { pt: 'HTML5, CSS3, JS ES6+, TypeScript, ReactJS.', en: 'HTML5, CSS3, JS ES6+, TypeScript, ReactJS.' }, progress: 90, tags: ['React', 'TypeScript', 'CSS3', 'Sass', 'Figma'] },
  { id: 'mobile', title: { pt: 'Mobile', en: 'Mobile' }, level: { pt: 'Intermediário', en: 'Intermediate' }, desc: { pt: 'React Native, Flutter/Dart, Kotlin e Java Android.', en: 'React Native, Flutter/Dart, Kotlin & Java Android.' }, progress: 78, tags: ['React Native', 'Flutter', 'Kotlin', 'Java Android'] },
  { id: 'backend', title: { pt: 'Back-End & BD', en: 'Back-End & DB' }, level: { pt: 'Intermediário', en: 'Intermediate' }, desc: { pt: 'Node.js, Express, MySQL, PostgreSQL, SQLite.', en: 'Node.js, Express, MySQL, PostgreSQL, SQLite.' }, progress: 72, tags: ['Node.js', 'Express', 'PostgreSQL', 'MySQL'] },
  { id: 'devops', title: { pt: 'DevOps', en: 'DevOps' }, level: { pt: 'Básico', en: 'Basic' }, desc: { pt: 'Git, GitHub, Docker e AWS.', en: 'Git, GitHub, Docker and AWS concepts.' }, progress: 60, tags: ['Git', 'Docker', 'AWS'] },
]

export const techGroups = [
  { id: 'fe', cat: 'Front-End', color: 'accent', icon: 'monitor', items: [{ n: 'HTML5', v: 95 }, { n: 'CSS3 / Sass', v: 92 }, { n: 'JavaScript ES6+', v: 88 }, { n: 'TypeScript', v: 82 }, { n: 'ReactJS', v: 87 }, { n: 'Bootstrap', v: 85 }, { n: 'Figma', v: 75 }] },
  { id: 'mo', cat: 'Mobile', color: 'blue', icon: 'phone', items: [{ n: 'Flutter / Dart', v: 78 }, { n: 'React Native', v: 72 }, { n: 'Kotlin (Android)', v: 70 }, { n: 'Java (Android)', v: 75 }] },
  { id: 'be', cat: 'Back-End & BD', color: 'purple', icon: 'server', items: [{ n: 'Node.js', v: 74 }, { n: 'Express', v: 72 }, { n: 'PostgreSQL', v: 70 }, { n: 'MySQL', v: 72 }, { n: 'SQLite', v: 68 }] },
  { id: 'dv', cat: 'DevOps & Outros', color: 'muted', icon: 'settings', items: [{ n: 'Git / GitHub', v: 88 }, { n: 'Docker', v: 58 }, { n: 'AWS', v: 50 }, { n: 'Python', v: 48 }, { n: '.NET', v: 35 }, { n: 'jQuery', v: 65 }] },
]

export const projects = [
  {
    id: 'rfid',
    title: 'Leitor de RFID',
    client: 'Novo Atacarejo',
    date: 'Jun 2025',
    status: { pt: 'Em produção', en: 'In Production' },
    statusClass: 'status-green',
    image: '/assets/media/projects/rfid-novo.png',
    desc: {
      pt: 'Sistema Android (Java) desenvolvido para otimizar o processo de inventário de lojas com tecnologia RFID. Projeto funcional atualmente implantado e em uso no cliente.',
      en: 'Android system (Java) developed to optimize the store inventory process using RFID technology. Functional project currently deployed and in use by the client.'
    },
    highlights: {
      pt: [
        'Integração com hardware RFID via protocolo serial',
        'Leitura de tags em tempo real e geração de relatórios detalhados',
        'Processamento de arquivos CSV para sincronização de estoque'
      ],
      en: [
        'RFID hardware integration via serial protocol',
        'Real-time tag reading and detailed report generation',
        'CSV file processing for inventory synchronization'
      ]
    },
    tags: ['Java', 'Android', 'RFID', 'CSV', 'SQLite'],
    link: "https://github.com/rbtzinn/RFID-NovoAtacarejo"
  },
  {
    id: 'frotas',
    title: 'APP/WEB de Frotas',
    client: 'Logistics Corp',
    date: 'Jan 2026',
    status: { pt: 'Em produção', en: 'In Production' },
    statusClass: 'status-green',
    image: '/assets/media/projects/frotas-demo.png',
    desc: {
      pt: 'Aplicação mobile (Flutter/Dart) para controle de frotas com foco em rastreabilidade e comprovação por assinatura digital. Interface moderna com Material 3 e validações complexas.',
      en: 'Mobile application (Flutter/Dart) for fleet control focused on traceability and digital signature proof. Modern interface with Material 3 and complex validations.'
    },
    highlights: {
      pt: [
        'Captura de assinaturas em canvas (Signature Pad) para comprovação',
        'Modo offline com fila de pendências (SharedPreferences) e sincronização automática',
        'Envio de dados via HTTP para Google Sheets através de Google Apps Script'
      ],
      en: [
        'Canvas signature capture for digital proof',
        'Offline mode with pending queue (SharedPreferences) and auto-sync',
        'Data submission via HTTP to Google Sheets through Google Apps Script'
      ]
    },
    tags: ['Flutter', 'Dart', 'Google Sheets API', 'Offline', 'Material 3'],
    link: "https://frotasapp.vercel.app"
  },
  {
    id: 'dash',
    title: 'Dashboard Cultural',
    client: 'EMPETUR',
    date: 'Jan 2026',
    status: { pt: 'Concluído', en: 'Completed' },
    statusClass: 'status-blue',
    image: '/assets/media/projects/emeptur-painel.png',
    desc: {
      pt: 'Plataforma analítica para transparência ativa e gestão das contratações artísticas da EMPETUR (PE). Em uso oficial no portal de transparência da instituição.',
      en: 'Analytical platform for active transparency and management of EMPETUR (PE) artistic contracts. In official use at the institution’s transparency portal.'
    },
    highlights: {
      pt: [
        'Mapas de calor interativos via D3.js com zoom dinâmico por centroides geográficos',
        'Algoritmos de normalização de strings e limpeza de bases governamentais não estruturadas',
        'KPIs inteligentes de descoberta de tendências em tempo real com PapaParse'
      ],
      en: [
        'Interactive heatmaps via D3.js with dynamic zoom by geographical centroids',
        'String normalization algorithms and cleaning of unstructured government databases',
        'Smart real-time trend discovery KPIs with PapaParse'
      ]
    },
    tags: ['React', 'Tailwind', 'D3.js', 'PapaParse', 'Tremor'],
    link: "https://empetur-painel.vercel.app"
  },
  {
    id: 'filmsport',
    title: 'StreamVibe',
    client: 'Projeto Pessoal',
    date: 'Abr 2026',
    status: { pt: 'Concluído', en: 'Completed' },
    statusClass: 'status-blue',
    image: '/assets/media/projects/streamvibe.png',
    desc: {
      pt: 'Plataforma web de catálogo de filmes inspirada em serviços de streaming. Consome a API do TMDB para exibir filmes em alta, detalhes, trailers e permite criar lista de favoritos com persistência local.',
      en: 'Movie catalog web platform inspired by streaming services. Consumes the TMDB API to display trending movies, details, trailers, and allows creating a favorites list with local persistence.'
    },
    highlights: {
      pt: [
        'Integração com a API do TMDB para dados de filmes em tempo real',
        'Hero banner dinâmico com filme destaque, nota e sinopse',
        'Sistema de favoritos com lista pessoal e persistência via localStorage'
      ],
      en: [
        'TMDB API integration for real-time movie data',
        'Dynamic hero banner with featured movie, rating, and synopsis',
        'Favorites system with personal list and localStorage persistence'
      ]
    },
    tags: ['React', 'TypeScript', 'Tailwind', 'TMDB API', 'Vite'],
    link: 'https://films-port.vercel.app'
  },
  {
    id: 'luxe-store',
    title: 'LUXE Store',
    client: 'Projeto Pessoal',
    date: 'Abr 2026',
    status: { pt: 'Concluído', en: 'Completed' },
    statusClass: 'status-blue',
    image: '/assets/media/projects/luxe-store.png',
    desc: {
      pt: 'E-commerce premium desenvolvido com foco em experiência visual sofisticada, catálogo dinâmico e navegação imersiva. O projeto consome a DummyJSON para estruturar a vitrine de produtos, conta com internacionalização completa em PT-BR/EN, troca de idioma com loading visual e melhorias de UX como reset automático de scroll a cada mudança de rota.',
      en: 'Premium e-commerce built with a strong focus on refined visual experience, dynamic catalog, and immersive navigation. The project consumes DummyJSON to power the product showcase, includes full PT-BR/EN internationalization, language switching with a visual loading state, and UX improvements such as automatic scroll reset on route changes.'
    },
    highlights: {
      pt: [
        'Integração com DummyJSON para catálogo dinâmico de produtos sem necessidade de banco de dados',
        'Internacionalização completa em PT-BR e EN com seletor visual mais refinado',
        'Experiência premium com scroll reset por rota, layout editorial e interface moderna responsiva'
      ],
      en: [
        'DummyJSON integration for a dynamic product catalog without requiring a database',
        'Complete PT-BR and EN internationalization with a more refined visual language switcher',
        'Premium experience with route-based scroll reset, editorial layout, and modern responsive interface'
      ]
    },
    tags: ['React', 'TypeScript', 'Tailwind', 'DummyJSON API', 'i18n', 'Vite'],
    link: 'https://luxestore-eight.vercel.app/'
  }
]
