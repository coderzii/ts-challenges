/*
 * @Date: 2022-03-03
 * @Description: EasyAwaited
 */

type IUser = {
    name: string;
    age: number;
};

type PromiseType = Promise<IUser>;

type EasyAwaited<T extends Promise<unknown>> = T extends Promise<infer R>
    ? R extends Promise<unknown>
        ? EasyAwaited<R>
        : R
    : never;

type T1 = EasyAwaited<PromiseType>;
