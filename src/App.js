import React, { Component } from 'react';
import _ from 'lodash';
import './css/skeleton.css';
import './App.css';
import propertyData from './data/property.json';


class ResultsContainer extends Component {
	render() {
		return(
			<div className="ResultsContainer">
			<div className="container-header">
				<h1> Results </h1>
			</div>
			{this.props.results.map((data, index) => {
				console.log(index)
				return (
					<Card test={index} addToSaved={this.props.addToSaved} data={data} button="ADD"></Card>
				)
			})}
			</div>
		)
	}
}

class SavedContainer extends Component {
	render() {
		return(
			<div className="ResultsContainer">
			<div className="container-header">
				<h1> Saved</h1>
			</div>
			{this.props.saved.map((data, index) => {
				// console.log(index)
				return (
					<Card  data={data} button="REMOVE"></Card>
				)
			})}

			</div>
		)
	}
}



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
			var selected = _.pullAt(prevState.results, index)[0]
			prevState.saved.push(selected)
			return({
				results: prevState.results,
				saved: prevState.saved
			})
		} )
	}

	removeFromSaved = (e, index) => {
			e.preventDefault()
			this.setState((prevState)=> {
			var selected = _.pullAt(prevState.results, index)[0]
			prevState.saved.push(selected)
			return({
				results: prevState.results,
				saved: prevState.saved
			})
		} )
	}



	render() {
		return(
			<div className="container" id="container">
				<div className="six columns">
					<ResultsContainer addToSaved={this.addToSaved} results={this.state.results}></ResultsContainer>
				</div>
				<div className="six columns">
				<SavedContainer saved={this.state.saved}></SavedContainer>
				</div>
			</div>
		)
	}
}


class Card extends Component {

	constructor(props) {
		super(props)
		this.state = {
			index: this.props.test
		}
	}

  render() {
		var divStyle = {
			backgroundColor: this.props.data.agency.brandingColors.primary
		}
    return (
      <div className="card-bg" style={divStyle}>
	      <div className="card-header">
					<img src={this.props.data.agency.logo} alt={this.props.data.id}/>
	      </div>
	      <div className="card-photo">
					<img src={this.props.data.mainImage} alt={this.props.data.id}/>
				</div>
				<div className="row button-container">
					<div className="twelve columns">
						<button type="button" onClick={(e) => {
							this.props.addToSaved(e, this.props.test)}
						} className={this.props.button}>{this.props.button}</button>
					</div>
				</div>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <Container>
      </Container>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }




export default App;
