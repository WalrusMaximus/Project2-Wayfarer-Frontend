import React, { Component } from 'react'
import City from './City';
import { Segment } from 'semantic-ui-react'


export default class CitiesContainer extends Component {

  


  render() {
    let cityComponents = this.props.cities.map((city, index) => {
      return (
        <City
          displayListing={this.props.displayListing}
          city={city} key={index}
          // on click update state in listing container and filter posts based on update city
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
        {/* <Segment.Group raised>
          <Segment> */}
        <h1>Cities</h1>
        <div style={style}>
          {cityComponents}
        </div>

        {/* </Segment>
        </Segment.Group> */}
      </div >
    )
  }
}
