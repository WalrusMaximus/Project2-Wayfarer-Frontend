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
    user: {
      _id: "5c816fecf875f8000ce1e10a",
      name: "Joseph",
      email: "joseph@gmail.com",
      userName: "joe8",
      avatarUrl: "https://ichef.bbci.co.uk/news/660/cpsprodpb/EF92/production/_103503316_canetoadfrontal.jpg",
    },
    redirect: false,
    cities: [],
    posts: [],
    profileId: null,
    cityId: '5c819cce15c78e000cb26497',
    title: '',
    content: '',
    city: [{
      _id: "5c819cce15c78e000cb26497",
      name: "San Francisco",
      country: "United States of America",
      imageUrl: "https://images.unsplash.com/photo-1519227355453-8f982e425321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80"
    }],
    userPost: '5c819cce15c78e000cb26497',
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
            user: response.data.user,
          });
        })
        .catch(() => {
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

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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

    axios
      .post("https://damp-citadel-74040.herokuapp.com/users/login", {
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

        console.log(this.state.user);
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
    // console.log("id", id);
    // we call this state cityID...
    this.setState({
      cityId: id
    })
    console.log(this.state.cityId)

    this.displayPosts();
    this.displayCity();
    this.displayListing();

    console.log(this.state.city);
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

  displayCity = () => {
    // use state to dynamically create cityID route, which will render new posts from the respective city
    axios.get(`https://damp-citadel-74040.herokuapp.com/cities`)
      .then((res) => {
        // filter the response and only add posts matching the cityId, which we get from above.
        const city = [];

        res.data.filter(ele => {
          return ele._id === this.state.cityId;
        }).map((ele) => {
          return city.push(ele);
        })

        this.setState({
          city
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
    const displayContent = (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
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
          exact path="/listings"
          render={() => {
            if (localStorage.token) {
              return (
                <div>
                  <ListingContainer
                    city={this.state.city}
                    cities={this.state.cities}
                    posts={this.state.posts}
                    setCityId={this.setCityId}
                    handleInput={this.handleInput}
                    handleNewPost={this.handleNewPost}
                    cityId={this.state.cityId}
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
          render={
            () => {
              return (
                <ProfileContainer user={this.state.user} />
              )
            }
          }
        />
        {/* <Route
              path="/listings/:id"
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
            /> */}
      </Switch>
    )

    return (
      <div>
        <Header
          handleSignUp={this.handleSignUp}
          isLoggedIn={this.state.isLoggedIn}
          handleLogIn={this.handleLogIn}
          handleInput={this.handleInput}
          handleLogOut={this.handleLogOut}
          profileId={this.state.profileId || null}
        />
        <div className="body">
          {displayContent}
        </div>
      </div>
    );
  }
}

export default App;
