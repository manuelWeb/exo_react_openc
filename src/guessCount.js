import propTypes from 'prop-types'


export function guessCount() {
  const { guesses } = this.state;
  const newGuesses = guesses + 1;
  this.setState({ guesses: newGuesses });
}

guessCount.propTypes = {
  guesses: propTypes.string.isRequired,
  newGuesses: propTypes.string.isRequired
}