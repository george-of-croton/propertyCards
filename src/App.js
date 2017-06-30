import React, { Component } from 'react';

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
			{this.props.results.map((data) => {
				return (
					<Card data={data} button="ADD"></Card>
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
			{this.props.saved.map((data) => {
				return (
					<Card data={data} button="REMOVE"></Card>
				)
			})}

			</div>
		)
	}
}



class Container extends Component {
	render() {
		return(
			<div className="container" id="container">
				<div className="six columns">
					<ResultsContainer results={this.props.results}></ResultsContainer>
				</div>
				<div className="six columns">
				<SavedContainer saved={this.props.saved}></SavedContainer>
				</div>
			</div>
		)
	}
}


class Card extends Component {
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
					<div className="offset-by-four four columns">
						<button type="button" className={this.props.button}>{this.props.button}</button>
					</div>
				</div>
      </div>
    )
  }
}

class App extends Component {

	constructor() {
		super()
		this.state = {
			results: propertyData.results,
			saved: propertyData.saved
		}
	}

  render() {
    return (
      <Container results={this.state.results} saved={this.state.saved}>
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
