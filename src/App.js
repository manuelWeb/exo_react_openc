import React, { Component } from 'react'
import './App.css'
import Keyboard from './Keyboard'
import handleKeyClick from './handleKeyClick'
import Mask from './Mask'

const aryWords = [
  'NOMBRE',
  'GEANTE',
  'CORAUX',
  'ROULEAU',
  'EJECTER',
  'LIVRETS',
  'DIVISION',
  'LICORNES',
  'FOURNEAU',
  'EMPLETTE',
  'CLEPSYDRE',
  'INDIGENES',
  'ECLATANTE',
  'MATERIAUX',
  'ANAGRAMME',
  'ULTERIEURE',
  'FACTORISER',
  'RACCROCHER',
  'HIPPOPOTAME',
  'SAUTERELLES'
]
const hidden_ = '__'

const Title = () => <h1 className='title_game'>Hangman play with react exo</h1>

class App extends Component {
  state = {
    letters: ['un'],
    shufleWord: this.generatWord()
  }
  constructor (props) {
    super(props)
    // bind handleKeyClick to fx this
    this.handleKeyClick = handleKeyClick.bind(this)
  }

  generatWord () {
    let shufleWord = Math.floor(Math.random() * aryWords.length)
    shufleWord = aryWords[shufleWord].split('')
    return shufleWord
  }

  getFeedbackLetter () {
    const { shufleWord, letters } = this.state
    console.log(letters[letters.length-1])
    const selectedKey = letters[letters.length-1]
    console.log(shufleWord.includes(selectedKey))
    return shufleWord.includes(selectedKey)
  }

  render () {
    const { shufleWord } = this.state
    return (
      <div className='App'>
        <Title />
        <div className='mask_content'>
          {shufleWord.map((letter, idx) => (
            <Mask
              letter={letter}
              key={idx}
              getFeedbackLetter={this.getFeedbackLetter(letter)}
            />
          ))}
        </div>
        <br />
        <Keyboard magicProps='🌈' onClick={this.handleKeyClick} />
      </div>
    )
  }
}

export default App
