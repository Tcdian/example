import _isObject from 'lodash/isObject'
import isObject from '../source/isObject'

test(`isObject({}) => ${_isObject({})}`, () => {
    expect(isObject({})).toEqual(_isObject({}))
})

test(`isObject([1, 2, 3]) => ${_isObject([1, 2, 3])}`, () => {
    expect(isObject([1, 2, 3])).toEqual(_isObject([1, 2, 3]))
})

test(`isObject(Object.create(null)) => ${_isObject(Object.create(null))}`, () => {
    expect(isObject(Object.create(null))).toEqual(_isObject(Object.create(null)))
})

test(`isObject(null) => ${_isObject(null)}`, () => {
    expect(isObject(null)).toEqual(_isObject(null))
})
