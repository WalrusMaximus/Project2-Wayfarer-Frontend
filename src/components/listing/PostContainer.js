import React, { Component } from 'react'
import Post from '../Post'
import { Segment, Button, Modal, Form } from 'semantic-ui-react'

export default class PostContainer extends Component {

  state = {
    posts: [],
    listing: []
  }

  onInputChange = (event) => {
    this.setState({
      post: event.target.value
    })
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log('click onFormSubmit')
    // let post = this.state.post
    // // call props.createPost and pass in post variable. we acccess a prop we have not seen before that is a function. depending on where the post is called from, we have to give it access to function of prop object
    // // we need to supply prop from parent component, that parent is the todoscontainer
    // this.state.createPost();
    // this.setState({
    //     posts: '',
    // })
  
    //capture the post input and set it in state
    // close modal on submit button
  
}

  render() {

    let postComponents = this.props.posts.map((post, index) => {
      return (
        <Post
          displayPosts={this.props.displayPosts}
          post={post} key={index}
        />
      )
    })

    // let listComponents = this.props.city.map((listing, index) => {
    //   return (
    //     <Listing 
    //     displayListing={this.props.displayListing}
    //     listing={listing} key={index}
    //     />
    //   )
    // })

    let style = {
      margin: '1rem'
    }

    let headerStyle = {
      display: 'inline-block',
    }

    let buttonStyle = {
      float: 'right'
    }

    return (
      <div>
        <Segment style={style}>
          <h2 style={headerStyle}>Posts</h2>
          <Modal trigger={<Button style={buttonStyle}>New Post</Button>}>
            <Modal.Header>Tell us about this city</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form onSubmit={this.onFormSubmit}>

                  <Form.Field>
                    <label>Title</label>
                    {/* <input name='title' placeholder='Title' onChange={this.props.handleInput} /> */}
                    <input onChange={this.onInputChange} type="text" placeholder="Title of Post" value={this.state.post}/>
                  </Form.Field>

                  <Form.TextArea placeholder='Tell us more about this city...' onChange={this.props.handleInput} value={this.state.post}/>
                  
                  <Button type='submit' onClick={this.props.handleNewPost}>Post</Button>

                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <Post />
          {/* <Segment> */}
            <div>{postComponents}</div>
          {/* </Segment> */}
        </Segment>
      </div>
    )
  }
}

//axios /posts/createpost

{/* <Modal
            trigger={<Button style={buttonStyle}>New Post</Button>}
            header='Post Comment'
            content={<Form>
              <Form.TextArea style={formStyle} placeholder='Comment...' />
            </Form>}
            actions={['Cancel', { key: 'done', content: 'Post', positive: true }]}
/> */}
