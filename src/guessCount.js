// fx: EXPATRIER cette méthode -> mv arrow fn by anonymous fn
const guessCount = () => {
  const { guesses } = this.state
  const newGuesses = guesses + 1
  this.setState({guesses: newGuesses})
}

export default guessCount
