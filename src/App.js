import { Component } from "react";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import Header from "./components/Header/Header.component";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
		this.changeStateOnInput = this.changeStateOnInput.bind(this);
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	changeStateOnInput(e) {
		this.setState({ searchField: e.target.value });
	}
	render() {
		const { monsters, searchField } = this.state;
		const fileteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().startsWith(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<Header title="Monsters Rolodex"/>
				<SearchBox changeState={this.changeStateOnInput} />
				<CardList monsters={fileteredMonsters} />
			</div>
		);
	}
}
export default App;
