import _baseGetTypeTag from './_baseGetTypeTag'
import _TYPE_TAG from '../_CONST/_TYPE_TAG'
import isArray from '../isArray'
import isFunction from '../isFunction'
import isUndefined from '../isUndefined'

type PropertyName = string | number | symbol
type TIsEqualCustomizer = (value: any, other: any, valueIndexOrKey?: any, otherIndexOrKey?: any, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean

function _baseIsEqual(value: any, other: any, customizer?: TIsEqualCustomizer, recordMap: Map<any, any> = new Map()): boolean {
  const valueType: string = _baseGetTypeTag(value)
  
  if (valueType !== _baseGetTypeTag(other)) {
    return false
  }
  
  if (value === other) {
    return true
  }

  // NaN
  if (value !== value) {
    return other !== other
  }

  if (valueType !== _TYPE_TAG.Function && typeof value !== 'object' && typeof other !== 'object') {
    return false
  }

  // 包装对象
  // string 和 RegExp 
  if (valueType === _TYPE_TAG.String || valueType === _TYPE_TAG.RegExp) {
    return '' + value === '' + other
  }

  // number
  if (valueType === _TYPE_TAG.Number) {
    if (+value !== +value) {
      return +other !== +other
    }
    return +value === +other
  }

  // boolean Date
  if (valueType === _TYPE_TAG.Boolean || valueType === _TYPE_TAG.Date) {
    return +value === +other
  }

  // Symbol
  if (valueType === _TYPE_TAG.Symbol) {
    return Symbol.prototype.valueOf.call(value) === Symbol.prototype.valueOf.call(other)
  }

  if (valueType !== _TYPE_TAG.Array) {
    // 借鉴 underscore， 处理来自不同的frames
    const valueConstructor = value.constructor
    const otherConstructor = other.constructor
    if (valueConstructor !== otherConstructor
      && !(isFunction(valueConstructor) 
            && valueConstructor instanceof valueConstructor 
            && isFunction(otherConstructor) 
            && otherConstructor instanceof otherConstructor
          )
      && 'constructor' in value && 'constructor' in other
    ) {
      return false
    }
  }

  // 使用 Map 存储，防止出现循环引用问题
  if (recordMap.has(value)) {
    return recordMap.get(value) === other && recordMap.get(other) === value
  }
  recordMap.set(value, other)
  recordMap.set(other, value)

  let result: boolean

  if (valueType === _TYPE_TAG.Set || valueType === _TYPE_TAG.Map) {
    const valueKeys: any[] = Array.from(value.values())
    const otherKeys: any[] = Array.from(other.values())

    if (valueKeys.length !== otherKeys.length) {
      return false
    }
    
    result = valueKeys.every((valueKey) => {
      const customizerFunc: TIsEqualCustomizer = isFunction(customizer) ? customizer : void 0
      let exitCustomizerResult: boolean
      const valueValue = valueType === _TYPE_TAG.Set ? valueKey : value.get(valueKey)
      const customizerResult: boolean = isUndefined(customizerFunc)
        ? void 0
        : otherKeys.some((otherKey) => {
          const otherValue = valueType === _TYPE_TAG.Set ? otherKey : other.get(otherKey)
          const currentkeyCustomizerResult: boolean = customizerFunc(valueValue, otherValue, valueKey, otherKey, value, other, recordMap)
          if (_baseIsEqual(valueKey, otherKey, customizer, recordMap) && !isUndefined(currentkeyCustomizerResult)) {
            exitCustomizerResult = currentkeyCustomizerResult
            return true
          }
          return false
        })
          ? exitCustomizerResult
          : void 0
      return isUndefined(customizerResult)
        ? otherKeys.some((otherKey) => {
          const otherValue = valueType === _TYPE_TAG.Set ? otherKey : other.get(otherKey)
          return _baseIsEqual(valueKey, otherKey, customizer, recordMap) && _baseIsEqual(valueValue, otherValue, customizer, recordMap)
        })
        : customizerResult
    })
  } else {
    const areArrays = isArray(value)
    const valueKeys: PropertyName[] = [...(areArrays ? Object.keys(value).map((key) => Number(key)) : Object.keys(value)), ...Object.getOwnPropertySymbols(value)]
    const otherKeys: PropertyName[] = [...(areArrays ? Object.keys(other).map((key) => Number(key)) : Object.keys(other)), ...Object.getOwnPropertySymbols(other)]

    if (valueKeys.length !== otherKeys.length) {
      return false
    }

    result = valueKeys.every((key) => {
      const customizerFunc: TIsEqualCustomizer = isFunction(customizer) ? customizer : void 0
      const customizerResult: boolean = isUndefined(customizerFunc) 
        ? void 0 
        : customizerFunc(value[key], other[key], key, key, value, other, recordMap)
      return isUndefined(customizerResult) 
        ? otherKeys.includes(key) && _baseIsEqual(value[key], other[key], customizerFunc, recordMap) 
        : customizerResult
    })
  }

  recordMap.delete(value)
  recordMap.delete(other)

  return result

}

export default _baseIsEqual
