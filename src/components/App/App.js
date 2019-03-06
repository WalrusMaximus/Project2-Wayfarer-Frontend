import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';

import axios from 'axios'
import Header from '../Header';
import SignIn from '../SignIn';
import Header2 from '../Header2';
import Copyright from '../Copyright'
import Landing from '../landing/Landing'
import ListingContainer from '../listing/ListingContainer'
import './App.css';

class App extends Component {
  state = {
    email: '',
    password: '',
    isLoggedIn: false,
    user: null
  }

  // componentDidMount() {
  //   if (localStorage.token) {
  //     axios({
  //       method: 'get',
  //       url: `http://localhost:3001/users/`,
  //       headers: { authorization: `Bearer ${localstorage.token}` }
  //     })
  //       .then(response => {
  //         this.setState({
  //           isLoggedIn: true,
  //           user: response.data.user // ????? .user?
  //         })
  //       })
  //       .catch(err => {
  //         this.setState({
  //           isLoggedIn: false
  //         })
  //         localStorage.clear()
  //       })
  //   } else {
  //     this.setState({
  //       isLoggedIn = false
  //     })
  //   }
  // }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignUp = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/users/signup',
      {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response)
        localStorage.token = response.data.signedJwt

        this.setState({
          isLoggedIn: true,
          user: response.data.user
        })
      })
      .catch(err => console.log(err))
  }

  handleLogIn = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/users/login', { // we need to be able to connect this to heroku as well
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.signedJwt
        this.setState({
          isLoggedIn: true,
          user: response.data.user
        })
      })
      .catch(err => console.log(err))
  }

  handleLogOut = () => {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }


  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} />
        <div className='body'>
          <Switch>
            <Route exact path='/'
              render={(props) => {
                return (
                  <div>
                    {/* <Landing /> */}
                    <SignIn handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                    <Copyright />
                  </div>

                )
              }}
            />
            <Route path='/city'
              render={(props) => {
                return (
                  <div>
                    <ListingContainer />
                    <Copyright />
                  </div>

                )
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
