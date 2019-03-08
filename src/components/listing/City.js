import React, { Component } from 'react'
import { Segment, Image, Divider, SegmentGroup } from 'semantic-ui-react'


export default class City extends Component {
  render() {

    let style = {
      color: 'black',
    }

    return (
      <SegmentGroup>
        <a onClick={() => { console.log(`clicked ${this.props.city.name}`) }}>
          <Segment style={style}>
            <h2>{this.props.city.name}</h2>
          </Segment>
        </a>
      </SegmentGroup>
    )
  }

}
