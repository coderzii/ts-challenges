/*
 * @Date: 2022-03-04
 * @Description: CapitalLize 首字母大写
 */

const characterMap = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
} as const;

type characterType = typeof characterMap;

type transform<T extends string> = T extends keyof characterType
    ? characterType[T]
    : T;

type MyCapitalize<T extends string> = T extends `${infer R}${infer U}`
    ? `${transform<R>}${U}`
    : never;

type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
