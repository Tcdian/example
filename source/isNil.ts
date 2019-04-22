import isNull from './isNull'
import isUndefined from './isUndefined'

function isNil(value: any): value is null | undefined {
    return isUndefined(value) || isNull(value)
}

export default isNil
