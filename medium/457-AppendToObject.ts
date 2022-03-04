/*
 * @Date: 2022-03-04
 * @Description: Append to Obejct
 */

type Test = { id: "1" };

type AppendToObject<
    T extends Record<string, any>,
    K extends string | symbol | number,
    U extends any
> = {
    [P in keyof T]: T[P];
} & Record<K, U>;

type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }

const res: Result = {
    id: "1",
    value: 4,
};

type AppendToObject2<
    T,
    K extends string | number | symbol,
    V extends unknown
> = {
    [P in keyof T | K]: P extends keyof T ? T[P] : V;
};

type Result2 = AppendToObject2<Test, "value", 4>; // expected to be { id: '1', value: 4 }

const res2: Result2 = {
    id: "1",
    value: 4,
};

export {};
