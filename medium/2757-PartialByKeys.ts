/*
 * @Date: 2022-03-08
 * @Description: PartialByKeys
 */

interface User {
    name: string;
    age: number;
    address: string;
}
type PartialByKeys<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
} & {
    [P in keyof T as P extends K ? K : never]?: T[P];
} extends infer A
    ? {
          [P in keyof A]: A[P];
      }
    : never;

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }

const res: UserPartialName = {
    age: 123,
    address: "123",
};

export {};
