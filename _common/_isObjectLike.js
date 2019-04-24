import isNull from '../isNull';
function _isObjectLike(value) {
    return !isNull(value) && typeof value === 'object';
}
export default _isObjectLike;
