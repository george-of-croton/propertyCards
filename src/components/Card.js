import React, { Component } from 'react';

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
				<div className="row">
				<div className="six columns">
					{this.props.data.agency.brandingColors.primary !== "#000000" ? <h5>{this.props.data.price}</h5> : <h5 style={{color:"white"}}>{this.props.data.price}</h5>}
				</div>
				</div>
				<div className="row button-container">
					<div className="twelve columns">
						<button type="button" onClick={(e) => {
							this.props.clickHandler(e, this.props.index)}
						} className={this.props.button}>{this.props.button}</button>
					</div>
				</div>
      </div>
    )
  }
}

export default Card
