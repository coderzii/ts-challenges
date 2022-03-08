/*
 * @Date: 2022-03-08
 * @Description: DropChar
 */
type DropChar<
    T extends string,
    K extends string
> = T extends `${infer F}${infer R}`
    ? F extends K
        ? `${DropChar<R, K>}`
        : `${F}${DropChar<R, K>}`
    : T;

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

export {};
