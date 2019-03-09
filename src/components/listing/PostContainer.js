import React, { Component } from 'react'
import Post from '../Post'
import { Segment, Button, Modal, Form } from 'semantic-ui-react'

export default class PostContainer extends Component {
  render() {

    let postComponents = this.props.posts.map((post, index) => {
      return (
        <Post
          displayPosts={this.props.displayPosts}
          post={post} key={index}
        />
      )
    })

    let style = {
      margin: '1rem'
    }

    let headerStyle = {
      display: 'inline-block',
    }

    let buttonStyle = {
      float: 'right'
    }

    return (
      <div>
        <Segment style={style}>
          <h2 style={headerStyle}>Posts</h2>
          <Modal trigger={<Button style={buttonStyle}>New Post</Button>}>
            <Modal.Header>Tell us about *City*</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>Password</label>
                    <input name='password' placeholder='Password' onChange={this.props.handleInput} />
                  </Form.Field>
                  <Form.TextArea label='About' placeholder='Tell us more about you...' onChange={this.props.handleInput} />
                  <Button type='submit' onClick={this.props.handleLogIn}>Post</Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <Post />
          {/* <Segment> */}
            <div>{postComponents}</div>
          {/* </Segment> */}
        </Segment>
      </div>
    )
  }
}

//axios /posts/createpost

{/* <Modal
            trigger={<Button style={buttonStyle}>New Post</Button>}
            header='Post Comment'
            content={<Form>
              <Form.TextArea style={formStyle} placeholder='Comment...' />
            </Form>}
            actions={['Cancel', { key: 'done', content: 'Post', positive: true }]}
/> */}
