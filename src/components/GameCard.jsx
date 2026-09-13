import './GameCard.css'

function GameCard(props) {
  return (
    <article className="card-jogo">
      <img src={props.imagem} alt={props.titulo} /> 

      <h2>{props.titulo}</h2>

      <p>Gênero: {props.genero}</p>
    </article>
  )
}

export default GameCard