import React, { Component } from 'react'
import './App.css'
import {Title} from './Content_txt'
import Keyboard from './Keyboard'
import handleKeyClick from './handleKeyClick'
import Mask, {aryWords, Solution } from './Mask'
import { guessCount } from './guessCount';

class App extends Component {
  state = {
    letters   : [],
    shufleWord: this.generatWord(),
    guesses   : 0,
    idxClicked: []
  }
  constructor (props) {
    super(props)
    // bind {handleKeyClick, guessCount} to fx this
    this.handleKeyClick = handleKeyClick.bind(this)
    this.guessCount = guessCount.bind(this)
  }

  generatWord () {
    let shufleNum = Math.floor(Math.random() * aryWords.length)
    const shufleWord = aryWords[shufleNum].split('')
    return shufleWord
  }

  getFeedbackLetter (letter) {
    const { letters } = this.state
    const selectedKey = letters
    console.log(letter, selectedKey, selectedKey.includes(letter))
    return selectedKey.includes(letter)
  }

  getIndexKeys () {
    return this.state.idxClicked
  }

  render () {
    const { shufleWord } = this.state
    return (
      <div className='App'>
        <Title guesses={this.state.guesses} />
        <div className='mask_content'>
          {shufleWord.map((letter, idx) => (
            <Mask
              letter={letter}
              key={idx}
              getFeedbackLetter={
                this.getFeedbackLetter(letter) ? "visible" : "hidden"
              }
            />
          ))}
        </div>
        <br />
        <Solution word={shufleWord} />
        <br />
        <Keyboard onClick={this.handleKeyClick}
        isClickedProps={this.getIndexKeys()} />
      </div>
    )
  }
}

export default App
