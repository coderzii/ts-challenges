/*
 * @Date: 2022-03-04
 * @Description: String to Union
 */

type Test = "123";
type Test2 = "1";

type StringToUnion<T extends string> = T extends ""
    ? never
    : T extends `${infer F}${infer R}`
    ? F | StringToUnion<R>
    : T;

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
type Result2 = StringToUnion<Test2>; // expected to be "1"

export {};
