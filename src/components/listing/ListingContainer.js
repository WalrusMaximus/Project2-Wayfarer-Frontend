import React, { Component } from 'react';
import CitiesContainer from './CitiesContainer';
import Listing from './Listing';
import PostContainer from './PostContainer';
import { Grid } from 'semantic-ui-react';

export default class ListingContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={5}>
            <CitiesContainer displayListing={this.props.displayListing}
            cities={this.props.cities}/>
          </Grid.Column>
          <Grid.Column width={11}>
            <Listing />
            <PostContainer />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
