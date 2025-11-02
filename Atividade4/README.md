## Atividade 4 — ONG Esperança

Documentação e avaliação do que foi implementado em `Atividade4`.

### Visão Geral
- **Páginas**: `index.html`, `projetos.html`, `cadastro.html` (minificados).
- **Estilos**: `style/*.css` (minificados; `index.css` importa os demais arquivos minificados).
- **Scripts**: `script/*.js` (minificados) — mesma lógica da Atividade 3 (render dinâmico de projetos e validação com feedback).
- **Imagens**: em `assets/imagens/`.

---

### Acessibilidade (WCAG 2.1 Nível AA)

O que há hoje:
- Estrutura semântica com `header`, `nav`, `main`, `footer` e `address`.
- Imagens com `alt` descritivo.
- Navegação por teclado funciona por padrão (links e campos são focáveis). 

---

### Otimização para Produção

O que há hoje:
- HTML/CSS/JS: arquivos estão minificados (uma linha), importação consolidada via `style/index.css`.
