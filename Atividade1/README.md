## Atividade 1 — ONG Esperança

Documentação e avaliação do que foi implementado em `Atividade1`.

### Visão Geral
- **Páginas**: `index.html`, `projetos.html`, `cadastro.html`.
- **Tecnologias**: HTML5 puro (sem CSS/JS nesta atividade).
- **Assets**: imagens em `assets/imagens/` (logo e fotos ilustrativas).

### Estrutura Semântica e Conteúdo
- **Header/Nav/Footer**: todas as páginas utilizam `header`, `nav`, `main` e `footer` adequadamente.
- **Títulos**:
  - `index.html` contém `h1` no `header` e outro `h1` dentro de `main`. 
  - `projetos.html` utiliza `h1` para o título da página e `h2` para seções/artigos, adequado.
  - `cadastro.html` utiliza `h1` para o título da página.

### Páginas Obrigatórias
- `index.html` — página inicial com informações sobre a organização e **contato** (email, telefone e endereço em `address`).
- `projetos.html` — apresenta projetos sociais, menciona **voluntariado** e possui seção "Como Doar" com botão de ação.
- `cadastro.html` — página de **cadastro** de voluntários.

### Formulário (cadastro.html)
- **Campos**: Nome Completo, E-mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade, Estado. Todos presentes.
- **Agrupamento**: uso de `form`, `fieldset` e `legend` para agrupamento lógico (Informações Pessoais e Endereço).
- **Validação nativa (HTML5)**:
  - `required` aplicado nos campos essenciais.
  - Tipos apropriados (`email`, `tel`, `date`).
  - `pattern` e `placeholder` para CPF (`000.000.000-00`), Telefone (`(00)00000-0000`) e CEP (`00000-000`).
  - Restrições adicionais com `maxlength` (ex.: UF com 2 caracteres).


### Conformidade com as Especificações
- Estrutura HTML5 semântica: **Atendida** (com recomendação de hierarquia de títulos mais consistente).
- Mínimo de 3 páginas: **Atendido** (`index.html`, `projetos.html`, `cadastro.html`).
- Hierarquia de títulos lógica: **Parcialmente atendida** (ajustar `index.html` para um único `h1` global e `h2`/`h3` nas subseções).
- Formulário com inputs HTML5 e validação nativa: **Atendido**.
- Agrupamento lógico do formulário: **Atendido** (`fieldset`/`legend`).

### Como Visualizar
1. Abra o arquivo `index.html` diretamente no navegador.
2. Navegue pelos links do menu (`Projetos`, `Cadastro`).
3. Para testar validações, tente enviar o formulário em `cadastro.html` sem preencher ou com formatos inválidos.

### Créditos e Licença
- © 2025 ONG Esperança (exemplo acadêmico). Arquivos de imagem conforme pasta `assets/imagens/`.


