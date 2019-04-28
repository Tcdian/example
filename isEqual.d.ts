declare type TIsEqualCustomizer = (value: any, other: any, valueIndexOrKey?: any, otherIndexOrKey?: any, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean;
declare function isEqual(value: any, other: any, customizer?: TIsEqualCustomizer): boolean;
export default isEqual;
