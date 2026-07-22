# Anotando 📝

O **Anotando** é uma aplicação web voltada para a criação, organização e gerenciamento de notas e anotações pessoais. O projeto é composto por um front-end moderno desenvolvido em React e uma arquitetura preparada para integração com um back-end corporativo desenvolvido em Java (Spring Boot) e banco de dados MySQL.

---

## 🚀 Tecnologias Utilizadas

### Front-end:
* **React 19 (com Vite):** Biblioteca principal para a criação da interface reativa.
* **React Router Dom 7:** Gerenciador de rotas da aplicação, utilizado para navegação e proteção de rotas privadas.
* **Axios:** Cliente HTTP utilizado para a comunicação segura com as APIs de login, cadastro, listagem, criação e edição de notas.
* **React Icons:** Biblioteca de ícones moderna e leve para botões de ação (editar, excluir, fechar).
* **CSS Modules:** Técnica de estilização onde os estilos são scoped (locais) por componente, prevenindo vazamento de regras de design.

### Back-end & Banco de Dados:
* **Java:** Linguagem escolhida para o desenvolvimento do servidor de produção.
* **MySQL:** Banco de dados relacional para persistência de usuários e anotações.

---


## 🛡️ Funcionalidades Implementadas

### 1. Autenticação e Sessão
* **Login & Cadastro:** Formulários com validações de campos e envio de dados via chamadas assíncronas para a API `/usuarios`.
* **Persistência Local:** Ao efetuar login, os dados do usuário logado são salvos em formato JSON no `localStorage`.
* **Logout Seguro:** Limpa o armazenamento local do navegador e redireciona de volta à tela de login ao clicar no botão "Sair".

### 2. Proteção de Rotas (Security)
* **ProtectedRoute:** Um componente que envolve páginas protegidas (como `/notas`). Caso um usuário não autenticado tente acessar a URL diretamente no navegador, ele é redirecionado instantaneamente para a tela inicial (`/`), evitando vazamento de informações e falhas de runtime.

### 3. Painel de Anotações (CRUD)
* **Criação e Edição Inteligente (React Key Pattern):** A interface de criação e edição de notas utiliza uma chave dinâmica baseada no ID do elemento editado (`key={editando ? editando.id : 'new'}`). Isso força a remontagem automática do formulário sempre que o estado de edição muda, limpando ou preenchendo os dados da nota imediatamente sem a necessidade de efeitos colaterais lentos (`useEffect`).
* **Visualização:** Listagem dinâmica dos cards das anotações buscadas do banco de dados através de chamadas do Axios.
* **Exclusão:** Botão integrado com requisições assíncronas DELETE para exclusão em tempo real.

---

