function Header() {
  return (
    <header>
      <h1>🎮 Game Explorer</h1>
      <p>Explore o mundo dos games.</p>
    </header>
  )
}

export default Header 
/*O export default Header permite que o componente Header seja exportado pelo 
arquivo Header.jsx e utilizado em outros arquivos do projeto. Dessa forma, 
o App.jsx pode importar esse componente utilizando import Header from './components/Header' 
e depois renderizá-lo com <Header />, criando uma conexão entre os dois arquivos.*/