## Atividade 2 — ONG Esperança

Documentação e avaliação do que foi implementado em `Atividade2`.

### Visão Geral
- **Páginas**: `index.html`, `projetos.html`, `cadastro.html`.
- **Arquitetura de estilos** (`style/`):
  - `index.css` (arquivo agregador via @import)
  - `vars.css` (tokens/variáveis do design system)
  - `reset.css` (reset global)
  - `components.css` (elementos base, tipografia, botões, inputs)
  - `layout.css` (utilitários de grid/leiaute)
  - `style.css` (layout de página, cabeçalho, menu, containers)
  - `responsive.css` (regras responsivas e breakpoints)

---

### Sistema de Design
- **Variáveis CSS (Design Tokens)**: presentes em `style/vars.css` para cores, tipografia base, espaçamentos, raios, sombras e alturas de regiões.
  - Paleta definida com pelo menos 8 cores/tokens de cor:
    - `--bg-primary`, `--fg-primary`, `--bg-secondary`, `--fg-secondary`, `--bg-active`, `--fg-active`, `--bg-disabled`, `--fg-disabled`.
  - Tipografia hierárquica: `h1`–`h6` com tamanhos distintos em `components.css` (≥ 5 tamanhos), além de `html { font-size: var(--font-size) }`.
  - Espaçamento modular: base em `--spacing: 4px` e escalas `--s-1` a `--s-6` (4, 8, 12, 16, 20, 24).

---

### Leiautes Responsivos com Flexbox e Grid
- **Grid para estrutura geral**: `.content { display: grid; grid-template: var(--header-h) auto var(--footer-h) / auto; }` em `style/style.css`.
- **Flexbox em componentes internos**: menu, topbar, listas e containers (`.topbar-content`, `.menu ul`, `.proj-cont`, etc.).
- **Breakpoints**: 5 pontos definidos em `responsive.css`: 1440px, 1280px, 900px, 600px, 400px.
- **Sistema de grid customizado**: utilitários `.grid`, `.grid-4`, `.grid-5` em `layout.css`.
- **Leiautes específicos por conteúdo**: ajustes responsivos para banner, logo, containers, grids de formulário e galeria de projetos.

---

### Navegação Sofisticada e Interativa
- **Menu principal responsivo**: presente; estilização e estados de item ativo implementados.

---

### Componentes de Interface
- **Cards responsivos para projetos**: os artigos usam imagens e `.proj-cont` flex.
- **Botões com estados**: `button` com `:hover`, `:active`, `:disabled` em `components.css` — implementado.
- **Formulários estilizados com validação visual**: campos com `required`/`pattern`.

---

### Como Visualizar
1. Abra `index.html` no navegador.
2. Navegue para `projetos.html` e `cadastro.html` pelo menu.
3. Redimensione a janela para testar os 5 breakpoints (1440/1280/900/600/400).
4. Verifique estados de botões (hover/active/disabled) e validação nativa dos formulários.


