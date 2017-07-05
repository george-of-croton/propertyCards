import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import _ from 'lodash'

import utils from './utils/utils.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('correctly sets State when an item is added to saved',  ()=> {
  var testData = {
    results: [
      {result1: "result1"},
      {result2: "result2"},
      {result3: "result3"}
    ],
    saved: [
      {saved1: "saved1"}
    ]
  }
  var result = utils.addToSavedArray(testData, 0)
  expect(result.results.length).toEqual(2)
  expect(result.saved.length).toEqual(2)
  expect(typeof(result)).toEqual("object")
})

test('correctly sets State when an item is removed from saved',  ()=> {
  var testData = {
    results: [
      {result1: "result1"},
      {result2: "result2"},
      {result3: "result3"}
    ],
    saved: [
      {saved1: "saved1"}
    ]
  }
  var result = utils.removeFromSavedArray(testData, 0)
  expect(result.saved.length).toEqual(0)
  expect(typeof(result)).toEqual("object")
})
