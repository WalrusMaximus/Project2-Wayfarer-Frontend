import React, { Component } from 'react';
import CitiesContainer from './CitiesContainer';
import Listing from './Listing';
import Copyright from '../Copyright'
import PostContainer from './PostContainer';
import { Grid } from 'semantic-ui-react';
import axios from 'axios'

export default class ListingContainer extends Component {
 
  render() {

    let backgroundStyle = {
      backgroundColor: '#f2f2f2',
      margin: 0
    }

    return (
      <div>
        <Grid style={backgroundStyle}>
          <Grid.Column width={5}>
            <CitiesContainer
              displayListing={this.props.displayListing}
              cities={this.props.cities}
              setCityId={this.props.setCityId}
            />
          </Grid.Column>
          <Grid.Column width={11}>
            <Listing 
            cityId={this.props.cityId}
            />
            <PostContainer
              displayPosts={this.props.displayPosts}
              posts={this.props.posts}
              handleInput={this.props.handleInput}
              handleNewPost={this.props.handleNewPost}
            />
          </Grid.Column>
        </Grid>
        <Copyright />
      </div>
    )
  }
}
