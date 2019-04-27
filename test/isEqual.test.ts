import _isEqualWith from 'lodash/isEqualWith'
import isEqual from '../source/isEqual'

test(`isEqual(null, void 0) => ${_isEqualWith(null, void 0)}`, () => {
  expect(isEqual(null, void 0)).toEqual(_isEqualWith(null, void 0))
})

test(`isEqual(null, Object(null)) => ${_isEqualWith(null, Object(null))}`, () => {
  expect(isEqual(null, Object(null))).toEqual(_isEqualWith(null, Object(null)))
})

test(`isEqual(['a', 'b', 'c'], ['a']) => ${_isEqualWith(['a', 'b', 'c'], ['a'])}`, () => {
  expect(isEqual(['a', 'b', 'c'], ['a'])).toEqual(_isEqualWith(['a', 'b', 'c'], ['a']))
})

test(`isEqual({a: 1}, {a: 1}) => ${_isEqualWith({a: 1}, {a: 1})}`, () => {
    expect(isEqual({a: 1}, {a: 1})).toEqual(_isEqualWith({a: 1}, {a: 1}))
})

test(`isEqual(['a'], {1: 'a'}) => ${_isEqualWith(['a'], {1: 'a'})}`, () => {
  expect(isEqual(['a'], {1: 'a'})).toEqual(_isEqualWith(['a'], {1: 'a'}))
})

test(`isEqual(new Set(), new Set()) => ${_isEqualWith(new Set(), new Set())}`, () => {
    expect(isEqual(new Set(), new Set())).toEqual(_isEqualWith(new Set(), new Set()))
})

test(`isEqual(new Map(), new Map()) => ${_isEqualWith(new Map(), new Map())}`, () => {
    expect(isEqual(new Map(), new Map())).toEqual(_isEqualWith(new Map(), new Map()))
})

const aMap: Map<object, object> = new Map()
aMap.set({ a: 1}, { a: 1})
const bMap: Map<object, object> = new Map()
bMap.set({ a: 1}, { a: 1})
const cSet: Set<object> = new Set()
cSet.add({a: 1})

test(`isEqual(aMap, bMap) => ${_isEqualWith(aMap, bMap)}`, () => {
  expect(isEqual(aMap, bMap)).toEqual(_isEqualWith(aMap, bMap))
})

test(`isEqual(aMap, cSet) => ${_isEqualWith(aMap, cSet)}`, () => {
  expect(isEqual(aMap, cSet)).toEqual(_isEqualWith(aMap, cSet))
})

function isGreeting(value: string): boolean {
  return /^h(?:i|ello)$/.test(value)
}

function customizer(objValue: string, othValue: string): boolean | undefined {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true
  }
  return void 0
}

const array: string[] = ['hello', 'goodbye']
const other: string[] = ['hi', 'goodbye']

test(`isEqual(array, other, customizer) => ${_isEqualWith(array, other, customizer)}`, () => {
  expect(isEqual(array, other, customizer)).toEqual(_isEqualWith(array, other, customizer))
})

interface IACycle {
  aCycle?: IACycle
}

const aCycle: IACycle = {}
aCycle.aCycle = aCycle

const bCycle: IACycle = {}
bCycle.aCycle = aCycle

test(`isEqual(aCycle, bCycle) => ${_isEqualWith(aCycle, bCycle)}`, () => {
  expect(isEqual(aCycle, bCycle)).toEqual(_isEqualWith(aCycle, bCycle))
})

const aSetCycle: Set<any> = new Set()
aSetCycle.add(aSetCycle)

const bSetCycle: Set<any> = new Set()
bSetCycle.add(aSetCycle)

test(`isEqual(aSetCycle, bSetCycle) => ${_isEqualWith(aSetCycle, bSetCycle)}`, () => {
  expect(isEqual(aSetCycle, bSetCycle)).toEqual(_isEqualWith(aSetCycle, bSetCycle))
})

const aMapCycle: Map<any, any> = new Map()
aMapCycle.set(aMapCycle, aMapCycle)

const bMapCycle: Map<any, any> = new Map()
bMapCycle.set(aMapCycle, aMapCycle)

test(`isEqual(aMapCycle, bMapCycle) => ${_isEqualWith(aMapCycle, bMapCycle)}`, () => {
  expect(isEqual(aMapCycle, bMapCycle)).toEqual(_isEqualWith(aMapCycle, bMapCycle))
})
