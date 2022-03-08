/*
 * @Date: 2022-03-08
 * @Description: RequriedByKeys
 */

interface User {
    name?: string;
    age?: number;
    address?: string;
}

type RequiredByKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type UserPartialName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }

const user: UserPartialName = {
    name: "coderzi",
};

export {};
