/*
 * @Date: 2022-03-03
 * @Description:Exclude
 */

type Exclude<T, K> = T extends K ? never : T;
type IType1 = {
    name: string;
    age: number;
};

type IType2 = {
    name: string;
    class: number;
    age: number;
};

type test = Exclude<IType1, IType2>;

export {};
