/*
 * @Date: 2022-03-09
 * @Description: Shift
 */

type Shift<T extends readonly any[]> = T extends [infer F, ...infer R]
    ? [...R]
    : [];

type Result = Shift<[3, 2, 1]>; // [2, 1]
