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


const Title = () => (
  <h1 className="title_game">Hangman play with react exo</h1>
)

// function handleKeyClick (letter, idx) {
//   const {letters} = this.state
//   letters.push(letter)
//   this.setState({letters})
//   console.log(`char:${idx},
//   newlettersinstate:${letters[letters.length-1]}`);
// }

// // NE FONCTIONNE PAS THIS EST INDEFINI
// const handleKeyClick = (letter, idx) => {
//   const {letters} = this.state
//   // letters.push(letter)
//   // this.setState({letters})
//   // console.log(`char:${idx}, newlettersinstate:${letters[letters.length-1]}`);
//   console.log(`char:${idx}, newletter:${letter}`);
// }
// // AVEC UNE FUNC THIS EST GARANTI
const handleKeyClick = function (letter, idx, magicProps) {
  const {letters} = this.state
  letters.push(letter)
  this.setState({letters})
  console.log(`char:${idx},
  newlettersinstate:${letters[letters.length-1]},
  magicProps:${magicProps}`);
}

class App extends Component {
  state = {
    letters: [],
  }
  constructor(props) {
    super(props)
    // bind handleKeyClick to fx this
    this.handleKeyClick = handleKeyClick.bind(this)
  }

  render() {
    return (
      <div className="App">
        <Title />
        {/* <Mask feedBack={getFeedBack()} /> */}
        <Mask />
        <br />
        {/* <Keyboard onClick={this.handleKeyClick.bind(this)} /> */}
        {/* <Keyboard onClick={(letter) => handleKeyClick(letter)} /> */}
        <Keyboard magicProps="🌈" onClick={this.handleKeyClick} />
      </div>
    );
  }
}

export default App;
