import PropTypes from 'prop-types'

// export function guessCount() {
const guessCount = function () {
  const { guesses } = this.state
  console.log(`guessCount{guesses}:${guesses} `)
  const newGuesses = guesses + 1
  this.setState({ guesses: newGuesses })
  return 'this.state.guesses'
}

// ne renvoi jamais d'erreur :
guessCount.propTypes = {
  guesses: PropTypes.bool.isRequired
}

export default guessCount
