/*
 * @Date: 2022-03-04
 * @Description: Absolute
 */

type Test = "-100";
type Test2 = -100;

type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer F}`
    ? F
    : T;

type Result = Absolute<Test>; // expected to be "100"
type Result2 = Absolute<Test2>; // expected to be "100"

export {};
