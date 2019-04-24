declare type PropertyName = string | number | symbol;
declare type TIsEqualCustomizer = (value: any, other: any, indexOrKey?: PropertyName, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean | undefined;
declare function _baseIsEqual(value: any, other: any, customizer: TIsEqualCustomizer | undefined, recordMap?: Map<any, any>): boolean | never;
export default _baseIsEqual;
