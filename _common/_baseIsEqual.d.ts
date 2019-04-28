declare type TIsEqualCustomizer = (value: any, other: any, valueIndexOrKey?: any, otherIndexOrKey?: any, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean;
declare function _baseIsEqual(value: any, other: any, customizer?: TIsEqualCustomizer, recordMap?: Map<any, any>): boolean;
export default _baseIsEqual;
