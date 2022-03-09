/*
 * @Date: 2022-03-09
 * @Description: OmitByType
 */

type OmitByType<T, K> = {
    [P in keyof T as T[P] extends K ? never : P]: T[P];
};

type OmitBoolean = OmitByType<
    {
        name: string;
        count: number;
        isReadonly: boolean;
        isEnable: boolean;
    },
    boolean
>; // { name: string; count: number }
