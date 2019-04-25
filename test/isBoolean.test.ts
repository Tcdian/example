import _isBoolean from 'lodash/isBoolean'
import isBoolean from '../source/isBoolean'

test(`isBoolean(false) => ${_isBoolean(false)}`, () => {
    expect(isBoolean(false)).toEqual(_isBoolean(false))
})

test(`isBoolean(null) => ${_isBoolean(null)}`, () => {
    expect(isBoolean(null)).toEqual(_isBoolean(null))
})

test(`isBoolean(new Boolean(true)) => ${_isBoolean(Boolean(true))}`, () => {
    expect(isBoolean(Boolean(true))).toEqual(_isBoolean(Boolean(true)))
})
