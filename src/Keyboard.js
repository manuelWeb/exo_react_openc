import React from 'react'
import propTypes from 'prop-types'
import './keyboard.scss'

const Keyboard = ({onClick, magicProps, isClickedProps}) => {
  const alphachar  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  console.log( '___'+isClickedProps );
  const kbd = (<div className="keyboard_container">
    { alphachar.map((letter, idx) =>
      (
        <div key={idx}
          className={
            `key ${isClickedProps.includes(idx) ? 'active' : 'inactive'}`
          }
          onClick={
            () => onClick(letter,idx, magicProps)
          }
        >
          <span className="keysymb">{letter}</span>
        </div>
      )
    )}
  </div>)
  return kbd
}

Keyboard.propTypes = {
  onClick: propTypes.func.isRequired
}


export default  Keyboard
