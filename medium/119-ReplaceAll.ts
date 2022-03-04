/*
 * @Date: 2022-03-04
 * @Description: ReplaceAll
 */

type ReplaceAll<
    T extends string,
    K extends string,
    U extends string
> = T extends `${infer S}${K}${infer R}` ? ReplaceAll<`${S}${R}`, K, U> : T;

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

export {};
