import React from 'react'
import './keyboard.css'


const Keyboard = () => {
  const alphachar  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const kbd = (<div className="keyboard_container">
    { alphachar.map((letter, idx) => (
      <div key={idx} className={`key`}>
        <span className="keysymb">{letter}</span>
      </div>
      )
    )}
  </div>)
  return kbd
}


export default  Keyboard
