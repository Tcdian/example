import _baseGetTypeTap from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function isBoolean(value: any): value is boolean {
  return _baseGetTypeTap(value) === _TYPE_TAG.Boolean
}

export default isBoolean
