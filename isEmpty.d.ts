declare type TFunc = (...resArgs: any[]) => any;
declare type TIsEmptyArg = string | any[] | object | Map<any, any> | Set<any> | TFunc;
declare function isEmpty(value: TIsEmptyArg): boolean;
export default isEmpty;
