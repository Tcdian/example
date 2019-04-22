import isNull from './isNull'

function isObject(value: any): value is object {
    const type: string = typeof value
    return !isNull(value) && (type === 'object' || type === 'function')
}

export default isObject
