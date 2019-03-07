import React, { Component } from 'react'
import { Segment, Image, Header } from 'semantic-ui-react'

export default class Listing extends Component {
  render() {

    return (
      <div>
        <Segment>
          <Image src={'https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg'} size='medium' />
          <Header as='h2'>San Francisco</Header>
          <Header as='h3'>United States</Header>
        </Segment>
      </div>
    )
  }
}
