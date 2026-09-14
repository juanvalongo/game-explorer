import Header from '../components/Header'
import GameCard from '../components/GameCard'
import jogos from '../data/jogos'

function Home() {
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
            id={jogo.id}
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