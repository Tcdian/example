import _baseGetTypeTag from './_baseGetTypeTag'
import _TYPE_TAG from '../_CONST/_TYPE_TAG'
import _isObjectLike from './_isObjectLike'

function _baseIsEqual(value: any, other: any, customizer, recordMap = new Map()): boolean {
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

  // todo ... Map Set Array Object

}

export default _baseIsEqual

