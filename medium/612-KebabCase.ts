/*
 * @Date: 2022-03-04
 * @Description:KebabCase
 */
//FooBarBaz -> foo-bar-baz

type Test = "FooBarBaz";

type KebabCase<T extends string> = T extends `${infer F}${infer R}`
    ? `${Uncapitalize<F>}${R extends Uncapitalize<R> ? "" : "-"}${KebabCase<R>}`
    : Uncapitalize<T>;

type Result = KebabCase<Test>;

export {};

//>
