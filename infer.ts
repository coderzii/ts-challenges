/*
 * @Date: 2022-03-03
 * @Description: infer
 */

type T1 = {
    name: string;
};

type T2 = {
    age: number;
};

type UnionType<T> = T extends {
    a: (x: infer U) => void;
    b: (x: infer U) => void;
}
    ? U
    : never;

type T3 = UnionType<{ a: (x: T1) => void; b: (x: T2) => void }>; // T1 & T2

export {};
