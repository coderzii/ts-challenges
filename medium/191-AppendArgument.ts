/*
 * @Date: 2022-03-04
 * @Description: Append Argument
 */

type Fn = (a: number, b: string) => number;

type AppendArgument<T extends (...args: any[]) => any, K> = T extends (
    ...args: infer R
) => any
    ? (...args: [...R, K]) => any
    : never;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

export {};
