import _isEmpty from 'lodash/isEmpty'
import isEmpty from '../source/isEmpty'

test(`isEmpty(null) => ${_isEmpty(null)}`, () => {
    expect(isEmpty(null)).toEqual(_isEmpty(null))
})

test(`isEmpty([1, 2, 3]) => ${_isEmpty([1, 2, 3])}`, () => {
    expect(isEmpty([1, 2, 3])).toEqual(_isEmpty([1, 2, 3]))
})

test(`isEmpty({ a: 1 }) => ${_isEmpty({ a: 1 })}`, () => {
    expect(isEmpty({ a: 1 })).toEqual(_isEmpty({ a: 1 }))
})

test(`isEmpty(new Map()) => ${_isEmpty(new Set())}`, () => {
  expect(isEmpty(new Set())).toEqual(_isEmpty(new Set()))
})

test(`isEmpty(new Map()) => ${_isEmpty(new Map())}`, () => {
  expect(isEmpty(new Map())).toEqual(_isEmpty(new Map()))
})
