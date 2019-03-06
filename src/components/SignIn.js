import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

export default class SignIn extends Component {
  render() {
    return (
      <Modal trigger={<Button>Sign up</Button>}>
      <Modal.Header>Sign up or Log in</Modal.Header>
      <Modal.Content>
        <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <Form>
              <h1>Sign In</h1>
              <Form.Field>
                <label>Email</label>
                <input name="email" placeholder='Email' onChange={this.props.handleInput} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input name='password' placeholder='Password' onChange={this.props.handleInput} />
              </Form.Field>
              <Button type='submit' onClick={this.props.handleLogIn}>Sign In</Button>
            </Form>    
        </Modal.Description>
      </Modal.Content>
      </Modal>
    )
  }
}

