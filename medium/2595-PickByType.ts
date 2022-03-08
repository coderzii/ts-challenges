/*
 * @Date: 2022-03-08
 * @Description: PickByType
 */

type PickByType<T extends Record<string, unknown>, K extends any> = {
    [P in keyof T as T[P] extends K ? P : never]: T[P];
};

type OnlyBoolean = PickByType<
    {
        name: string;
        count: number;
        isReadonly: boolean;
        isEnable: boolean;
    },
    boolean
>; // { isReadonly: boolean; isEnable: boolean; }
