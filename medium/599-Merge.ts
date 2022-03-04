/*
 * @Date: 2022-03-04
 * @Description: Merge
 */

/**
 * Merge two types into a new type. Keys of the second type
 * overrides keys of the first type.
 */

type Test1 = {
    name: string;
    age: 1;
};

type Test2 = {
    name: number;
    age: number;
    class: string;
};

//type Merge<T, K> = {
//    //[P in keyof T | keyof K]: P extends keyof K ? K[P] : never;
//    [P in keyof K]: K[P];
//} & {
//    [X in Exclude<keyof T, keyof K>]: T[X];
//};
type Merge<
    T extends Record<string, unknown>,
    K extends Record<string, unknown>
> = {
    [P in keyof T | keyof K]: P extends keyof K
        ? K[P]
        : P extends keyof T
        ? T[P]
        : never;
};

type Result = Merge<Test1, Test2>; // expected to be {name:number,age:number}

export {};
