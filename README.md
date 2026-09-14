# 🎮 Game Explorer

O **Game Explorer** é um projeto desenvolvido com **React** com o objetivo de explorar e praticar conceitos fundamentais do desenvolvimento de aplicações React.

O projeto apresenta uma interface para explorar jogos e visualizar informações sobre eles, utilizando componentes reutilizáveis, navegação entre páginas e uma estrutura organizada.

## 🌐 Projeto online

👉 [Acessar o Game Explorer no GitHub Pages](https://juanvalongo.github.io/game-explorer/)

## 🚀 Tecnologias

* React
* JavaScript
* Vite
* React Router
* ESLint
* CSS

## 📚 Objetivo

Este projeto está sendo desenvolvido como parte do processo de aprendizado de **React**, colocando em prática conceitos como:

* Componentes
* Props
* Destructuring
* Renderização de listas com `map()`
* `key`
* Estado
* Hooks
* React Router
* Rotas dinâmicas
* Parâmetros de URL
* Consumo de APIs
* Organização de projetos React

## 📁 Estrutura do projeto

```text
src/

├── assets/
├── components/
│   ├── Header.jsx
│   ├── GameCard.jsx
│   └── GameCard.css
├── pages/
│   ├── Home.jsx
│   └── Detalhes.jsx
├── data/
│   └── jogos.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

### 🧩 Principais partes

**components/**
Contém componentes reutilizáveis da aplicação, como o cabeçalho e os cards dos jogos.

**pages/**
Contém as páginas utilizadas pelo React Router:

* `Home.jsx` — página inicial com a lista de jogos.
* `Detalhes.jsx` — página com os detalhes de um jogo específico.

**data/**
Contém os dados utilizados inicialmente pela aplicação.

**App.jsx**
Configura as rotas da aplicação utilizando o React Router.

## 🧭 Rotas

Atualmente, o projeto possui as seguintes rotas:

```text
/
```

Página inicial com os jogos disponíveis.

```text
/detalhes/:id
```

Página de detalhes de um jogo. O `:id` é um parâmetro dinâmico utilizado para identificar qual jogo deve ser exibido.

Exemplo:

```text
/detalhes/1
/detalhes/2
/detalhes/3
```

Caso o ID não corresponda a nenhum jogo, a aplicação exibe uma mensagem informando que o jogo não foi encontrado.

## ▶️ Como executar o projeto

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/juanvalongo/game-explorer.git
cd game-explorer
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173/
```

## 🌐 Publicação

O projeto é publicado utilizando **GitHub Pages** através de **GitHub Actions**.

O build de produção é realizado pelo Vite e os arquivos gerados na pasta `dist/` são publicados automaticamente.

## 📌 Status

🚧 Projeto em desenvolvimento.
