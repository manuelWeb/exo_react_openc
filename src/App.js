import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard'

const Mask = () => {
  const allword = ["NOMBRE","GEANTE","CORAUX","ROULEAU","EJECTER","LIVRETS", "DIVISION","LICORNES","FOURNEAU","EMPLETTE","CLEPSYDRE","INDIGENES", "ECLATANTE","MATERIAUX","ANAGRAMME","ULTERIEURE","FACTORISER", "RACCROCHER","HIPPOPOTAME","SAUTERELLES"]
  let chosenWord = Math.floor(Math.random() * allword.length)
  chosenWord = allword[chosenWord]
  const letters = chosenWord.split('');
  console.log(chosenWord);
  return (
    <div>
    {letters.map( (letter,idx) => (
      <span key={idx} className="letter">
        {letter}
      </span>)
    )}
    </div>
  )
}

const Title = () => (
  <h1 className="title_game">Hangman play with react exo</h1>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Mask />
        <br />
        <Keyboard />
      </div>
    );
  }
}

export default App;
