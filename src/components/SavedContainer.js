import React, { Component } from 'react';
import Card from './Card.js';


class SavedContainer extends Component {
	render() {
		return(
			<div className="ResultsContainer">
			<div className="container-header">
				<h1> Saved</h1>
			</div>
			{this.props.saved.map((data, index) => {
				return (
					<Card key={index} index={index} clickHandler={this.props.removeFromSaved} data={data} button="REMOVE"></Card>
				)
			})}

			</div>
		)
	}
}

export default SavedContainer
