/*
 * @Date: 2022-03-08
 * @Description: EndsWith
 */

type EndsWith<T extends string, K extends string> = T extends `${infer F}${K}`
    ? true
    : false;

type a = EndsWith<"abc", "ac">; // expected to be false
type b = EndsWith<"abc", "bc">; // expected to be true
type c = EndsWith<"abc", "abcd">; // expected to be false

export {};
