import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Profile from "./Profile";
import ProfilePosts from "./ProfilePosts";
import Copyright from "../Copyright"

export default class ProfileContainer extends Component {

  render() {
    let gridMargin = {
      margin: "0",
      padding: "1em",
      paddingTop: "2em"
    };

    let leftGrid = {
      paddingTop: "2em",
      paddingLeft: "3em"
    };

    return (
      <div>
        <Grid centered>
          <Grid.Column width={5} style={leftGrid}>
            <Profile user={this.props.user} />
          </Grid.Column>
          <Grid.Column width={11} style={gridMargin}>
            <ProfilePosts user={this.props.user} />
          </Grid.Column>
        </Grid>
        <Copyright />
      </div>
    );
  }
}
