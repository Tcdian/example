import _baseIsEqual from './_common/_baseIsEqual'
import isFunction from './isFunction'
import isUndefined from './isUndefined'

type TIsEqualCustomizer = (value: any, other: any, indexOrKey?: any, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean

function isEqual(value: any, other: any, customizer?: TIsEqualCustomizer): boolean {
  const customizerFunc: TIsEqualCustomizer = isFunction(customizer) ? customizer : void 0
  const customizerResult: boolean = isUndefined(customizerFunc) ? void 0 : customizerFunc(value, other)
  return isUndefined(customizerResult) ? _baseIsEqual(value, other, customizerFunc) : customizerResult
}

export default isEqual
