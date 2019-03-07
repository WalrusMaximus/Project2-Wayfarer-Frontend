import React, { Component } from 'react'
import { Container, List, Header, Image } from 'semantic-ui-react'
// import ProfilePic from './ProfilePic';


export default class Profile extends Component {
  render() {

    let headerMargin = {
      marginTop: "5%"
    }

    return (
      <Container>
        <Header as='h2' textAlign='center' style={headerMargin}>
          #userName
        </Header>
        <Image src='./images/default_avatar.png' size='medium' circular />
        <Header as='h3' textAlign='left'>
          <List>
            <List.Item  align="center">
              <List.Content>
                <List.Icon align="center" name='user' />
                #userName
              </List.Content>
            </List.Item>
            <List.Item  align="center">
              <List.Content>
                <List.Icon align="center" name='marker' />
                San Francisco, CA
              </List.Content>
            </List.Item>
            <List.Item  align="center">
              <List.Content align="center">
                <List.Icon align="center" name='mail' />
                <a href='#'>rando@wayfarer.com </a>
              </List.Content>
            </List.Item>
          </List>
        </Header>
      </Container>
    )
  }
}
