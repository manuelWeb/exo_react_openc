import React from 'react'
import PropTypes from 'prop-types'
import './keyboard.scss'

const Keyboard = ({onClick, magicProps, isClickedProps}) => {
  // const alphachar  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const alphachar  = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
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
  onClick: PropTypes.func.isRequired
}


export default  Keyboard
