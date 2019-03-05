import React, { Component } from 'react'
import Post from './Post'
import { Segment } from 'semantic-ui-react'

export default class PostContainer extends Component {
  render() {
    return (
      <div>
        <Segment.Group raised>
          <Segment>
            <h1>Posts</h1>
            <Post />
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}
