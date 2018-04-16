import React, { Component } from 'react';

const person = (props) => {
	return (
		<div>
			<p>Soy {props.name} y tengo {props.age} años!</p>
			{props.children != null && <p onClick={props.click}>{props.children}</p>}
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;