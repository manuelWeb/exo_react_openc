// import PropTypes from 'prop-types'
import { isArray } from 'util';

const idxKeyClickedArray = []

const handleKeyClick = function ( letter, idx ) {
  // console.clear();
  const {letters} = this.state
  letters.push(letter)
  idxKeyClickedArray.push(idx)

  console.log(`idxKeyClickedArray: ${idxKeyClickedArray} isArrAy: ${isArray(idxKeyClickedArray)}, idx:${idx}`)

  this.setState({letters})
  // adding an index array of the pressed keys
  this.setState({idxClicked: idxKeyClickedArray})
  // incrément du compteur de tentative
  this.guessCount()
}
// ne retourn pas d'erreur :
// handleKeyClick.propTypes = {
//   idxKeyClickedArray: PropTypes.number.isRequired,
//   letter: PropTypes.number.isRequired,
//   letters: PropTypes.array.isRequired,
//   idx: PropTypes.string.isRequired,
// }

export default handleKeyClick
