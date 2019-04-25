import _isNaN from 'lodash/isNaN'
import isNaN from '../source/isNaN'

test(`isNaN(NaN) => ${_isNaN(NaN)}`, () => {
    expect(isNaN(NaN)).toEqual(_isNaN(NaN))
})

test(`isNaN(new Number(NaN)) => ${_isNaN(Number(NaN))}`, () => {
    expect(isNaN(Number(NaN))).toEqual(_isNaN(Number(NaN)))
})

test(`isNaN(undefined) => ${_isNaN(undefined)}`, () => {
    expect(isNaN(undefined)).toEqual(_isNaN(undefined))
})
