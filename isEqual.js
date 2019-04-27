import _baseIsEqual from './_common/_baseIsEqual';
import isFunction from './isFunction';
import isUndefined from './isUndefined';
function isEqual(value, other, customizer) {
    const customizerFunc = isFunction(customizer) ? customizer : void 0;
    const customizerResult = isUndefined(customizerFunc) ? void 0 : customizerFunc(value, other);
    return isUndefined(customizerResult) ? _baseIsEqual(value, other, customizerFunc) : customizerResult;
}
export default isEqual;
