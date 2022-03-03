/*
 * @Date: 2022-03-03
 * @Description: If
 */

type If<T extends boolean, K, U> = T extends true ? K : U;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

export {};
