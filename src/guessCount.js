export function guessCount() {
  const { guesses } = this.state;
  const newGuesses = guesses + 1;
  this.setState({ guesses: newGuesses });
}