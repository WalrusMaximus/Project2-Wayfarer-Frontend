import React, { Component } from 'react'
import { Dropdown, Menu, Button } from 'semantic-ui-react'


export default class Header2 extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {

    let menuStyle = {
      borderRadius: 0,
      marginBottom: 0
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

        <Menu.Item position='right'>
          <Button primary>Sign up</Button>
        </Menu.Item>

        <Menu.Item>
          <Button>Log-in</Button>
        </Menu.Item>

      </Menu>
    )
  }
}
