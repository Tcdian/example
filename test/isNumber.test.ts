import _isNumber from 'lodash/isNumber'
import isNumber from '../source/isNumber'

test(`isNumber(3) => ${_isNumber(3)}`, () => {
    expect(isNumber(3)).toEqual(_isNumber(3))
})

test(`isNumber(Number.MIN_VALUE) => ${_isNumber(Number.MIN_VALUE)}`, () => {
    expect(isNumber(Number.MIN_VALUE)).toEqual(_isNumber(Number.MIN_VALUE))
})

test(`isNumber(Infinity) => ${_isNumber(Infinity)}`, () => {
    expect(isNumber(Infinity)).toEqual(_isNumber(Infinity))
})

test(`isNumber('3') => ${_isNumber('3')}`, () => {
    expect(isNumber('3')).toEqual(_isNumber('3'))
})
