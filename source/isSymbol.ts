import _baseGetTypeTag from './_common/_baseGetTypeTag'
import _TYPE_TAG from './_CONST/_TYPE_TAG'

function isSymbol(value: any): value is symbol {
    return _baseGetTypeTag(value) === _TYPE_TAG.Symbol
}

export default isSymbol
