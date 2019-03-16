import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import Post from '../Post'
import axios from 'axios'

export default class ProfilePosts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://damp-citadel-74040.herokuapp.com/posts`)
      .then((res) => {
        // filter the response and only add posts matching the cityId, which we get from above.
        const posts = [];
        res.data.filter(ele => {
          const userId = ele.user ? ele.user._id : '';
          return userId === this.props.user._id;
        }).map((ele) => {
          return posts.push(ele);
        })

        this.setState({
          posts
        })
      })
      .catch(err => {
        console.log('Error displaying for posts when you load the profile', err);
      });
  };

  render() {
    let postComponents = this.state.posts ? this.state.posts.map((post, index) => {
      return (
        <Post
          post={post} key={index}
        />
      )
    }) : <p>Posts not found</p>;

    let style = {
      margin: '1rem'
    }

    return (
      <div>
        <Segment style={style}>
          <h2>My Posts</h2>
          <div>{postComponents}</div>
        </Segment>
      </div>
    )
  }
}
