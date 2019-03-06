import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class SignIn extends Component {
  render() {
    return (
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
    )
  }
}
