function GameCard(props) {
  return (
    <article>
      <h2>{props.titulo}</h2>
      <p>Gênero: {props.genero}</p>
    </article>
  )
}

export default GameCard