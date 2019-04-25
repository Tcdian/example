import _isRegExp from 'lodash/isRegExp'
import isRegExp from '../source/isRegExp'

test(`isRegExp(/abc/) => ${_isRegExp(/abc/)}`, () => {
    expect(isRegExp(/abc/)).toEqual(_isRegExp(/abc/))
})

test(`isRegExp('/abc/') => ${_isRegExp('/abc/')}`, () => {
    expect(isRegExp('/abc/')).toEqual(_isRegExp('/abc/'))
})

test(`isRegExp(new RegExp('abc', 'g')) => ${_isRegExp(new RegExp('abc', 'g'))}`, () => {
    expect(isRegExp(new RegExp('abc', 'g'))).toEqual(_isRegExp(new RegExp('abc', 'g')))
})
