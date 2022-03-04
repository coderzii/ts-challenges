/*
 * @Date: 2022-03-04
 * @Description: Pop
 */
type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type Pop<T extends readonly any[]> = T extends [...infer R, infer U]
    ? [...R]
    : never;

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
