import React, { Component } from 'react'
import Post from '../Post'
import { Segment, Menu, Button, Icon, Modal, Form, Image, Header } from 'semantic-ui-react'

export default class PostContainer extends Component {
  render() {

    let headerStyle = {
      display: 'inline-block',
    }

    let buttonStyle = {
      float: 'right'

    }

    let formStyle = {
      width: '80%',
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '5%',
      marginBottom: '5%'
    }

    return (
      <div>
        <Segment>
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
