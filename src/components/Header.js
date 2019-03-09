import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu, Search } from 'semantic-ui-react'
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

    console.log(this.props.profileId);

    const url = {
      path: `/profile/${this.props.profileId}`
    }

    if (this.props.isLoggedIn) {
      return (
        <Menu style={menuStyle} inverted>
          <Link to = "/listings/">
          <Menu.Item>            
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>
          </Link>

          <Menu.Item>
          <Link to = "/listings/">
            Wayfarer
          </Link>
          </Menu.Item>

          <Menu.Item>
            <Search size='small' />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Dropdown item text='Profile'>
              <Dropdown.Menu>
                <Dropdown.Item as={ Link } name="profile" to="/">Profile</Dropdown.Item>
                <Dropdown.Item onClick={this.props.handleLogOut} >Sign Out</Dropdown.Item>
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
