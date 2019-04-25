import _isArray from 'lodash/isArray'
import isArray from '../source/isArray'

test(`isArray([1, 2, 3]) => ${_isArray([1, 2, 3])}`, () => {
  expect(isArray([1, 2, 3])).toEqual(_isArray([1, 2, 3]))
})

test(`isArray(new Set()) => ${_isArray(new Set())}`, () => {
  expect(isArray(new Set())).toEqual(_isArray(new Set()))
})

test(`isArray('abc') => ${_isArray('abc')}`, () => {
  expect(isArray('abc')).toEqual(_isArray('abc'))
})
