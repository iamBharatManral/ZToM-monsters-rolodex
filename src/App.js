import './App.css';
import { Component } from 'react'

class App extends Component{
  constructor() {
    super();
    this.state = {
      string: "Hello From React Using State"
    }
  }
  render() {
    return (
		<div>
        <h2>{this.state.string}</h2>
        <button onClick={ () => this.setState({string : "New text"})}>Change text</button>
		</div>
	);
  }
}
export default App;
