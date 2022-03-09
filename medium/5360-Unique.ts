/*
 * @Date: 2022-03-09
 * @Description: Unique
 */
type Unique<T extends readonly any[]> = T extends [...infer F, infer R]
    ? R extends F[number]
        ? [...Unique<F>]
        : [...Unique<F>, R]
    : [];

type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
