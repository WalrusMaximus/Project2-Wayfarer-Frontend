import React, { Component } from 'react'
import Post from '../Post'
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
      marginTop: '5%',
      marginBottom: '5%'
    }

    return (
      <div>
        <Segment>
          <Modal
            trigger={<Button style={buttonStyle}><Icon name='edit'></Icon>New Post</Button>}
            header='Post Comment'
            content={<Form>
              <Form.TextArea style={formStyle} placeholder='Comment...' />
            </Form>}
            actions={['Cancel', { key: 'done', content: 'Post', positive: true }]}
          />
          <Post />
        </Segment>
      </div>
    )
  }
}

//axios /posts/createpost
