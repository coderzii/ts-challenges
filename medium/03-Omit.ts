/*
 * @Date: 2022-03-03
 * @Description: Omit
 */

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type MyOmit<T, K extends string | number | symbol> = {
    [U in Exclude<keyof T, K>]: false;
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
    completed: false,
};

export {};
