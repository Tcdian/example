import _isDate from 'lodash/isDate'
import isDate from '../source/isDate'

test(`isDate(new Date()) => ${_isDate(new Date())}`, () => {
    expect(isDate(new Date())).toEqual(_isDate(new Date()))
})

test(`isDate('Mon April 23 2012') => ${_isDate('Mon April 23 2012')}`, () => {
    expect(isDate('Mon April 23 2012')).toEqual(_isDate('Mon April 23 2012'))
})

test(`isDate(new Boolean('2019-3-24')) => ${_isDate(Boolean('2019-3-24'))}`, () => {
    expect(isDate(Boolean('2019-3-24'))).toEqual(_isDate(Boolean('2019-3-24')))
})
