import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function isSet(value: any): value is Set<any> {
  return _baseGetTypeTag(value) === _TYPE_TAG.Set
}

export default isSet
