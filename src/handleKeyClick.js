const handleKeyClick = function (letter, idx, magicProps) {
  console.clear()
  console.log(idx);
  const {letters} = this.state
  letters.push(letter)
  this.setState({letters})
  this.setState({idxClicked: idx})
  // incrément du compteur de tentative
  this.guessCount({letter})
}

export default handleKeyClick