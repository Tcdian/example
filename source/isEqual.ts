import _baseIsEqual from './_common/_baseIsEqual'
import isFunction from './isFunction'
import isUndefined from './isUndefined'

type PropertyName = string | number | symbol
type TIsEqualCustomizer = (value: any, other: any, indexOrKey?: PropertyName, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean | undefined

function isEqual(value: any, other: any, customizer?: TIsEqualCustomizer): boolean {
  const customizerFunc = isFunction(customizer) ? customizer : void 0
  const customizerResult = isUndefined(customizerFunc) ? void 0 : customizerFunc(value, other)
  return isUndefined(customizerResult) ? _baseIsEqual(value, other, customizerFunc) : !!customizerFunc
}

export default isEqual
