import React, { Component } from 'react'
import Post from './Post'
import { Segment, Menu, Button, Icon, Modal, Form } from 'semantic-ui-react'

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
    }

    return (
      <div>
        <Segment.Group raised>
          <Segment>
            <h1 style={headerStyle}>Posts</h1>
            {/* Button style={buttonStyle}><Icon name='edit' /></Button> */}
            {/* <Icon edit style={buttonStyle} link name='edit' size='big' name='edit' /> */}

            <Modal
              trigger={<Button style={buttonStyle}><Icon name='edit'></Icon>New Post</Button>}
              header='Reminder!'
              content={<Form>
                <Form.Input style={formStyle} fluid placeholder='First name' />
                <Form.TextArea style={formStyle} placeholder='Tell us more about you...' />
              </Form>}
              actions={['Cancel', { key: 'done', content: 'Post', positive: true }]}
            />


            <Post />
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

//axios /posts/createpost
