import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import Post from '../Post'

export default class ProfilePosts extends Component {
  render() {

    let segmentStyle = {
      marginRight: "1em"
    }

    return (
      <Segment style={segmentStyle}>
        <h1>#userName's Posts</h1>
        <Post />
      </Segment>
    )
  }
}
