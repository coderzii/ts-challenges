/*
 * @Date: 2022-03-04
 * @Description: CamelCase
 */

//for-bar-baz -> forBarBaz
const characterMap = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
} as const;

type characterType = typeof characterMap;

type Test = "for-bar-baz";
type Test2 = "ar-baz";
type Test3 = "baz";

type transform<T extends string> = T extends keyof characterType
    ? characterType[T]
    : T;
type MyCapitalize<T extends string> = T extends `${infer R}${infer U}`
    ? `${transform<R>}${U}`
    : never;

type CamelCase<T extends string> = T extends `${infer F}-${infer R}`
    ? CamelCase<`${F}${MyCapitalize<R>}`>
    : T;

type Result = CamelCase<Test>; //expected to be 'FooBarBaz'

type Result2 = CamelCase<Test2>; //expected to be 'arBaz'
type Result3 = CamelCase<Test3>; //expected to be 'baz'

export {};

/** https://github.com/type-challenges/type-challenges/issues/6269
 * type CamelCase<S extends string> = 
  S extends "" 
  ? 
  "" 
  :
  S extends `${infer A}${infer B}` 
    ? 
    A extends '-' 
      ?
      B extends `${infer C}${infer D}`
        ?
        C extends Uppercase<C> 
          ?
          `${A}${CamelCase<B>}`
          :
          `${Uppercase<C>}${CamelCase<D>}`
        :
        B extends Uppercase<B>
          ?
          `-${B}`
          :
          `${Uppercase<B>}`
      :
      `${A}${CamelCase<B>}`
    :
    S
 */
