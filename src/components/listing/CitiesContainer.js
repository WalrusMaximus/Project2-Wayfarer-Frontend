import React, { Component } from 'react'
import City from './City';


export default class CitiesContainer extends Component {

  render() {
    let cityComponents = this.props.cities.map((city, index) => {
      return (
        <City
          displayListing={this.props.displayListing}
          city={city} key={index}
          // send down function setCityID from app.js
          setCityId={this.props.setCityId}
        />
      )
    })

    let style = {
      overflow: 'scroll',
      overflowX: 'hidden',
      maxHeight: '100vh'
    }

    return (
      <div>
        <h1>Cities</h1>
        <div style={style}>
          {cityComponents}
        </div>
      </div >
    )
  }
}
