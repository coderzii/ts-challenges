/*
 * @Date: 2022-03-03
 * @Description: Parameters
 */

type MyParameters<T> = T extends (...args: infer R) => any ? R : any;

type F1 = (x: number) => string;

type Result = MyParameters<F1>; // [x:number]

export {};
