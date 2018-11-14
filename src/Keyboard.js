import React from 'react'
import './keyboard.scss'

const Keyboard = ({onClick, magicProps, mylet, isClickedProps}) => {
  const alphachar  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  // const letterclicked = {mylet}
  let test = mylet
  console.log(
    test ?
    (test.length>0?test[test.length-1]:test[test.length])
    : false
  )
  console.log(isClickedProps);
  const kbd = (<div className="keyboard_container">
    { alphachar.map((letter, idx) => (
      <div key={idx}
        className={`key inactive`}
        onClick={() => onClick(letter,idx, magicProps)}
      >
        <span className="keysymb">{letter}</span>
      </div>
      )
    )}
  </div>)
  return kbd
}


export default  Keyboard
