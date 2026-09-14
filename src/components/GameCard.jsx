import './GameCard.css'
import { Link } from 'react-router-dom'

function GameCard({ id, titulo, genero, ano, nota, imagem, descricao }) {
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

            <Link to={`/detalhes/${id}`}>Ver detalhes</Link>
        </div>
    </article>
  )
}

export default GameCard