import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function isMap(value: any): value is Map<any, any> {
  return _baseGetTypeTag(value) === _TYPE_TAG.Map
}

export default isMap
