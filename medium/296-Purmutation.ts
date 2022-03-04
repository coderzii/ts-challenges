/*
 * @Date: 2022-03-04
 * @Description: Purmutation
 */

type Permutation<T, U = T> = T extends [never]
    ? []
    : T extends any
    ? [T, ...Permutation<Exclude<U, T>>]
    : U;

type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

//type Permutation2<T, U = T> = T extends [never]
//    ? []
//    : T extends any
//    ? [T, ...Permutation2<Exclude<U, T>>]
//    : U;

export {};
