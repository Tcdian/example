import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function isRegExp(value: any): value is RegExp {
    return _baseGetTypeTag(value) === _TYPE_TAG.RegExp
}

export default isRegExp
