/*
 * @Date: 2022-03-03
 * @Description: Pick
 */
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[K];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};

export {};
