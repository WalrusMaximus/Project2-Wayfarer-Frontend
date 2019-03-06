import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import Profile from './Profile';
import ProfilePosts from './ProfilePosts';

export default class ProfileContainer extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={5}>
          <Profile />
        </Grid.Column>
        <Grid.Column width={11}>
          <ProfilePosts />
        </Grid.Column>
      </Grid>
    )
  }
}
