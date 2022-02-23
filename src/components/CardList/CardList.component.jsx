import Card from "../Card/Card.component";
import "./CardList.styles.css";

const CardList = (props) => {
	return (
		<div className="card-list">
			{props.monsters.map((monster) => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	);
};

export default CardList;
