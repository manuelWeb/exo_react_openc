import propTypes from 'prop-types'
import React from 'react'
import './Content_txt.scss'

// eslint-disable-next-line react/react-in-jsx-scope
const Title = ({guesses}) => (
  <header>
    <h1 className='title_game'>Hangman play with react</h1>
    <span>{guesses}</span>
    <p> {guesses > 1 ? 'tentatives' : 'tentative '} </p>
  </header>
)

Title.propTypes = {
  guesses: propTypes.number.isRequired,
}

export {Title}
