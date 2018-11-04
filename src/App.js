import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard'

const alphachar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class App extends Component {
  chars = this.cutAlpah()
  cutAlpah () {
    const result = alphachar.split('')
    console.log(result);
    return result
  }
  render() {
    return (
      <div className="App">
        <h1>Hangman react exo</h1>
        {this.chars.map((char,idx)=>(
          <Keyboard key={idx} keychar={char} />
        ))}
      </div>
    );
  }
}

export default App;
