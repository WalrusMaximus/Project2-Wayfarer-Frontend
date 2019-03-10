import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import axios from 'axios'
import Header from '../Header';
import Copyright from '../Copyright'
import Landing from '../landing/Landing'
import ListingContainer from '../listing/ListingContainer'
import './App.css';
import ProfileContainer from '../profile/ProfileContainer';

class App extends Component {
  state = {
    name: "",
    userName: "",
    email: "",
    password: "",
    isLoggedIn: false,
    user: null,
    redirect: false,
    cities: [],
    posts: [],
    profileId: null,
    cityId: '5c819cce15c78e000cb26497',
    title: '',
    content: '',
    city: "5c816fecf875f8000ce1e10a",
    userPost: '5c819cce15c78e000cb26497'
  }

  componentDidMount() {
    if (localStorage.token) {
      axios({
        method: "get",
        url: `https://damp-citadel-74040.herokuapp.com/users/`,
        headers: { authorization: `Bearer ${localStorage.token}` }
      })
        .then(response => {
          console.log('App successfully recieves a response')
          this.setState({
            isLoggedIn: true,
            user: response.data.user // ????? .user?
          });
        })
        .catch(err => {
          this.setState({
            isLoggedIn: false
          });
          localStorage.clear();
        });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
    this.displayListing();
    this.displayPosts();
  }

  componentDidUpdate() {
    console.log("City ID", this.state.cityId)
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  handleSignUp = event => {
    event.preventDefault();
    axios
      .post("https://damp-citadel-74040.herokuapp.com/users/signup", {
        name: this.state.name,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        localStorage.token = response.data.signedJwt;

        this.setState({
          isLoggedIn: true,
          user: response.data.user
        });
      })
      .catch(err => console.log(err));
  };

  handleLogIn = event => {
    event.preventDefault();
    console.log("its working!!!!!!!!!!!");
    axios
      .post("https://damp-citadel-74040.herokuapp.com/users/login", {
        // we need to be able to connect this to heroku as well
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.signedJwt;
        this.setState({
          isLoggedIn: true,
          user: response.data.user,
          redirect: true,
          profileId: response.data.user._id
        });
      })
      .catch(err => console.log(err));
  };

  handleLogOut = () => {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
    window.location.href = "/"
  };

  displayListing = () => {
    axios
      .get("https://damp-citadel-74040.herokuapp.com/cities")
      .then(res => {
        console.log("found listings");
        this.setState({
          cities: res.data
        });
      })
      .catch(err => {
        console.log('Error fetching and parsing data for listings', err);
      });
  }

  // id passed in from city component
  setCityId = (id) => {
    console.log("id", id);
    // we call this state cityID...
    this.setState({
      cityId: id
    })

    this.displayPosts();
  }

  displayPosts = () => {
    // use state to dynamically create cityID route, which will render new posts from the respective city
    axios.get(`https://damp-citadel-74040.herokuapp.com/posts`)
      .then((res) => {
        // filter the response and only add posts matching the cityId, which we get from above.
        const posts = [];

        res.data.filter(ele => {
          return ele.city._id === this.state.cityId;
        }).map((ele) => {
          return posts.push(ele);
        })

        this.setState({
          posts
        })
      })
      .catch(err => {
        console.log('Error displaying for posts when click on city', err);
      });
  }

  handleNewPost = event => {
    // create a new post pulling the form data from the modal and add to database
    event.preventDefault();
    axios.post("https://damp-citadel-74040.herokuapp.com/posts/createpost", {
      title: this.state.title,
      content: this.state.content,
      city: this.state.cityId,
      user: this.state.profileId
    })
      .then(res => {
        // this.setState({
        //   title: this.state.title,
        //   content: this.state.content
        // })
        console.log(res)
      })
      .catch(err => {
        console.log("Beep")
      })
  }

  render() {
    return (
      <div>
        {/* <div>{cityComponents}</div> */}
        <Header
          handleSignUp={this.handleSignUp}
          isLoggedIn={this.state.isLoggedIn}
          handleLogIn={this.handleLogIn}
          handleInput={this.handleInput}
          handleLogOut={this.handleLogOut}
          profileId={this.state.profileId || null}
        />
        <div className="body">
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                if (this.state.isLoggedIn) {
                  return <Redirect to={`/profile/${this.state.user._id}`} />;
                } else if (localStorage.token) {
                  return <Redirect to={`/listings/`} />;
                } else {
                  return (
                    <div>
                      <Landing />
                      <Copyright />
                    </div>
                  );
                }
              }}
            />
            <Route
              path="/listings"
              render={props => {
                if (localStorage.token) {
                  return (
                    <div>
                      <ListingContainer
                        cities={this.state.cities}
                        posts={this.state.posts}
                        setCityId={this.setCityId}
                        handleInput={this.handleInput}
                        handleNewPost={this.handleNewPost}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <Landing />
                      <Copyright />
                    </div>
                  );
                }
              }}
            />
            <Route
              path="/profile/:id"
              component={ProfileContainer}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
