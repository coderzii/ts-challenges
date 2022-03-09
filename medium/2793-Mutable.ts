/*
 * @Date: 2022-03-09
 * @Description: Mutable
 */
interface Todo {
    readonly title: string;
    readonly description: string;
    readonly completed: boolean;
}

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

type MutableTodo = Mutable<Todo>; // { title: string; description: string; completed: boolean; }

export {};
