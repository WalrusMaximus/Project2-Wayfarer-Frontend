import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Profile from "./Profile";
import ProfilePosts from "./ProfilePosts";
import axios from "axios";

export default class ProfileContainer extends Component {
  state = {
    name: "",

    currentlyViewingUser: {
      name: "",
      userName: "",
      email: ""
    }
  };

  componentDidMount = () => {
    this.displayProfile();
  };

  displayProfile = () => {
    axios
      .get("https://damp-citadel-74040.herokuapp.com/users/profile/:id")
      .then(res => {
        console.log(res);
        this.setState({
          currentlyViewingUser: res.data.user
        });
      })
      .catch(err => console.log(err));
  };

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
      <Grid centered>
        <Grid.Column width={5} style={leftGrid}>
          <Profile showingUser={this.state.currentlyViewingUser} />
        </Grid.Column>
        <Grid.Column width={11} style={gridMargin}>
          <ProfilePosts />
        </Grid.Column>
      </Grid>
    );
  }
}
