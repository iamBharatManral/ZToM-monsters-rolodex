import './Card.styles.css'

const Card = (props) => {
  return (
		<div className="card">
			<img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
      <h2>{props.monster.name}</h2>
      <p>{ props.monster.email }</p>
		</div>
  );
}

export default Card;