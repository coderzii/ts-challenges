/*
 * @Date: 2022-03-03
 * @Description: Push
 */

type Push<T extends readonly any[], U> = [...T, U];

type Result = Push<[1, 2], "3">; // [1, 2, '3']

export {};
