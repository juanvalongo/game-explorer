import './GameCard.css'

function GameCard({ titulo, genero, ano, nota, imagem, descricao }) {
  return (
    <article className="card-jogo">
        <img src={imagem} alt={titulo} />

        <div className="conteudo-card">    
            <h2>{titulo}</h2>
            
            <p>{descricao}</p>

            <div className="informacoes-jogo">
                <span>{genero}</span>
                <span>{ano}</span>
                <span>⭐ {nota}</span>
            </div>
        </div>
    </article>
  )
}

export default GameCard