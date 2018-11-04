import React from 'react'
import './keyboard.css'

let alphachar  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const Keyboard = () => {
  const keyboard = alphachar.map((letter, idx) => {
    return (
      <div key={idx}>
        <span className="keysymb">{letter}</span>
      </div>
    )
  })
  return keyboard

}

export default  Keyboard