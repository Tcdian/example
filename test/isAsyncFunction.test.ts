import isAsyncFunction from '../source/isAsyncFunction'

test('isAsyncFunction(async () => { return }) => true', () => {
  expect(isAsyncFunction(async () => { return })).toEqual(true)
})

test('isAsyncFunction((() => { return })) => false', () => {
  expect(isAsyncFunction(() => { return })).toEqual(false)
})

test('isAsyncFunction(function *test() { yield 0 }) => false', () => {
  expect(isAsyncFunction(function *test() { yield 0 })).toEqual(false)
})
