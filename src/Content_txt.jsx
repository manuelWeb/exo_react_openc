import React from 'react'
import './Content_txt.css'

// eslint-disable-next-line react/react-in-jsx-scope
const Title = ({guesses}) => (
  <header>
    <h1 className='title_game'>Hangman play with react</h1>
    <span>{guesses}</span>
  </header>
)

export {Title}