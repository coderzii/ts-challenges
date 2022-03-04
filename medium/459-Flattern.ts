/*
 * @Date: 2022-03-04
 * @Description: Flatten
 */

type Flatten<T extends any[]> = T extends [infer F, ...infer R]
    ? F extends any[]
        ? R["length"] extends 0
            ? [...Flatten<F>]
            : [...Flatten<F>, ...Flatten<R>]
        : [F, ...Flatten<R>]
    : [];

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

//type Flatten2<T extends any[]> = T extends [infer F, ...infer R]
//    ? F extends any[]
//        ? [...Flatten<F>, ...Flatten<R>]
//        : [F, ...Flatten<R>]
//    : [];

//type flatten2 = Flatten2<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

export {};
