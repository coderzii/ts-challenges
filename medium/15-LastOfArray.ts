/*
 * @Date: 2022-03-04
 * @Description: Last of Array
 */

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type Last<T extends readonly any[]> = T extends [...infer R, infer U]
    ? U
    : never;

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1

export {};
