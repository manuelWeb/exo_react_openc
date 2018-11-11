import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard'

const aryWords = ["NOMBRE","GEANTE","CORAUX","ROULEAU","EJECTER","LIVRETS", "DIVISION","LICORNES","FOURNEAU","EMPLETTE","CLEPSYDRE","INDIGENES", "ECLATANTE","MATERIAUX","ANAGRAMME","ULTERIEURE","FACTORISER", "RACCROCHER","HIPPOPOTAME","SAUTERELLES"]
const hidden_ = '__'

const Title = () => (
  <h1 className="title_game">Hangman play with react exo</h1>
)

const handleKeyClick = function (letter, idx, magicProps) {
  const {letters} = this.state
  letters.push(letter)
  this.setState({letters})
  console.log(`char_idx:${idx},
  newlettersinstate:${letters[letters.length-1]},
  magicProps:${magicProps}`);
}

class App extends Component {
  state = {
    letters: [],
    shufleWord: this.generatWord()
  }
  constructor(props) {
    super(props)
    // bind handleKeyClick to fx this
    this.handleKeyClick = handleKeyClick.bind(this)

  }
  generatWord() {
    let shufleWord = Math.floor(Math.random() * aryWords.length)
    shufleWord = aryWords[shufleWord].split('')
    return shufleWord
  }

  feedBack(letter){
    const shufleWord = this.state.shufleWord
    const letters = this.state.letters
    return false
  }

  render() {
    return (
      <div className="App">
        <Title />
        <div>
            {this.state.shufleWord.map( (letter,idx) => (
              <span key={idx} className="letter">
                {this.feedBack(letter) ? letter : hidden_}
            </span>)
            )}
        </div>
        <br />
        <Keyboard magicProps="🌈" onClick={this.handleKeyClick} />
      </div>
    );
  }
}

export default App;
