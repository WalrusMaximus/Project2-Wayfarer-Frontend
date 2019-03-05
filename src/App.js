import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
// import ListingContainer from './components/listing/ListingContainer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Beep Boop</p>
      </div>
    );
  }
}

export default App;
