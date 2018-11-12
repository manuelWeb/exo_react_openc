import React from 'react'
const hidden_ = '__'
const aryWords = [ 'NOMBRE', 'GEANTE', 'CORAUX', 'ROULEAU', 'EJECTER', 'LIVRETS', 'DIVISION', 'LICORNES', 'FOURNEAU', 'EMPLETTE', 'CLEPSYDRE', 'INDIGENES', 'ECLATANTE', 'MATERIAUX', 'ANAGRAMME', 'ULTERIEURE', 'FACTORISER', 'RACCROCHER', 'HIPPOPOTAME', 'SAUTERELLES' ]

const Mask = ({ letter, idx, getFeedbackLetter }) => {
  // console.log( `Mask.jsx -> getFeedbackLetter:${getFeedbackLetter} ` )
  return (
    <div className={`${getFeedbackLetter}`}>
      <span className='letter' key={idx}>
        {getFeedbackLetter === 'visible' ? letter : hidden_}
      </span>
    </div>
  )
}

const Solution = ({ word }) => (
  <div>
    {word.map((letter, idx) => (
      <span className='letter' key={idx}>{`${letter} `}</span>
    ))}
  </div>
)

export { Solution, aryWords }

export default Mask
