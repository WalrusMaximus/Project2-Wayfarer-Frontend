import React, { Component } from 'react'
import Post from '../Post'
import { Segment, Button, Modal, Form } from 'semantic-ui-react'

export default class PostContainer extends Component {
  // state = {
  //   title: '',
  //   content: ''
  // }

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
            <Modal.Header>Tell us about {this.props.cityId}</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>Title</label>
                    <input name='title' placeholder='Title' onChange={this.props.handleInput} />
                  </Form.Field>
                  <Form.TextArea name='content' placeholder='Tell us more about this city...' onChange={this.props.handleInput} />
                  <Button type='submit' onClick={this.props.handleNewPost}>Post</Button>
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
