import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is a CDS App made by React(no backend)</h2>
        </div>
        <p className="App-intro">
          You see amazing effects here!
        </p>
      </div>
    );
  }
}

export default App;
