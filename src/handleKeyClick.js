const handleKeyClick = function (letter, idx, magicProps) {
  console.clear()
  const {letters} = this.state
  letters.push(letter)
  this.setState({letters})
  // incrément du compteur de tentative
  this.guessCount({letter})
}

export default handleKeyClick