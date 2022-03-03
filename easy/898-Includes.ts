/*
 * @Date: 2022-03-03
 * @Description: Includes
 */

type Includes<
    T extends readonly unknown[],
    U extends unknown
> = U extends T[number] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

export {};
