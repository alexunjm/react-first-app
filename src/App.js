import React, { Component } from 'react';
import logo from './logo.svg';
import "./App.css";
import Person from './Person/Person';

class App extends Component {
  state = {
    title: "Bienvenido a React",
	pText: "Esto realmente funciona!!",
	aName: "Marlon"
  };

  switchNameHandler = (newTitle) => {
    //console.log('se ha dado click');
    //NO HACER ESTO: this.state.title = 'nuevo título';
    this.setState({
      title: newTitle ? newTitle : "Ejemplo de evento de click para cambiar el título de ésta página"
    });
  };

  changeNameHandler = (event) => {
	  this.setState({
		  aName: event.target.value
	  });
  }

  render() {
    
    return (
		<div className="App">
			<h1>{this.state.title}</h1>
			<p>{this.state.pText}</p>
			<button onClick={this.switchNameHandler.bind(this, "Prueba")}>
			cambiar nombre
			</button>
			<button
			onClick={() => this.switchNameHandler("Prueba de otra forma")}>
			cambiar nombre de otra forma
			</button>
			<Person name="Alex" age="29" />
			<Person name="Andrea" age="30" click={this.switchNameHandler.bind(this, null)}>
			Mis hobbies son: cocinar, ver series
			</Person>
			<Person name={this.state.aName} age="29" changed={this.changeNameHandler} />
		</div>
	);

    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Ejemplo de componente con la clase React"));
  }
}

export default App;
