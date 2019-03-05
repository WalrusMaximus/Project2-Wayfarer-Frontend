import React, { Component } from 'react';
import Header from './components/Header';
import Header2 from './components/Header2';
import Copyright from './components/Copyright'
import Landing from './components/landing/Landing'
import './App.css';
import ListingContainer from './components/listing/ListingContainer';

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
