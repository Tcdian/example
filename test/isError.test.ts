import _isError from 'lodash/isError'
import isError from '../source/isError'

test(`isError(new Error('error')) => ${_isError(new Error('error'))}`, () => {
  expect(isError(new Error('error'))).toEqual(_isError(new Error('error')))
})

test(`isError(Error) => ${_isError(Error)}`, () => {
  expect(isError(Error)).toEqual(_isError(Error))
})

