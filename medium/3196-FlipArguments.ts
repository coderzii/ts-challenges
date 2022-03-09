/*
 * @Date: 2022-03-09
 * @Description: Filp Arguments
 */

type Reverse<T extends unknown[]> = T extends [...infer F, infer R]
    ? [R, ...Reverse<F>]
    : T;

type FlipArguments<T extends (...args: any[]) => any> = T extends (
    ...args: infer R
) => infer S
    ? (...args: Reverse<R>) => S
    : T;

type Flipped = FlipArguments<
    (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void
