import React, { Component } from 'react'
import City from './City';
import { Segment } from 'semantic-ui-react'


export default class CitiesContainer extends Component {
  render() {

    return (
      <div>
        <Segment.Group raised>
          <Segment>
            <h1>Cities</h1>
            <City />
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}
