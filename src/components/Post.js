import React, { Component } from 'react'
import { Segment, Modal } from 'semantic-ui-react'

export default class Post extends Component {
  render() {

    if (this.props.post) {
      return (
        <div>
          <Modal trigger={<Segment><h2>{this.props.post.title}</h2></Segment>}>
            <Modal.Header>{this.props.post.title}</Modal.Header>
            <Modal.Content>
              <Segment>
                "{this.props.post.content}"
                <p>
                  <b><i>- {this.props.post.user ? this.props.post.user.userName : 'unknown'}</i></b>
                </p>
              </Segment>
            </Modal.Content>
          </Modal>
        </div>
      )
    } else {
      return <p>Posts not found</p>;
    }
  }
}
