/*
 * @Date: 2022-03-09
 * @Description: Tuple to Nested Obejct
 */

type KeepFirst<T extends readonly any[]> = T extends [infer F, ...infer R]
    ? [F]
    : [];

//排除第一项之后的

type TupleToNestedObject<T extends readonly any[], K> = T["length"] extends 0
    ? K
    : {
          [P in KeepFirst<T>[number]]: T extends [infer F, ...infer R]
              ? TupleToNestedObject<R, K>
              : K;
      };

type TupleToNestedObject2<T extends readonly string[], K> = T extends [
    infer F,
    ...infer R
]
    ? {
          [P in F & string]: TupleToNestedObject<R, K>;
      }
    : K;

type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type
type d = TupleToNestedObject2<["a", "b", "c"], string[]>; // {a: {b: {c:any[]}}}


export {};
