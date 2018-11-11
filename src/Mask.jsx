import React from 'react'

// console.log(`Mask.jsx -> chosenWord:`,chosenWord, `this: ${this}`)
const Mask = ({letter,idx}) => (
  <div>
    <span className="letter" key={idx}>{letter}</span>
  </div>
)

export default Mask