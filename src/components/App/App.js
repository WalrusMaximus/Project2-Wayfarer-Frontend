import React, { Component } from 'react';
import Header from '../Header';
import Header2 from '../Header2';
import Copyright from '../Copyright'
import Landing from '../landing/Landing'
import './App.css';
import ListingContainer from '../listing/ListingContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header />
        <ListingContainer /> */}
        <Header2 />
        <Landing />
        <Copyright />
      </div>
    );
  }
}

export default App;
