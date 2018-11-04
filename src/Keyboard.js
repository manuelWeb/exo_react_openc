import React from 'react'
import './keyboard.css'

let alphachar  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const Keyboard = () => (
  <div className="keyboard_container">
    { alphachar.map((letter, idx) => (
      <div key={idx}>
        <span className="keysymb">{letter}</span>
      </div>
      )
    )}
  </div>
)

export default  Keyboard