function Header(props) {  //O props é um objeto que contém as propriedades que foram enviadas para o componente.
  return (
    <header>
      <h1>{props.titulo}</h1>
      <p>{props.descricao}</p>
    </header>
  )
}

export default Header
/*O export default Header permite que o componente Header seja exportado pelo 
arquivo Header.jsx e utilizado em outros arquivos do projeto. Dessa forma, 
o App.jsx pode importar esse componente utilizando import Header from './components/Header' 
e depois renderizá-lo com <Header />, criando uma conexão entre os dois arquivos.*/