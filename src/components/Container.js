import React, { Component } from 'react';

import propertyData from '../data/property.json';
import ResultsContainer from './ResultsContainer'
import SavedContainer from './SavedContainer'
import utils from '../utils/utils.js'


class Container extends Component {
	constructor() {
		super()
		this.state = {
			results: propertyData.results,
			saved: propertyData.saved
		}
	}

addToSaved = (e, index) => {
			e.preventDefault()

			this.setState((prevState)=> {
        utils.addToSavedArray(prevState, index)
		} )
	}

removeFromSaved = (e, index) => {
			e.preventDefault()
			this.setState((prevState)=> {
        utils.removeFromSavedArray(prevState, index)
		})
	}

	render() {
		return(
			<div className="container" id="container">
				<div className="six columns">
					<ResultsContainer addToSaved={this.addToSaved} results={this.state.results}></ResultsContainer>
				</div>
				<div className="six columns">
				    <SavedContainer removeFromSaved={this.removeFromSaved} saved={this.state.saved}></SavedContainer>
				</div>
			</div>
		)
	}
}

export default Container
