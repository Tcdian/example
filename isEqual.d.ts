declare type PropertyName = string | number | symbol;
declare type TIsEqualCustomizer = (value: any, other: any, indexOrKey?: PropertyName, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean | undefined;
declare function isEqual(value: any, other: any, customizer?: TIsEqualCustomizer | undefined): boolean;
export default isEqual;
