import _baseGetTypeTag from './_baseGetTypeTag';
import _TYPE_TAG from '../_CONST/_TYPE_TAG';
import isArray from '../isArray';
import isFunction from '../isFunction';
import isUndefined from '../isUndefined';
function _baseIsEqual(value, other, customizer, recordMap = new Map()) {
    const valueType = _baseGetTypeTag(value);
    if (valueType !== _baseGetTypeTag(other)) {
        return false;
    }
    if (value === other) {
        return true;
    }
    // NaN
    if (value !== value) {
        return other !== other;
    }
    if (valueType !== _TYPE_TAG.Function && typeof value !== 'object' && typeof other !== 'object') {
        return false;
    }
    // 包装对象
    // string 和 RegExp 
    if (valueType === _TYPE_TAG.String || valueType === _TYPE_TAG.RegExp) {
        return '' + value === '' + other;
    }
    // number
    if (valueType === _TYPE_TAG.Number) {
        if (+value !== +value) {
            return +other !== +other;
        }
        return +value === +other;
    }
    // boolean Date
    if (valueType === _TYPE_TAG.Boolean || valueType === _TYPE_TAG.Date) {
        return +value === +other;
    }
    // Symbol
    if (valueType === _TYPE_TAG.Symbol) {
        return Symbol.prototype.valueOf.call(value) === Symbol.prototype.valueOf.call(other);
    }
    if (valueType !== _TYPE_TAG.Array) {
        // 借鉴 underscore， 处理来自不同的frames
        const valueConstructor = value.constructor;
        const otherConstructor = other.constructor;
        if (valueConstructor !== otherConstructor
            && !(isFunction(valueConstructor)
                && valueConstructor instanceof valueConstructor
                && isFunction(otherConstructor)
                && otherConstructor instanceof otherConstructor)
            && 'constructor' in value && 'constructor' in other) {
            return false;
        }
    }
    // 使用 Map 存储，防止出现循环引用问题
    if (recordMap.has(value)) {
        return recordMap.get(value) === other && recordMap.get(other) === value;
    }
    recordMap.set(value, other);
    recordMap.set(other, value);
    let result;
    if (valueType === _TYPE_TAG.Set) {
        const valueSetKeys = Array.from(value.values());
        const otherSetKeys = Array.from(other.values());
        result = valueSetKeys.every((valueKey) => {
            let notUndefinedKeyCustomizerResult = void 0;
            const customizerFunc = isFunction(customizer) ? customizer : void 0;
            const customizerResult = isUndefined(customizerFunc)
                ? void 0
                : otherSetKeys.every((otherKey) => {
                    const otherKeyCustomizerResult = customizerFunc(valueKey, otherKey, valueKey, value, other, recordMap);
                    if (!isUndefined(otherKeyCustomizerResult)) {
                        notUndefinedKeyCustomizerResult = otherKeyCustomizerResult;
                    }
                    return isUndefined(otherKeyCustomizerResult);
                })
                    ? void 0
                    : notUndefinedKeyCustomizerResult;
            return isUndefined(customizerResult)
                ? otherSetKeys.some((otherKey) => {
                    return _baseIsEqual(valueKey, otherKey, customizer, recordMap);
                })
                : customizerResult;
        });
    }
    else if (valueType === _TYPE_TAG.Map) {
        const valueMapKeys = Array.from(value.keys());
        const otherMapKeys = Array.from(other.keys());
        result = valueMapKeys.every((valueKey) => {
            const customizerFunc = isFunction(customizer) ? customizer : void 0;
            const customizerResult = isUndefined(customizerFunc)
                ? void 0
                : customizerFunc(value.get(valueKey), other.get(valueKey), valueKey, value, other, recordMap);
            return isUndefined(customizerResult)
                ? otherMapKeys.some((otherKey) => {
                    return _baseIsEqual(valueKey, otherKey, void 0) && _baseIsEqual(value.get(valueKey), other.get(otherKey), customizer, recordMap);
                })
                : customizerResult;
        });
    }
    else {
        const areArrays = isArray(value);
        const valueKeys = [...(areArrays ? Object.keys(value).map((key) => Number(key)) : Object.keys(value)), ...Object.getOwnPropertySymbols(value)];
        const otherKeys = [...(areArrays ? Object.keys(other).map((key) => Number(key)) : Object.keys(other)), ...Object.getOwnPropertySymbols(other)];
        if (valueKeys.length !== otherKeys.length) {
            return false;
        }
        result = valueKeys.every((key) => {
            const customizerFunc = isFunction(customizer) ? customizer : void 0;
            const customizerResult = isUndefined(customizerFunc)
                ? void 0
                : customizerFunc(value[key], other[key], key, value, other, recordMap);
            return isUndefined(customizerResult)
                ? otherKeys.includes(key) && _baseIsEqual(value[key], other[key], customizerFunc, recordMap)
                : customizerResult;
        });
    }
    recordMap.delete(value);
    recordMap.delete(other);
    return result;
}
export default _baseIsEqual;
