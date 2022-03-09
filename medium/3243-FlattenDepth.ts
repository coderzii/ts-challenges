/*
 * @Date: 2022-03-09
 * @Description: Flatten Depth
 */

//type FlattenDepth<
//    T extends unknown[], //目标数组
//    N extends number = 1 //扁平化次数
//> = T extends [infer F, ...infer R]
//    ? F extends any[]
//        ? R["length"] extends 0
//            ? [...FlattenDepth<F>]
//            : [...F, ...FlattenDepth<R, N>]
//        : [F, ...FlattenDepth<R, N>]
//    : [];

type FlattenOnce<T extends any[]> = T extends [infer F, ...infer R]
    ? F extends any[]
        ? [...F, ...FlattenOnce<R>]
        : [F, ...FlattenOnce<R>]
    : T;

type FlattenDepth<
    T extends any[],
    U extends number = 1,
    K extends any[] = []
> = T extends any[]
    ? K["length"] extends U
        ? T
        : FlattenDepth<FlattenOnce<T>, U, [...K, any]>
    : never;

//type c = FlattenOnce<[1, 2, [3, 4], [[[5]]]]>;
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

const a = [];
a[1] = 123;
