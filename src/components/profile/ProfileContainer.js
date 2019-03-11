import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Profile from "./Profile";
import ProfilePosts from "./ProfilePosts";
import Copyright from "../Copyright"
import axios from "axios";
import { timingSafeEqual } from "crypto";

export default class ProfileContainer extends Component {
  state = {
    name: "",
    foundProfile: 'test'
  };
  
    componentDidMount() {
    axios.get(`https://damp-citadel-74040.herokuapp.com/users/profile/${this.props.match.params.id}`)
    // this will ultimately point to users/profile/:id
      .then((res) => {
        console.log(res.data[0])
        this.setState({
          foundProfile: res.data[0]
          // this will pull just the res.data when it targets correctly
        })
      console.log(this.state.foundProfile)
      })
      .catch(error => {
        console.log('Error fetching and parsing data for listings', error);
    });
  }

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
          <Profile data={this.state.foundProfile} />
        </Grid.Column>
        <Grid.Column width={11} style={gridMargin}>
          <ProfilePosts data={this.state.foundProfile}/>
        </Grid.Column>
      </Grid>
      <Copyright />
      </div>
    );
  }
}
