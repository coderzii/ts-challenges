/*
 * @Date: 2022-03-08
 * @Description: Remove Index Signature
 */
type Foo = {
    [key: string]: any;
    foo(): void;
};

// 筛选出类型为string和number的key
// why 'as'

type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K
        ? never
        : number extends K
        ? never
        : K]: T[K];
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }

export {};
