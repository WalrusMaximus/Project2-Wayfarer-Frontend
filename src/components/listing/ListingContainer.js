import React, { Component } from 'react';
import CitiesContainer from './CitiesContainer';
import Listing from './Listing';
import PostContainer from './PostContainer';
import { Grid } from 'semantic-ui-react';

export default class ListingContainer extends Component {
  render() {

    let backgroundStyle = {
      backgroundColor: '#f2f2f2',
      margin: 0
    }

    // on click update state, selected city on click function. post if then filtered by state that is passed down to it

    return (
      <div>
        <Grid style={backgroundStyle}>
          <Grid.Column width={5}>
            <CitiesContainer
              displayListing={this.props.displayListing}
              cities={this.props.cities}
            />
          </Grid.Column>
          <Grid.Column width={11}>
            <Listing />
            <PostContainer
              displayPosts={this.props.displayPosts}
              posts={this.props.posts}
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
