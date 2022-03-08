/*
 * @Date: 2022-03-08
 * @Description: PercentageParser
 */
type PString1 = "";
type PString2 = "+85%";
type PString3 = "-85%";
type PString4 = "85%";
type PString5 = "85";

type Empty = "";
type SignType = "+" | "-";
type UnitType = "%" | "‰";

//  https://github.com/type-challenges/type-challenges/issues/4371

type FilterSign<T extends string> = T extends `${infer F}${infer R}`
    ? F extends Empty
        ? F
        : FilterSign<R>
    : Empty;

type FilterUnit<T extends string> = T extends `${infer F}${infer R}`
    ? F extends UnitType
        ? F
        : FilterUnit<R>
    : Empty;

type FilterNumber<T extends string> = T extends `${infer F}${infer R}`
    ? F extends SignType | UnitType
        ? FilterNumber<`${R}`>
        : `${F}${FilterNumber<`${R}`>}`
    : Empty;

type PercentageParser<T extends string> = [
    FilterSign<T>,
    FilterNumber<T>,
    FilterUnit<T>
];

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]

export {};
