/*
 * @Date: 2022-03-09
 * @Description: BEM style string
 */

type FormatElement<T extends string[], S extends string> = `${S}${T[number]}`;

type r = FormatElement<["a", "b"], "__">;

type BEM<
    B extends string,
    E extends string[],
    M extends string[]
> = `${B}${FormatElement<E, "__">}${FormatElement<M, "--">}`;

type Result = BEM<"btn", ["price", "name"], ["warning"]>; //Expected to be "btn__price--warning"

// ? not srue
export {};
