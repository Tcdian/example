import _baseGetTypeTap from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function is(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export default is
