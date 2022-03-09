/*
 * @Date: 2022-03-09
 * @Description: ObjectEntries
 */

interface Model {
    name?: string;
    age?: number;
    locations?: string[] | null;
}

// why Required<>

type X = Model["locations"];

type ObjectEntries<T, K extends keyof T = keyof T> = K extends keyof T
    ? [K, Required<T>[K]]
    : never;

type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];

const result: modelEntries = ["locations", ["1"]];

export {};
