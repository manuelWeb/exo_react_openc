import propTypes from 'prop-types'


export function guessCount() {
  const { guesses } = this.state;
  const newGuesses = guesses + 1;
  this.setState({ guesses: newGuesses });
}

// newGuesses: propTypes.number.isRequired,
guessCount.PropTypes = {
  guesses: propTypes.array.isRequired,
  newGuesses: propTypes.arrayOf(propTypes.string).isRequired,
}
