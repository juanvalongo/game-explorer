import './App.css'
import Header from './components/Header'
import GameCard from './components/GameCard'

const jogos = [
  {
    titulo: "The Witcher 3",
    genero: "RPG",
    imagem: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg"
  },
  {
    titulo: "God of War",
    genero: "Ação",
    imagem: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg"
  },
  {
    titulo: "Minecraft",
    genero: "Sandbox",
    imagem: "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg"
  }
]

function App() {
  return (
    <main>
      <Header
        titulo="🎮 Game Explorer"
        descricao="Explore o mundo dos games."
      />
      <section className="lista-jogos">
        {jogos.map((jogo) => ( //O .map() permite percorrer cada elemento de um array e criar alguma coisa para cada elemento.
          <GameCard
            key={jogo.titulo}
            titulo={jogo.titulo}
            genero={jogo.genero}
            imagem={jogo.imagem}
          />
        ))}
      </section>  
    </main>
  )
}

export default App