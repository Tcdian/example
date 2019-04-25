import _isSet from 'lodash/isSet'
import isSet from '../source/isSet'

test(`isSet(new Set()) => ${_isSet(new Set())}`, () => {
    expect(isSet(new Set())).toEqual(_isSet(new Set()))
})

test(`isSet(new WeakSet()) => ${_isSet(new WeakSet())}`, () => {
    expect(isSet(new WeakSet())).toEqual(_isSet(new WeakSet()))
})

test(`isSet({}) => ${_isSet({})}`, () => {
    expect(isSet({})).toEqual(_isSet({}))
})
