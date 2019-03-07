import React, { Component } from 'react'
import { Button, Dropdown, Menu, Search } from 'semantic-ui-react'
import Signin from './SignIn'
import Signup from './SignUp'


export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {

    let menuStyle = {
      borderRadius: 0,
      marginBottom: 0
    }

    const { activeItem } = this.state

    if (this.props.isLoggedIn) {
      return (
        <Menu style={menuStyle} inverted>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>

          <Menu.Item>
            Wayfarer
        </Menu.Item>

          <Menu.Item>
            <Search size='small' />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Dropdown item text='Profile'>
              <Dropdown.Menu>
                <Dropdown.Item>View Profile</Dropdown.Item>
<<<<<<< HEAD
                <Dropdown.Item onClick={this.props.handleLogOut}>Sign Out</Dropdown.Item>
=======
                <Dropdown.Item><input name="logout" onChange={this.props.handleLogOut} />Sign Out</Dropdown.Item>
>>>>>>> 69481933f53c03014bd6132afa6f16ecf7376bb3
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      )
    } else {
      return (
        <Menu style={menuStyle} inverted>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>

          <Menu.Item>
            Wayfarer
        </Menu.Item>

          <Menu.Item position='right'>
            <Signup handleSignUp={this.props.handleSignUp} handleInput={this.props.handleInput} />
          </Menu.Item>

          <Menu.Item>
            <Signin handleLogIn={this.props.handleLogIn} handleInput={this.props.handleInput} />
          </Menu.Item>

        </Menu>
      )
    }
  }
}
