# Portfólio — Roberto Miranda

Portfólio pessoal de página única: hero editorial, cases em cards sticky, trajetória,
sobre, competências e contato. React + Vite, CSS escrito à mão com design tokens.

**Produção:** https://portifoliorbt.vercel.app

## Stack

- React 18 + Vite 4
- CSS com custom properties (sem framework)
- GSAP + ScrollTrigger para as animações de entrada e scroll
- Bricolage Grotesque · Newsreader · IBM Plex Mono

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção
npm run preview  # serve o build local
```

## Estrutura

```
index.html                        meta tags, OG e fontes
src/
├── main.jsx                      bootstrap
├── App.jsx                       dados do portfólio + markup completo
└── styles/main.css               design tokens + estilos
public/
├── assets/media/projects/        prints dos cases (.webp)
├── assets/Roberto_GabrielCV.pdf
├── favicon.svg
└── og.jpg
scripts/prepare-sites-build.mjs   worker de SPA fallback (Cloudflare)
```

Conteúdo (projetos, experiência, competências) fica em arrays no topo do `App.jsx`.

## Acessibilidade

O site é verificado, não só estilizado:

- Contraste WCAG AA validado por amostragem de pixel do fundo real em cada linha de
  texto — as seções com gradiente não podem ser conferidas por `getComputedStyle`.
- Anel de foco de duplo contraste, visível sobre as sete superfícies de cor do site.
- Piso de 11,2px para labels em mono.
- Navegação por teclado com focus trap no menu mobile e skip link.
- `prefers-reduced-motion` desliga todas as animações.
- Sem overflow horizontal de 320px a 2560px.

Convenções de design tokens, regras de contraste por superfície e como medir estão
documentadas em [`CLAUDE.md`](./CLAUDE.md).
