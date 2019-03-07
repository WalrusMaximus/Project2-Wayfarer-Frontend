import React, { Component } from 'react'
import { Segment, Image, Divider, SegmentGroup } from 'semantic-ui-react'


export default class City extends Component {
  render() {
    let style = {
      color: "pink",
      background: "black"
    }
  return (
    <SegmentGroup style={style}>
      <a  onClick={()=>{console.log(`clicked ${this.props.city.name}`)}}>
      <Segment style={style}>
            <h1>{this.props.city.name}</h1>
          </Segment>
      </a>
          
        </SegmentGroup>
  )
  }
  
}
