import React, { Component } from 'react';

export default class BuildManifestoForm extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    name: 'Agile',
	    blurb: 'We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:\n' +
'Individuals and interactions over processes and tools\n' +
'Working software over comprehensive documentation\n' +
'Customer collaboration over contract negotiation\n' +
'Responding to change over following a plan\n' +
'That is, while there is value in the items on the right, we value the items on the left more.'	    
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
	this.setState({value: event.target.value});
    }

    handleSubmit(event) {
	alert('Do something clever here.');
	event.preventDefault();
    }

    // Yes, I'll make this line up proper when I can be arsed
    render() {
	return (
		<form onSubmit={this.handleSubmit}>
		<label>Manifesto For:<input type="text" value={this.state.name} onChange={this.handleChange} /></label>
		<br />
		<label>Your Manifesto:<textarea value={this.state.blurb} onChange={this.handleChange} /></label>
		<br />
		<input type="submit" value="Generate" />
		</form>
	);
    }
}
