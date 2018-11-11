const handleKeyClick = function (letter, idx, magicProps) {
  const {letters} = this.state
  letters.push(letter)
  this.setState({letters})
  // console.log(`char_idx:${idx},
  // newlettersinstate:${letters[letters.length-1]},
  // magicProps:${magicProps}`)
}

export default handleKeyClick