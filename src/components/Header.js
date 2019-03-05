import React, { Component } from 'react'
import { Dropdown, Menu, Search } from 'semantic-ui-react'


export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {

    let menuStyle = {
      borderRadius: 0
    }

    let searchStyle = {
      marginLeft: '20px',
      marginTop: 'auto',
      marginBottom: 'auto'
    }

    const { activeItem } = this.state
    return (
      <Menu style={menuStyle} stackable inverted>
        <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>

        <Menu.Item>
          Wayfarer
        </Menu.Item>

        <Search style={searchStyle} size='small' />

        <Menu.Menu position='right'>
          <Dropdown item text='Profile'>
            <Dropdown.Menu>
              <Dropdown.Item>View Profile</Dropdown.Item>
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}
