import isNull from '../isNull'

function _isObjectLike(value: any): boolean {
  return !isNull(value) && typeof value === 'object'
}

export default _isObjectLike
