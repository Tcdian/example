declare type TFunc = (...resArgs: any[]) => any;
declare type TIsEmptyArg = string | any[] | object | Map<any, any> | Set<any> | TFunc | null | undefined;
declare function isEmpty(value: TIsEmptyArg): boolean | never;
export default isEmpty;
