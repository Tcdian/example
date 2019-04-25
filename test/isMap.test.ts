import _isMap from 'lodash/isMap'
import isMap from '../source/isMap'

test(`isMap(new Map()) => ${_isMap(new Map())}`, () => {
    expect(isMap(new Map())).toEqual(_isMap(new Map()))
});

test(`isMap(new WeakMap()) => ${_isMap(new WeakMap())}`, () => {
    expect(isMap(new WeakMap())).toEqual(_isMap(new WeakMap()))
})

test(`isMap({}) => ${_isMap({})}`, () => {
    expect(isMap({})).toEqual(_isMap({}))
})
