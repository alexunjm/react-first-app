import React, { Component } from 'react';

const person = (props) => {

	const classes = [];
	if(props.name.length <= 10) {
		classes.push('red');
	}
	if(props.name.length <= 5) {
		classes.push("bold");
	}
	console.log(classes);

	return (
		<div>
			<p className={classes.join(' ')}>Soy {props.name} y tengo {props.age} años!</p>
			{props.children != null && <p onClick={props.click}>{props.children}</p>}
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;