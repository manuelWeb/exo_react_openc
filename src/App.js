import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard'


const allword = ["NOMBRE","GEANTE","CORAUX","ROULEAU","EJECTER","LIVRETS", "DIVISION","LICORNES","FOURNEAU","EMPLETTE","CLEPSYDRE","INDIGENES", "ECLATANTE","MATERIAUX","ANAGRAMME","ULTERIEURE","FACTORISER", "RACCROCHER","HIPPOPOTAME","SAUTERELLES"]

let chosenWord = Math.floor(Math.random() * allword.length)
chosenWord = allword[chosenWord]

// const Mask = () => {
//   const letters = chosenWord.split('');
//   console.log(letters);
//   letters.map( (letter,idx) => {
//     return (
//       <div>
//         <span className="letter" key={idx}>
//           {letter}
//         </span>
//       </div>
//     )
//   })
// }
const Mask = () => {
  const letters = chosenWord.split('');
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
console.log(chosenWord);

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <h1>Hangman react exo</h1> */}
        <Mask />
        <Keyboard />
      </div>
    );
  }
}

export default App;
