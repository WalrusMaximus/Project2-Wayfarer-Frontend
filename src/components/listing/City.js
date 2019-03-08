import React, { Component } from 'react'
import { Segment, Image, Divider, SegmentGroup } from 'semantic-ui-react'


export default class City extends Component {

  // state = {
  //   city: {
  //     // cityPost: this.props.city.name
  //     name: this.props.city.name,
  //     country: this.props.city.country,
  //     imageUrl: this.props.city.imageUrl
  //   }
  // }



  render() {

    let style = {
      color: 'black',
    }

    return (
      <SegmentGroup>
        {/* <a onClick={() => {this.yourfunction ,console.log(`clicked ${this.props.city.name}`) }}> */}
        <a onClick={ ()=>{this.props.setCityId(this.props.city._id)}}>
          <Segment style={style}>
            <h2>{this.props.city.name}</h2>
          </Segment>
        </a>
      </SegmentGroup>
    )
  }

}
