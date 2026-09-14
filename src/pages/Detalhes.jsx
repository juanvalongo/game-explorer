import { Link, useParams } from 'react-router-dom'
import jogos from '../data/jogos'

function Detalhes() {
  const { id } = useParams() //Pega o parâmetro da rota, que no caso é o id do jogo.  
  
  const jogo = jogos.find((jogo) => jogo.id === Number(id))

  if (!jogo) {
  return (
    <main>
      <h1>Jogo não encontrado</h1>
      <p>Não encontramos um jogo com esse ID.</p>
    </main>
  )
}
  
  return (
    <main>
        <h1>{jogo.titulo}</h1>

        <img src={jogo.imagem} alt={jogo.titulo} />

        <p>{jogo.descricao}</p>

        <p>Gênero: {jogo.genero}</p>
        <p>Ano: {jogo.ano}</p>
        <p>Nota: ⭐ {jogo.nota}</p>

        <Link to="/">← Voltar para os jogos</Link>
    </main>
  )
}

export default Detalhes