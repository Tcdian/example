import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function isGeneratorFunction(value: any): value is GeneratorFunction {
  return _baseGetTypeTag(value) === _TYPE_TAG.GeneratorFunction
}

export default isGeneratorFunction