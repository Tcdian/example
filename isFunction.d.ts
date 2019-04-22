declare type TFunc = (...resArgs: any[]) => any;
declare function isFunction(value: any): value is TFunc;
export default isFunction;
