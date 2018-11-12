import React, { Component } from 'react'
import './App.css'
import Keyboard from './Keyboard'
import handleKeyClick from './handleKeyClick'
import Mask from './Mask'
import {Solution} from './Mask'

const aryWords = [ 'NOMBRE', 'GEANTE', 'CORAUX', 'ROULEAU', 'EJECTER', 'LIVRETS', 'DIVISION', 'LICORNES', 'FOURNEAU', 'EMPLETTE', 'CLEPSYDRE', 'INDIGENES', 'ECLATANTE', 'MATERIAUX', 'ANAGRAMME', 'ULTERIEURE', 'FACTORISER', 'RACCROCHER', 'HIPPOPOTAME', 'SAUTERELLES' ]

const Title = () => <h1 className='title_game'>Hangman play with react exo</h1>

class App extends Component {
  state = {
    letters: ['L','I'],
    shufleWord: this.generatWord()
  }
  constructor (props) {
    super(props)
    // bind handleKeyClick to fx this
    this.handleKeyClick = handleKeyClick.bind(this)
  }

  generatWord () {
    let shufleNum = Math.floor(Math.random() * aryWords.length)
    const shufleWord = aryWords[shufleNum].split('')
    return shufleWord
  }

  getFeedbackLetter (letter) {
    const { shufleWord, letters } = this.state
    // const selectedKey = [...letters]
    // const selectedKey = letters[letters.length-1]
    const selectedKey = letters

    console.log(letter)
    console.log(selectedKey)
    console.log(selectedKey.includes(letter))

    // return letter.includes(selectedKey)
    return selectedKey.includes(letter)
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
              getFeedbackLetter={this.getFeedbackLetter(letter) ? "visible" : "hidden"}
            />
          ))}
        </div>
        <br />
        <Solution word={shufleWord} />
        <br />
        <Keyboard magicProps='🌈' onClick={this.handleKeyClick} />
      </div>
    )
  }
}

export default App
