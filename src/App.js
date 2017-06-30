import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/skeleton.css';

import propertyData from './data/property.json';


class ResultsContainer extends Component {
	render() {
		return(
			<div className="ResultsContainer">
			<div className="container-header">
				<h1> Results </h1>
			</div>
				<Card data={this.props.data}></Card>
				<Card data={this.props.data}></Card>
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
				<Card data={this.props.data}></Card>
				<Card data={this.props.data}></Card>
			</div>
		)
	}
}



class Container extends Component {
	render() {
		return(
			<div className="container">
				<div className="six columns">
					<ResultsContainer data={this.props.data}></ResultsContainer>
				</div>
				<div className="six columns">
				<SavedContainer data={this.props.data}></SavedContainer>
				</div>
			</div>
		)
	}
}


class Card extends Component {
  render() {
    return (
      <div className="card-bg">
	      <div className="card-header">
					<img src={this.props.data.agency.logo}/>
	      </div>
	      <div className="card-photo">
					<img src={this.props.data.mainImage}/>
				</div>
      </div>
    )
  }
}

class App extends Component {

	constructor() {
		super()
		this.state = {
			results: propertyData.results[0]
		}
	}

  render() {
    return (
      <Container data={this.state.results}>
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
