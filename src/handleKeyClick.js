const handleKeyClick = function (letter, idx, magicProps) {
  console.clear()
  const {letters} = this.state
  letters.push(letter)
  this.setState({letters})
}

export default handleKeyClick