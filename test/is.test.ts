import is from '../source/is'

test('is([1, 2, 3]) => Array', () => {
  expect(is([1, 2, 3])).toEqual('Array')
})

test('is(undefined) => Undefined', () => {
  expect(is(undefined)).toEqual('Undefined')
})

test('is(() => { return }) => Function', () => {
  expect(is(() => { return })).toEqual('Function')
})

test('is(async () => { return }) => AsyncFunction', () => {
  expect(is(async () => { return })).toEqual('AsyncFunction')
})

test('is(function *test() { yield 0 }) => GeneratorFunction', () => {
  expect(is(function *test() { yield 0 })).toEqual('GeneratorFunction')
})

test('is(new Map()) => Map', () => {
  expect(is(new Map())).toEqual('Map')
})
