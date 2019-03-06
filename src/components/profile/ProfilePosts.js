import React, { Component } from 'react'
import { Segment, Image } from 'semantic-ui-react'
import Post from './Post'

export default class ProfilePosts extends Component {
  render() {
    return (
      <Segment>
        <Image src={'https://amp.businessinsider.com/images/5ad8ae04cd862425008b4898-750-563.jpg'} size='small' floated='right' />
        <h1>San Francisco</h1>
        <h2>CA Unites States</h2>
        <Post />
      </Segment>
    )
  }
}
