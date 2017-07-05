import _ from 'lodash'

function addToSavedArray(prevState, index) {
  var nextState = prevState
  var selected = _.pullAt(nextState.results, index)[0]
  nextState.saved.push(selected)
  return({
    results: nextState.results,
    saved: nextState.saved
  })
}

export default addToSavedArray
