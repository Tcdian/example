import isNull from './isNull';
function isObject(value) {
    const type = typeof value;
    return !isNull(value) && (type === 'object' || type === 'function');
}
export default isObject;
