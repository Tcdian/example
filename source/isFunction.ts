import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

type TFunc = (...resArgs: any[]) => any

function isFunction(value: any): value is TFunc {
  const tag: string = _baseGetTypeTag(value)
  return tag === _TYPE_TAG.Function || tag === _TYPE_TAG.GeneratorFunction || tag === _TYPE_TAG.AsyncFunction
}

export default isFunction
