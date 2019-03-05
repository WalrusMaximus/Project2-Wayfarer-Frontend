import React, { Component } from 'react'
import { Dropdown, Menu, Search } from 'semantic-ui-react'


export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {

    let menuStyle = {
      borderRadius: 0
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

        <Menu.Item>
          <Search size='small' />
        </Menu.Item>

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
