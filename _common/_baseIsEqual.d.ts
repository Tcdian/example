declare type TIsEqualCustomizer = (value: any, other: any, indexOrKey?: any, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean | undefined;
declare function _baseIsEqual(value: any, other: any, customizer: TIsEqualCustomizer | undefined, recordMap?: Map<any, any>): boolean;
export default _baseIsEqual;
