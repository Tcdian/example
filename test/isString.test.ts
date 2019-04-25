import _isString from 'lodash/isString'
import isString from '../source/isString'

test(`isString('abc') => ${_isString('abc')}`, () => {
    expect(isString('abc')).toEqual(_isString('abc'))
})

test(`isString(1) => ${_isString(1)}`, () => {
    expect(isString(1)).toEqual(_isString(1))
})

test(`isString(String('1')) => ${_isString(String('1'))}`, () => {
    expect(isString(String('1'))).toEqual(_isString(String('1')))
})
