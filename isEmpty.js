import isArray from './isArray';
import isString from './isString';
import isMap from './isMap';
import isSet from './isSet';
import isNil from './isNil';
import isObject from './isObject';
// Checks if value is an empty string, array, object, map, or set.
function isEmpty(value) {
    if (isNil(value)) {
        return true;
    }
    if (isArray(value) || isString(value)) {
        return !value.length;
    }
    if (isSet(value) || isMap(value)) {
        return !value.size;
    }
    if (isObject(value)) {
        return !Object.keys(value).length;
    }
    throw new Error(`unexpected token ${value}`);
}
export default isEmpty;
