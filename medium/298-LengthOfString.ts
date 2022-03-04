/*
 * @Date: 2022-03-04
 * @Description: Length of String
 */

type title = "title";

type LengthOfString<
    T extends string,
    U extends string[] = []
> = T extends `${infer F}${infer R}`
    ? LengthOfString<R, [F, ...U]>
    : U["length"];

type x = LengthOfString<title>;

export {};
