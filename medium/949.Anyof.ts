/*
 * @Date: 2022-03-05
 * @Description: Anyof
 */

type TFalsy = null | undefined | "" | false | [] | 0;

type AnyOf<T extends readonly any[]> = T["length"] extends 0
    ? false
    : T extends [infer F, ...infer R]
    ? keyof F extends never
        ? false
        : F extends TFalsy
        ? AnyOf<R>
        : true
    : false;

// keyof T extends never 代表空对象类型 {}

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
type Sample3 = AnyOf<[]>; // expected to be false.

export {};
