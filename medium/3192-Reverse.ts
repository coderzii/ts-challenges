/*
 * @Date: 2022-03-09
 * @Description: Reverse
 */

//type Reverse<
//    T extends readonly any[],
//    U extends readonly any[] = []
//> = T extends [...infer F, infer L]
//    ? U["length"] extends T["length"]
//        ? U
//        : Reverse<[L, ...F], [...U, L]>
//    : T;

type Reverse<T extends unknown[]> = T extends [...infer L, infer R]
    ? [R, ...Reverse<L>]
    : T;

type a = Reverse<["a", "b"]>; // ['b', 'a']
type b = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']

export {};
