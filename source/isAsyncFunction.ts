import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

type TFunc = (...resArgs: any[]) => any

function isAsyncFunction(value: any): value is TFunc {
  return _baseGetTypeTag(value) === _TYPE_TAG.AsyncFunction
}

export default isAsyncFunction
