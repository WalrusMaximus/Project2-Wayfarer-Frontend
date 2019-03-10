import React, { Component } from 'react'
import { Segment, Image, Header } from 'semantic-ui-react'

export default class Listing extends Component {
  render() {

    let style = {
      margin: '1rem'
    }

    return (
      <div>
        <Segment style={style}>
          <Image src={this.props.city.imageUrl} size='medium' />
          <Header as='h2'>{this.props.city.name}</Header>
          <Header as='h3'>{this.props.city.country}</Header>
        </Segment>
      </div>
    )
  }
}
