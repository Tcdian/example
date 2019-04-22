import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function isDate(value: any): value is Date {
    return _baseGetTypeTag(value) === _TYPE_TAG.Date
}

export default isDate
