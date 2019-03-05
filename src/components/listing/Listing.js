import React, { Component } from 'react'
import { Segment, Image } from 'semantic-ui-react'

export default class Listing extends Component {
  render() {

    return (
      <div>
        <Segment>
          <Image src={'https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg'} size='small' floated='right' />
          <h1>San Francisco</h1>
          <h2>CA Unites States</h2>
        </Segment>
      </div>
    )
  }
}
