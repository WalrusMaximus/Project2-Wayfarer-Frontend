import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ProfilePic from './ProfilePic';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <ProfilePic />
      </Container>
    )
  }
}
