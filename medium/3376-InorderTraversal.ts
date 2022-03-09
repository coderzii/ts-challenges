/*
 * @Date: 2022-03-09
 * @Description: InorderTraversal
 */
const tree1 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: null,
    },
} as const;
// ...
//type InorderTraversal<T> = [1, 3, 2];

type A = InorderTraversal<typeof tree1>; // [1, 3, 2]

export {};
