import React, { Component } from 'react';

const person = (props) => {
	return <div>
      <p>
        Soy {props.name} y tengo {props.age} años!
      </p>
      <p onClick={props.click}>{props.children}</p>
    </div>;
};

export default person;