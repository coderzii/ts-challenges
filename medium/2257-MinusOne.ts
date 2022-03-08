/*
 * @Date: 2022-03-08
 * @Description: MinusOne
 */

type MinusOne<T extends number, U extends unknown[] = []> = [
    ...U,
    unknown
]["length"] extends T
    ? U["length"]
    : MinusOne<T, [...U, unknown]>;

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54

export {};
