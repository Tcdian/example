# is
## 开始使用
> 安装
```
npm i @tcdian/is
```
> 使用

- 仅支持ESModules方式引入

```
// 全体引入， 然后你可以使用is上的function

import is from '@tcdian/is'

// Example

is.isFunction(Array.isArray)
// => true
```
```
// 按需引入， 你可以仅引入你需要使用的函数

import isFunction from '@tcdian/is/isFunction'

// Example

isFunction(Array.isArray)
// => true
```

## 文档

> __Type__
- isArray(value)
  * Description

    Checks if value is classified as an Array object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is an array, else false.
  * Example
    ```
    isArray([1, 2, 3])
    // => true

    isArray(document.body.children)
    // => false

    isArray('abc')
    // => false
    ```
- isBoolean(value)
  * Description

    Checks if value is classified as a boolean primitive or object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is a boolean, else false.
  * Example
    ```
    isBoolean(false)
    // => true

    isBoolean(null)
    // => false
    ```
- isDate(value)
  * Description

    Checks if value is classified as a Date object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is a date object, else false.
  * Example
    ```
    isDate(new Date)
    // => true

    isDate('Mon April 23 2012')
    // => false
    ```
- isError(value)
  * Description

    Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is an error object, else false.
  * Example
    ```
    isError(new Error)
    // => true

    isError(Error)
    // => false
    ```
- isFunction(value)
  * Description

    Checks if value is classified as a Function object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is a function, else false.
  * Example
    ```
    isFunction(async () => {})
    // => true

    isFunction(/abc/)
    // => false

    isFunction(function*() {});
    // => true
    ```
- isMap(value)
  * Description

    Checks if value is classified as a Map object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is a map, else false.
  * Example
    ```
    isMap(new Map)
    // => true

    isMap(new WeakMap)
    // => false
    ```
- isNaN(value)
  * Description

    Checks if value is NaN.
  * Arguments

    value (*): The value to check.
  * Returns

     (boolean): Returns true if value is NaN, else false.
  * Example
    ```
    isNaN(NaN)
    // => true
    
    isNaN(new Number(NaN))
    // => true
    
    isNaN(undefined)
    // => false
    ```
- isNil(value)
  * Description

    Checks if value is null or undefined.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is nullish, else false.
  * Example
    ```
    isNil(null)
    // => true

    isNil(void 0)
    // => true

    isNil(NaN)
    // => false
    ```
- isNull(value)
  * Description

    Checks if value is null.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is null, else false.
  * Example
    ```
    isNull(null)
    // => true

    isNull(void 0)
    // => false

    isNull('null')
    // => false
    ```
- isNumber(value)
  * Description

    Checks if value is classified as a Number primitive or object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is a number, else false.
  * Example
    ```
    isNumber(3)
    // => true
    
    isNumber(Number.MIN_VALUE);
    // => true
    
    isNumber(Infinity)
    // => true
    
    isNumber('3')
    // => false
    ```
- isObject(value)
  * Description

    Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is an object, else false.
  * Example
    ```
    _isObject({})
    // => true

    _isObject([1, 2, 3])
    // => true

    _isObject(Object.create(null))
    // => true

    _isObject(null)
    // => false
    ```
- isRegExp(value)
  * Description

    Checks if value is classified as a RegExp object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is a regexp, else false.
  * Example
    ```
    isRegExp(/abc/)
    // => true
 
    isRegExp('/abc/')
    // => false
    ```
- isSet(value)
  * Description

    Checks if value is classified as a Set object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is a set, else false.
  * Example
    ```
    isSet(new Set)
    // => true
 
    isSet(new WeakSet)
    // => false
    ```
- isString(value)
  * Description

    Checks if value is classified as a String primitive or object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is a string, else false.
  * Example
    ```
    isString('abc')
    // => true
 
    isString(1)
    // => false
    ```
- isSymbol(value)
  * Description

    Checks if value is classified as a Symbol primitive or object.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is a symbol, else false.
  * Example
    ```
    isSymbol(Symbol(0))
    // => true

    isSymbol(Symbol.iterator)
    // => true
 
    isSymbol('abc')
    // => false
    ```
- isUndefined(value)
  * Description

    Checks if value is undefined.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is undefined, else false.
  * Example
    ```
    isUndefined(void 0)
    // => true

    isUndefined(null)
    // => false

    isUndefined('undefined')
    // => false
    ```

> __Others__
- isEmpty(value)
  * Description

    Checks if value is an empty string, array, object, map, or set.
  * Arguments

    value (*): The value to check.
  * Returns

    (boolean): Returns true if value is empty, else false.
  * Example
    ```
    isEmpty(null)
    // => true

    isEmpty(new Set())
    // => true
    
    isEmpty([1, 2, 3])
    // => false
    
    isEmpty({ 'a': 1 })
    // => false
    ```
- isEqual(value, other, [customizer])
  * Description

    Performs a deep comparison between two values to determine if they are equivalent.
  * Arguments

    value (*): The value to compare.
    other (*): The other value to compare.
    [customizer] (Function): The function to customize comparisons.
  * Returns

    (boolean): Returns true if the values are equivalent, else false.
  * Example
    ```
    const object = { 'a': 1 }
    const other = { 'a': 1 }
 
    isEqual(object, other)
    => true
 
    object === other
    // => false

    // with customizer
    function isGreeting(value) {
      return /^h(?:i|ello)$/.test(value)
    }
 
    function customizer(objValue, othValue) {
      if (isGreeting(objValue) && isGreeting(othValue)) {
        return true
      }
    }
    
    const array = ['hello', 'goodbye']
    const other = ['hi', 'goodbye']
    
    isEqual(array, other, customizer)
    // => true
    ```