import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function isString(value: any): value is string {
    return _baseGetTypeTag(value) === _TYPE_TAG.String
}

export default isString
