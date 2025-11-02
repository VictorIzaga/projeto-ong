## Atividade 3 — ONG Esperança

Documentação e avaliação do que foi implementado em `Atividade3`.

### Visão Geral
- **Páginas**: `index.html`, `projetos.html`, `cadastro.html`, `teste-js.html`.
- **Scripts** (`script/`):
  - `util.js` (helpers de DOM e validação)
  - `projetos.js` (renderização dinâmica de projetos)
  - `cadastro.js` (validação de formulário e feedback ao usuário)
- **Estilos** (`style/`): tokens, reset, componentes, layout e responsividade similares à Atividade 2, com adição de classes de feedback (`success`, `danger`, `hidden`).

---

### Manipulação do DOM e Sistema de Templates em JavaScript
- **Manipulação do DOM**: presente e consistente.
  - `projetos.html` usa `initProjetos()` para construir `article`/imagens via `createElem` (de `util.js`) e inserir no container.
  - `cadastro.html` usa `showFeedback()` para montar conteúdo de mensagens (título + lista de erros) dinamicamente.
- **Sistema de Templates JS**: atendido de forma simples por composição programática com `createElem`.
  - Padrão baseado em funções geradoras de elementos, recebendo `text`, `child` e `attrs`.
  - É um sistema leve de templates (programáticos) reutilizável para renderizar listas e componentes de feedback.

---

### Verificação de Consistência de Dados em Formulários
- Implementada em `cadastro.js` + `cadastro.html`:
  - Regras de validação:
    - Email (regex), CPF (formato `000.000.000-00`), Data de nascimento (≥ 18 anos).
    - Campos opcionais com formato: Telefone `(00)00000-0000`, CEP `00000-000`, Estado (2 letras).
  - Em caso de erro: lista de mensagens exibida em `#feedback-box` com classe `danger`.
  - Em caso de sucesso: mensagem exibida com classe `success`.

---

### Como Visualizar
1. Abra `projetos.html` e verifique a renderização dinâmica dos projetos.
2. Abra `cadastro.html`, preencha dados corretos/incorretos e observe o feedback.



