import _ from 'lodash'

function removeFromSavedArray(prevState, index) {
  console.log(prevState)
  var nextState = prevState
  _.pullAt(nextState.saved, index)
  return({
    saved: nextState.saved
  })
}


export default removeFromSavedArray
