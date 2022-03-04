/*
 * @Date: 2022-03-04
 * @Description: Tuple to Union
 */

type Arr = ["1", "2", "3"];

//1
type TupleToUnion<T extends readonly any[]> = T[number];
//2
type TupleToUnion2<T extends readonly any[]> = T extends (infer R)[]
    ? R
    : never;

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
type Test2 = TupleToUnion2<Arr>; // expected to be '1' | '2' | '3'

export {};
