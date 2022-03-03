/*
 * @Date: 2022-03-03
 * @Description: Readonly2
 */

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type MyReadonly2<T, K extends keyof T> = {
    readonly [P in K]: T[P];
} & {
    [L in Exclude<keyof T, K>]: T[L];
};

const todo: MyReadonly2<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false,
};

//todo.title = "Hello"; // Error: cannot reassign a readonly property
//todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK

export {};

type ReadOnly3<T, K> = K extends keyof T
    ? {
          readonly [U in K]: T[U];
      } & {
          [L in Exclude<keyof T, K>]: T[L];
      }
    : T;
