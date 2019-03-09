import React, { Component } from 'react'
import { Segment, SegmentGroup } from 'semantic-ui-react'


export default class Post extends Component {
  render() {
    if (this.props.post) {
      return (
        <div>
          <SegmentGroup>
            <Segment>
              <h2>{this.props.post.title}</h2>
            </Segment>
          </SegmentGroup>
        </div>
      )
    } else {
      return (
        <div>
          {/* <SegmentGroup>
            <Segment>
              <h2>There is no content</h2>
            </Segment>
          </SegmentGroup> */}
        </div>
      )
    }

  }
}
