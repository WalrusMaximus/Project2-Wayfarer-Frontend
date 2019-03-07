import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'


export default class SignUp extends Component {
  render() {
    return (
      <Modal trigger={<Button color='green'>Sign up</Button>}>
        <Modal.Header>Sign up</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <h1>Sign Up</h1>
              <Form.Field>
                <label>Name</label>
                <input name="name" placeholder='Name' onChange={this.props.handleInput} />
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input name='userName' placeholder='Username' onChange={this.props.handleInput} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input name="email" placeholder='Email' onChange={this.props.handleInput} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input name='password' placeholder='Password' onChange={this.props.handleInput} />
              </Form.Field>
              <Button primary type='submit' onClick={this.props.handleSignUp}>Sign Up</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

