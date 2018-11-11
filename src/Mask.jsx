import React from 'react'
const hidden_ = '__'
// console.log(`Mask.jsx -> chosenWord:`,chosenWord, `this: ${this}`)
const Mask = ({letter,idx,getFeedbackLetter}) => (
  <div className={`${getFeedbackLetter}`}>
    <span className="letter" key={idx}>
      {getFeedbackLetter === "visible" ? letter : hidden_}
    </span>
  </div>
)

export const Solution = ({word}) => (
  <div>
    {word.map((letter,idx) => (
      <span className="letter" key={idx}>{letter}</span>
    ))}
  </div>
)

export default Mask