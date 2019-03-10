import React, { Component } from 'react';
import CitiesContainer from './CitiesContainer';
import Listing from './Listing';
import Copyright from '../Copyright'
import PostContainer from './PostContainer';
import { Grid } from 'semantic-ui-react';

export default class ListingContainer extends Component {
  // update state based on selected city
  // place for listing and posts once they come back from req
  // state = {
  //   listing: [],
  //   posts: [],
  //   city: this.props.CitiesContainer
  // }



  render() {

    let cityComponents = this.props.city.map((city, index) => {
      return (
        <Listing
          displayCity={this.props.displayCity}
          city={city} key={index}
        />
      )
    })

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
            {cityComponents}
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
