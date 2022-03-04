/*
 * @Date: 2022-03-04
 * @Description: Trim 去首尾的空格
 */
type Whitespace = " " | "\n" | "\r" | "\t";

type Trim<
    T extends string,
    P extends string = Whitespace
> = T extends `${P}${infer U}${P}` ? Trim<U, P> : T;

type trimed = Trim<"  Hello World  ">; // expected to be 'Hello World  '

export {};
