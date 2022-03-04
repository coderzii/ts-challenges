/*
 * @Date: 2022-03-04
 * @Description: Promise.all
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

declare function PromiseAll<T extends unknown[]>(
    value: readonly [...T]
): Promise<{
    [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
}>;

// expected to be `Promise<[number, number, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

//declare function PromiseAll2<T extends unknown[]>(
//    value: readonly [...T]
//): Promise<{
//    [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
//}>;

export {};
