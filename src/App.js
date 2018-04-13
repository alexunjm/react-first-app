import React, { Component } from 'react';
import logo from './logo.svg';
import "./App.css";
import Person from './Person/Person';

class App extends Component {

	state = {
		title: 'Bienvenido a React'
	};

	switchNameHandler() {
		console.log('se ha dado click');
	}

  	render() {
             /* return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
	); */
	
		return <div className="App">
        <h1>{this.state.title}</h1>
        <p>Esto realmente funciona!!</p>
		<button onClick={this.switchNameHandler} >cambiar nombre</button>
        <Person name="Alex" age="29" />
        <Person name="Andrea" age="30" >Mis hobbies son: cocinar, ver series</Person>
        <Person name="Marlon" age="29" />
      </div>;
	
		/* return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Ejemplo de componente con la clase React")); */
	}
}

export default App;
