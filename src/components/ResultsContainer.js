import React, { Component } from 'react';
import Card from './Card.js';

class ResultsContainer extends Component {
	render() {
		return(
			<div className="ResultsContainer">
			<div className="container-header">
				<h1> Results </h1>
			</div>
			{this.props.results.map((data, index) => {
				return (
					<Card key={index} index={index} clickHandler={this.props.addToSaved} data={data} button="ADD"></Card>
				)
			})}
			</div>
		)
	}
}

export default ResultsContainer
