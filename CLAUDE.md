# Portfólio — Roberto Miranda

Portfólio pessoal de página única. React + Vite, CSS escrito à mão com design tokens.

## Comandos

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # vite build + gera o worker do Cloudflare em dist/server
npm run preview  # serve o build
```

## Arquitetura

O site inteiro é **um componente**: `src/App.jsx` (~500 linhas). Conteúdo (projetos,
experiência, competências) fica em arrays no topo desse arquivo — não há CMS nem
arquivo de dados separado. Estilo inteiro em `src/styles/main.css`.

```
index.html              meta tags, OG, carregamento de fontes
src/main.jsx            bootstrap do React
src/App.jsx             dados + markup completo
src/styles/main.css     tokens + todos os estilos
public/assets/media/    prints dos projetos (.webp)
scripts/prepare-sites-build.mjs   worker de SPA fallback para Cloudflare
```

Sem Tailwind. Ele já esteve no projeto, mas com `preflight: false`, zero utility class
e um theme apontando para variáveis inexistentes — não produzia nada. Foi removido.
O nome `tailwind.css` virou `main.css`.

GSAP + ScrollTrigger fazem o reveal de entrada e o `[data-reveal]` no scroll, sempre
dentro de `gsap.matchMedia()` com `prefers-reduced-motion: no-preference`.

## Sistema de design

Tudo vem dos tokens no `:root` de `main.css`. **Não introduza valores literais** de cor,
tamanho de fonte ou espaçamento — use ou estenda os tokens.

### Cor

O contraste depende de sobre qual superfície o texto está. Azul e coral são meio-tom e
exigem alpha mais alto que ink/paper. Por isso existem três famílias:

| Token | Uso | Alpha mínimo p/ 4.5:1 |
|---|---|---|
| `--on-light-1/2/3` | texto escuro sobre paper e cards pastel | .60 |
| `--on-ink-1/2/3` | texto claro sobre `--ink` | .48 |
| `--on-blue-1/2/3` | texto claro sobre azul | .84 (7:1 é impossível) |

Regras que saíram de medição, não de gosto:

- **Sobre `--blue` não existe texto secundário suave que passe AA.** Corpo sobre azul
  vai em força total (`--on-blue-1`).
- **`.contact` usa `--blue-deep`, não `--blue`.** Coral sobre `--blue` dá 2.34:1; o
  "Me chama." precisa de 3:1 por ser texto grande. `--blue-deep` leva a 3.28:1.
- **Sobre `--coral` (`.about`) o texto vai em ink cheio.** Alpha abaixo de .76 reprova.
- O gradiente do hero é escuro de propósito. A versão anterior clareava até um ponto
  onde nem paper puro passava 4.5:1.

Divisores: `--rule-1/2/3` (sobre claro) e `--rule-light-1/2/3` (sobre escuro).

### Foco

`:focus-visible` usa **anel duplo** — núcleo `--ink` mais halo `--paper`. Não é
decoração: nenhuma cor sozinha passa 3:1 em todas as superfícies do site (coral reprova
em 8, ink em 2, paper em 7). Sobre `.topbar`, `.experience`, `.contact` e `footer` a
ordem inverte. Se criar uma superfície nova, verifique o anel nela.

### Tipografia

Escala fechada — tamanho, `line-height` e `letter-spacing` andam juntos:

- Display: `--display-1` a `--display-5` + `--leading-display` / `--tracking-display`
- Título: `--title-1/2/3` + `--leading-title` / `--tracking-title`
- Corpo: `--body-lg/md/sm` + `--leading-body`
- Label mono: `--label-md/sm/xs` + `--tracking-label`

**`--label-xs` (.7rem = 11.2px) é piso, não sugestão.** Abaixo disso mono em caixa alta
com tracking vira ruído. Não crie override de `font-size` menor em media query.

`--display-3` é para heading em coluna larga. `.experience-heading` e `.about-quote`
vivem em colunas estreitas e usam `--display-4` — usar display-3 ali faz a palavra
encostar na coluna vizinha.

O `.masthead` (o nome) tem margem de folga calculada para caber **inclusive com a fonte
de fallback**, e usa `clip-path: inset(0 -100% 0 0)` em vez de `overflow: hidden` para
que o reveal vertical do GSAP não possa cortar o nome na horizontal. Ao mexer no tamanho
dele, meça — não estime.

### Layout

`--pad-x` é padding lateral **e** limite de largura ao mesmo tempo:

```css
--pad-x: max(var(--gutter), (100% - var(--page)) / 2);
```

Toda seção de largura total usa `padding-inline: var(--pad-x)`. `.projects` e
`.capabilities` limitam por dentro (`width: min(100%, var(--page))`) e usam só
`--gutter`. Sem isso as seções esticam infinito em ultrawide.

## Fontes

`index.html` carrega três famílias do Google Fonts, com escopo apertado de propósito:

- **Bricolage Grotesque** com range variável `wght@400..800`. Precisa ser range: o CSS
  usa pesos como 550 e 650, e com lista discreta mais `font-synthesis: none` o navegador
  cai no peso mais próximo e o design se perde.
- **Newsreader só no eixo itálico** (`ital,opsz,wght@1,...`). O romano nunca é usado.
- **IBM Plex Mono só 500 e 600**. São os únicos pesos no CSS.

Ao adicionar peso ou estilo no CSS, ajuste a URL — senão ele silenciosamente não carrega.

## Imagens

Prints de projeto em WebP, no máximo 1600px de largura. O OG é JPEG 1200×630 (WebP não
é confiável em todo unfurler). Antes da conversão o `public/` tinha 7.4MB; hoje tem 780KB.

## Verificação

Mudou cor, tamanho de fonte ou layout? Vale medir em vez de olhar:

- Contraste real: amostre o pixel do fundo com Playwright e compare com a cor computada.
  `backgroundColor` **não serve** — `.hero` e `.topbar` têm fundo gradiente e retornam
  transparente.
- Ao medir, ignore texto que está passando sob o topbar fixo (`top < 104px`) e elementos
  ocluídos pelos cards sticky (confira com `elementFromPoint`), senão o resultado enche
  de falso positivo.
- Overflow: compare `scrollWidth` com `clientWidth` de 320px a 2560px.
- As fontes do Google podem estar bloqueadas no ambiente; para medir com a tipografia
  real, baixe os woff2 e injete via `page.route`.

## Skills

### caveman

Instalada de [`JuliusBrussee/caveman`](https://github.com/JuliusBrussee/caveman) (MIT),
em `.agents/skills/caveman/` com symlink em `.claude/skills/`.

Modo de comunicação comprimido: corta ~65% dos tokens de saída falando telegráfico,
preservando exato código, caminhos, comandos e mensagens de erro. Ativa com "caveman
mode", "talk like caveman", "be brief" ou `/caveman`.
Intensidades: `lite`, `full` (padrão), `ultra`, e as variantes `wenyan-*`.
Desliga com `/caveman off` ou "normal mode".

```bash
npx skills add JuliusBrussee/caveman   # reinstalar
```

O instalador puxa o pacote inteiro (21 skills: `cavecrew`, `caveman-compress`,
`safe-refactor`, etc.). Só a `caveman` foi mantida — as outras não foram pedidas e cada
skill roda com permissão total do agente. `skills-lock.json` reflete só o que ficou.
