const idxKeyClickedArray = []

const handleKeyClick = function (letter, idx, magicProps, guessCount) {
  // console.clear();
  const {letters} = this.state
  letters.push(letter)
  idxKeyClickedArray.push(idx)

  console.log(`idxKeyClickedArray: ${idxKeyClickedArray}, idx:${idx}`)

  this.setState({letters})
  // adding an index array of the pressed keys
  this.setState({idxClicked: idxKeyClickedArray})
  // incrément du compteur de tentative
  this.guessCount()
}

export default handleKeyClick
