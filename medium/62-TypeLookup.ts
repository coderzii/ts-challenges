/*
 * @Date: 2022-03-04
 * @Description: Type Lookup
 */

interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
}

//type LookUp<T, U extends unknown> = T extends infer R
//    ? R extends Record<"type", U>
//        ? R
//        : never
//    : never;

//more simple

type LookUp<T, U extends unknown> = T extends Record<"type", U> ? T : never;

type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`

export {};
