import './App.css'
import Header from './components/Header'
import GameCard from './components/GameCard'

const jogos = [
  {
    titulo: "The Witcher 3",
    genero: "RPG"
  },
  {
    titulo: "God of War",
    genero: "Ação"
  },
  {
    titulo: "Minecraft",
    genero: "Sandbox"
  }
]

function App() {
  return (
    <main>
      <Header
        titulo="🎮 Meu Game Explorer"
        descricao="Uma aplicação React para explorar jogos."
      />

      {jogos.map((jogo) => ( //O .map() permite percorrer cada elemento de um array e criar alguma coisa para cada elemento.
        <GameCard
          key={jogo.titulo}
          titulo={jogo.titulo}
          genero={jogo.genero}
        />
      ))}
    </main>
  )
}

export default App