/*
 * @Date: 2022-03-03
 * @Description: Concat
 */

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
type Result2 = Concat<[{ name: string }], [2]>; // expected to be [1, 2]

export {};
