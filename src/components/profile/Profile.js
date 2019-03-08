import React, { Component } from "react";
import { Container, List, Header, Image } from "semantic-ui-react";

export default class Profile extends Component {
  render() {
    
    let headerMargin = {
      marginTop: "5%"
    };

    return (
      <Container>
        <Header as="h2" textAlign="center" style={headerMargin} />
        <Image src="./images/default_avatar.png" size="medium" circular />
        <Header as="h3" textAlign="left">
          <List>
            <List.Item align="center">
              <List.Content>
                <List.Icon align="center" name="user" />
                {this.props.data.userName}
              </List.Content>
            </List.Item>
            <List.Item align="center">
              <List.Content>
                <List.Icon align="center" name="marker" />
                San Francisco, CA
              </List.Content>
            </List.Item>
            <List.Item align="center">
              <List.Content align="center">
                <List.Icon align="center" name="mail" />
                <a href="#">{this.props.data.email}</a>
              </List.Content>
            </List.Item>
          </List>
        </Header>
      </Container>
    );
  }
}
