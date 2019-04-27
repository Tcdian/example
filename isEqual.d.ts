declare type TIsEqualCustomizer = (value: any, other: any, indexOrKey?: any, collection?: any, otherCollection?: any, stack?: Map<any, any>) => boolean | undefined;
declare function isEqual(value: any, other: any, customizer?: TIsEqualCustomizer): boolean;
export default isEqual;
