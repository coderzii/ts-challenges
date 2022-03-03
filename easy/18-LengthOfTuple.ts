/*
 * @Date: 2022-03-03
 * @Description: Length of Tuple
 */
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
    "FALCON 9",
    "FALCON HEAVY",
    "DRAGON",
    "STARSHIP",
    "HUMAN SPACEFLIGHT"
];

type Length<K extends readonly any[]> = K["length"];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

export {};
