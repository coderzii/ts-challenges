/*
 * @Date: 2022-03-03
 * @Description: Get Retrun Type
 */

const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
};

type MyReturnType<T extends (...args: any[]) => any> = T extends (
    ...args: any[]
) => infer R
    ? R
    : any;

type a = MyReturnType<typeof fn>; // should be "1 | 2"

export {};
