import _baseGetTypeTag from './_common/_baseGetTypeTag';
import _TYPE_TAG from './_CONST/_TYPE_TAG';
function isError(value) {
    return _baseGetTypeTag(value) === _TYPE_TAG.Error;
}
export default isError;
