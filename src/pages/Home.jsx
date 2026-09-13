import Header from '../components/Header'
import GameCard from '../components/GameCard'
import { Link } from 'react-router-dom'

const jogos = [
{
  titulo: "The Witcher 3",
  genero: "RPG",
  ano: 2015,
  nota: 9.5,
  imagem: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
  descricao: "Uma aventura de RPG em um enorme mundo aberto."
},
  {
  titulo: "God of War",
  genero: "Ação",
  ano: 2018,
  nota: 9.4,
  imagem: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
  descricao: "Uma jornada de ação e aventura pela mitologia nórdica."
},
{
  titulo: "Minecraft",
  genero: "Sandbox",
  ano: 2011,
  nota: 9.0,
  imagem: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg",
  descricao: "Um jogo de construção e exploração em um mundo de blocos."
}
]

function Home() {
  return (
    <main>
      <Header
        titulo="🎮 Game Explorer"
        descricao="Explore o mundo dos games."
      />
        
      <Link to="/detalhes">Ver detalhes</Link>

      <section className="lista-jogos">
        {jogos.map((jogo) => ( //O .map() permite percorrer cada elemento de um array e criar alguma coisa para cada elemento.
          <GameCard
            key={jogo.titulo}
            titulo={jogo.titulo}
            genero={jogo.genero}
            ano={jogo.ano}
            nota={jogo.nota}
            imagem={jogo.imagem}
            descricao={jogo.descricao}
          />
        ))}
      </section>  
    </main>
  )
}

export default Home