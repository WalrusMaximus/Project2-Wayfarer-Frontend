import React, { Component } from 'react';
import Header from './components/Header'
import Copyright from './components/Copyright'
import Landing from './components/landing/Landing'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Landing />
        <Copyright />
      </div>
    );
  }
}

export default App;
