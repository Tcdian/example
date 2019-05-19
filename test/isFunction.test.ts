import _isFunction from 'lodash/isFunction'
import isFunction from '../source/isFunction'

test(`isFunction(() => { return }) => ${_isFunction(() => { return })}`, () => {
  expect(isFunction(() => { return })).toEqual(_isFunction(() => { return }))
})

test(`isFunction(/abc/) => ${_isFunction(/abc/)}`, () => {
  expect(isFunction(/abc/)).toEqual(_isFunction(/abc/))
})

test(`isFunction(async () => { return }) => ${_isFunction(async () => { return })}`, () => {
  expect(isFunction(async () => { return })).toEqual(_isFunction(async () => { return }))
})

test(`isFunction(function *test() { yield 0 }) => ${_isFunction(function *test() { yield 0 })}`, () => {
  expect(isFunction(function *test() { yield 0 })).toEqual(_isFunction(function *test() { yield 0 }))
})
