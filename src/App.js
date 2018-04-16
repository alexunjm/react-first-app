import React, { Component } from 'react';
import logo from './logo.svg';
import "./App.css";
import Person from './Person/Person';

class App extends Component {
  state = {
    title: "Bienvenido a React",
    pText: "Esto realmente funciona!!",
    Persons: [
		{id: 1, name: "Alex", age: 29},
		{id: 2, name: "Andrea", age: 30, hobbies: ['cocinar', 'ver series']},
		{id: 3, name: "Vale", age: 17},
		{id: 4, name: "Paula", age: 25},
		{id: 5, name: "Violeta", age: 5}
	],
    showPersons: false
  };

  switchNameHandler = newTitle => {
    //console.log('se ha dado click');
    //NO HACER ESTO: this.state.title = 'nuevo título';
    this.setState({
      title: newTitle
        ? newTitle
        : "Ejemplo de evento de click para cambiar el título de ésta página"
    });
  };

  changeNameHandler = (event, id) => {
	const Persons = [...this.state.Persons];
	const index = Persons.findIndex(person => person.id === id);
	const person = Persons[index];
	person.name = event.target.value;
	Persons[index] = person;
    this.setState({
      Persons
    });
  };

  tooglePersons = () => {
	const show = this.state.showPersons;
	this.setState({
		showPersons: !show
	})
  };

  render() {
    let Persons = null;
    if (this.state.showPersons) {
      Persons = (
        <div>
			{this.state.Persons.map(p => {
				if(p.hobbies) {
					return (
						<Person key={p.id} name={p.name} age={p.age} changed={event => this.changeNameHandler(event, p.id)} >
						Mis hobbies son: {p.hobbies.map((h, index, array) => index < array.length-1 ? h + ', ' : h)}
						</Person>
					);
				}
				return <Person key={p.id} name={p.name} age={p.age} changed={(event) => this.changeNameHandler(event, p.id)} />;
			})}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <p>{this.state.pText}</p>
        <button onClick={this.switchNameHandler.bind(this, "Prueba")}>
          cambiar nombre
        </button>
        <button onClick={() => this.switchNameHandler("Prueba de otra forma")}>
          cambiar nombre de otra forma
        </button>
        <div>
          <button onClick={this.tooglePersons}>toogle</button>
        </div>
        {Persons}
      </div>
    );

    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Ejemplo de componente con la clase React"));
  }
}

export default App;
