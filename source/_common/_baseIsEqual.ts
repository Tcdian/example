import _baseGetTypeTag from './_baseGetTypeTag'
import _TYPE_TAG from '../_CONST/_TYPE_TAG'
import _isObjectLike from './_isObjectLike'
import isFunction from '../isFunction'
import isUndefined from '../isUndefined'

type PropertyName = string | number | symbol
type TIsEqualCustomizer = (value: any, other: any, indexOrKey?: PropertyName, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean | undefined

function _baseIsEqual(value: any, other: any, customizer: TIsEqualCustomizer | undefined, recordMap: Map<any, any> = new Map()): boolean | never {
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

  if (_isObjectLike(value) && _isObjectLike(other)) {
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

  //  只是简单的考虑 plain Object 的 constructor 是否相同
  if (valueType !== _TYPE_TAG.Map && valueType !== _TYPE_TAG.Set) {
    if (valueType !== _TYPE_TAG.Array) {
      if (value.constructor !== other.constructor) {
        return false
      }
    }
  
    // 使用 Map 存储，防止出现循环引用问题
    if (recordMap.has(value)) {
      return recordMap.get(value) === other && recordMap.get(other) === value
    }
    recordMap.set(value, other)
    recordMap.set(other, value)
    
    const valueKeys: string[] = Object.keys(value)
    const otherKeys: string[] = Object.keys(other)
  
    if (valueKeys.length !== otherKeys.length) {
      return false
    }
  
    const result: boolean = valueKeys.every((key) => {
      const customizerFunc: TIsEqualCustomizer | undefined = isFunction(customizer) ? customizer : void 0
      const customizerResult: boolean | undefined = isUndefined(customizerFunc) ? void 0 : customizerFunc(value, other)
      return isUndefined(customizerResult) 
        ? otherKeys.includes(key) && _baseIsEqual(value[key], other[key], customizerFunc, recordMap) 
        : !!customizerResult
    })
  
    recordMap.delete(value)
    recordMap.delete(other)
  
    return result
  }

  throw new Error(`unexpected token ${value}`)

}

export default _baseIsEqual

