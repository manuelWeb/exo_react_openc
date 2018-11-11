import React from 'react'
const aryWords = ["NOMBRE","GEANTE","CORAUX","ROULEAU","EJECTER","LIVRETS", "DIVISION","LICORNES","FOURNEAU","EMPLETTE","CLEPSYDRE","INDIGENES", "ECLATANTE","MATERIAUX","ANAGRAMME","ULTERIEURE","FACTORISER", "RACCROCHER","HIPPOPOTAME","SAUTERELLES"]
const hidden_ = '__'
let chosenWord = Math.floor(Math.random() * aryWords.length)
chosenWord = aryWords[chosenWord].split('')

console.log(`Mask.jsx -> chosenWord:`,chosenWord, `this: ${this}`)
const Mask = ({feedBack,onChange}) => {
  const mask = (
    <div>
      {chosenWord.map( (letter,idx) => (
        <span key={idx} className="letter">
          {feedBack ? letter : hidden_}
          {/* {letter ? letter : hidden_} */}
      </span>)
      )}
  </div>
  )
  return mask
}

export default Mask