/*
 * @Date: 2022-03-04
 * @Description: Trim Left 去除左边开头的空格
 */
type Whitespace = " " | "\n" | "\r" | "\t";

type TrimLeft<
    T extends string,
    P extends string = Whitespace
> = T extends `${P}${infer R}` ? TrimLeft<R, P> : T;

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '

export {};
