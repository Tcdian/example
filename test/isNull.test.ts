import _isNull from 'lodash/isNull'
import isNull from '../source/isNull'

test(`isNull(null) => ${_isNull(null)}`, () => {
    expect(isNull(null)).toEqual(_isNull(null))
})

test(`isNull(void 0) => ${_isNull(void 0)}`, () => {
    expect(isNull(void 0)).toEqual(_isNull(void 0))
})

test(`isNull('null') => ${_isNull('null')}`, () => {
    expect(isNull('null')).toEqual(_isNull('null'))
})
