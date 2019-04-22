import isNull from './isNull';
import isUndefined from './isUndefined';
function isNil(value) {
    return isUndefined(value) || isNull(value);
}
export default isNil;
