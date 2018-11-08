import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard'
import { isArray } from 'util';
// import { isArray } from 'util';

const Mask = ({feedBack}) => {
  const hidden_ = '__'
  console.log(feedBack);
  const allword = ["NOMBRE","GEANTE","CORAUX","ROULEAU","EJECTER","LIVRETS", "DIVISION","LICORNES","FOURNEAU","EMPLETTE","CLEPSYDRE","INDIGENES", "ECLATANTE","MATERIAUX","ANAGRAMME","ULTERIEURE","FACTORISER", "RACCROCHER","HIPPOPOTAME","SAUTERELLES"]
  let chosenWord = Math.floor(Math.random() * allword.length)
  chosenWord = allword[chosenWord]
  const aryWord = chosenWord.split('');
  console.log(chosenWord);
  return (
    <div>
    {aryWord.map( (letter,idx) => (
      <span key={idx} className="letter">
        {feedBack ? letter : hidden_}
      </span>)
    )}
    </div>
  )
}

// const getFeedBack = () => {
//   console.log('falseee');
//   return false
// }

// const handleKeyClick = (letter, idx) => {
//   console.log(letter, idx, this);
// }

// const handleKeyClick = function (letter, idx) {
//   this.setState({ letter: letter })
//   const letter = this.state
//   // letter.push(letter)
//   console.log(`isArray(letter)${isArray(letter)}`);
//   console.log(letter, idx, this.state);
// }

const Title = () => (
  <h1 className="title_game">Hangman play with react exo</h1>
)
class App extends Component {
  state = {
    letters: [],

  }

  handleKeyClickInitChamps = (letter, idx) => {
    const {letters} = this.state
    letters.push(letter)
    this.setState({letters})
    // letters.push(letter)
    console.log(`isArray letters ${isArray(letters)} letters:${letters}`);
    // console.log(letter, idx, this.state);
  }

  render() {
    return (
      <div className="App">
        <Title />
        {/* <Mask feedBack={getFeedBack()} /> */}
        <Mask />
        <br />
        {/* <Keyboard maProp="hola"
        // onClick={(letter) => handleKeyClick(letter)}
        onClick={handleKeyClick.bind(this)}
        /> */}
        {/* <Keyboard maProp="hola" onClick={handleKeyClick.bind(this)} /> */}
        {/* <Keyboard onClick={this.handleKeyClickInitChamps.bind(this)} /> */}
        <Keyboard onClick={this.handleKeyClickInitChamps} />
      </div>
    );
  }
}

export default App;
