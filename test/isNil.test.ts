import _isNil from 'lodash/isNil'
import isNil from '../source/isNil'

test(`isNil(null) => ${_isNil(null)}`, () => {
    expect(isNil(null)).toEqual(_isNil(null))
})

test(`isNil(void 0) => ${_isNil(void 0)}`, () => {
    expect(isNil(void 0)).toEqual(_isNil(void 0))
})

test(`isNil('null') => ${_isNil('null')}`, () => {
    expect(isNil('null')).toEqual(_isNil('null'))
})

test(`isNil(NaN) => ${_isNil(NaN)}`, () => {
    expect(isNil(NaN)).toEqual(_isNil(NaN))
})
