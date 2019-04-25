import _isSymbol from 'lodash/isSymbol'
import isSymbol from '../source/isSymbol'

test(`isSymbol(Symbol.iterator) => ${_isSymbol(Symbol.iterator)}`, () => {
    expect(isSymbol(Symbol.iterator)).toEqual(_isSymbol(Symbol.iterator))
})

test(`isSymbol('abc') => ${_isSymbol('abc')}`, () => {
    expect(isSymbol('abc')).toEqual(_isSymbol('abc'))
})

test(`isSymbol(Symbol('abc')) => ${_isSymbol(Symbol('abc'))}`, () => {
    expect(isSymbol(Symbol('abc'))).toEqual(_isSymbol(Symbol('abc')))
})
