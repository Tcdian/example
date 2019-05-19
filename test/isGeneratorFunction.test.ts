import isGeneratorFunction from '../source/isGeneratorFunction'

test('isGeneratorFunction(async () => { return }) => false', () => {
  expect(isGeneratorFunction(async () => { return })).toEqual(false)
})

test('isGeneratorFunction((() => { return })) => false', () => {
  expect(isGeneratorFunction(() => { return })).toEqual(false)
})

test('isGeneratorFunction(function *test() { yield 0 }) => true', () => {
  expect(isGeneratorFunction(function *test() { yield 0 })).toEqual(true)
})
