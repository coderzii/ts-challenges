/*
 * @Date: 2022-03-07
 * @Description: IsUnion
 */

type IsUnion<T, K = T> = T extends T ? ([K] extends [T] ? false : true) : false;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

export {};
