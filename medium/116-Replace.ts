/*
 * @Date: 2022-03-04
 * @Description: Replace
 */

type Replace<
    T extends string,
    K extends string,
    U extends string
> = T extends `${infer S}${K}${infer R}` ? `${S}${U}${R}` : T;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'

export {};
