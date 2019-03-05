import React, { Component } from 'react'
import { Segment, Image } from 'semantic-ui-react'


export default class City extends Component {
  render() {

    let cityStyle = {
      marginLeft: '20px'
    }

    return (
      <div>
        <Segment.Group raised>
          <Segment><Image src={'https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg'} size='tiny' verticalAlign='middle' /> <span style={cityStyle}>New York City</span></Segment>
          <Segment><Image src={'https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg'} size='tiny' verticalAlign='middle' /> <span style={cityStyle}>New York City</span></Segment>
          <Segment><Image src={'https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg'} size='tiny' verticalAlign='middle' /> <span style={cityStyle}>New York City</span></Segment>
          <Segment><Image src={'https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg'} size='tiny' verticalAlign='middle' /> <span style={cityStyle}>New York City</span></Segment>
          <Segment><Image src={'https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg'} size='tiny' verticalAlign='middle' /> <span style={cityStyle}>New York City</span></Segment>
          <Segment><Image src={'https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg'} size='tiny' verticalAlign='middle' /> <span style={cityStyle}>New York City</span></Segment>
        </Segment.Group>
      </div>
    )
  }
}
