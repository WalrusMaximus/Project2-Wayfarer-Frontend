import React, { Component } from 'react'
import { Segment, Image, Header } from 'semantic-ui-react'
import axios from 'axios'

export default class Listing extends Component {
  state = {
    foundCity: {
      name: "Los Angeles",
      country: "United States of America",
      imageUrl: "https://images.unsplash.com/photo-1525876285538-4cc52d170c0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
    }
  }

  componentDidMount() {
    axios.get(`https://damp-citadel-74040.herokuapp.com/cities/${this.props.cityId}`)
      // this will ultimately point to users/profile/:id
      .then((res) => {
        this.setState({
          foundCity: res.data[0]
          // this will pull just the res.data when it targets correctly
        })
      })
      .catch(error => {
        console.log('Could not find city', error);
      });
  };

  render() {

    let style = {
      margin: '1rem'
    }

    return (
      <div>
        <Segment style={style}>
          <Image src={this.props.city.imageUrl} size='medium' />
          <Header as='h2'>{this.props.city.name}</Header>
          <Header as='h3'>{this.props.city.country}</Header>
        </Segment>
      </div>
    )
  }
}
