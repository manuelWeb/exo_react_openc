import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard'


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hangman react exo</h1>
        <Keyboard />
      </div>
    );
  }
}

export default App;
