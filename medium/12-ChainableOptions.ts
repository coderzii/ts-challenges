/*
 * @Date: 2022-03-04
 * @Description: Chainable Options 可串联构造器
 */
declare const config: Chainable;

type Chainable<T extends Record<string, unknown> = {}> = {
    option<K extends string, V = unknown>(
        key: Exclude<K, keyof T>,
        value: V
    ): Chainable<T & Record<K, V>>;
    get(): T;
};

const result = config
    .option("foo", 123)
    .option("name", "type-challenges")
    .option("bar", { value: "Hello World" })
    .get();

// expect the type of result to be:
interface Result {
    foo: number;
    name: string;
    bar: {
        value: string;
    };
}

type Chainable2<T extends Record<string, unknown> = {}> = {
    option<K extends string, V = unknown>(
        key: Exclude<K, keyof T>,
        value: V
    ): Chainable2<T & Record<K, V>>;
};

// Record<string,unknown> 创建一个对象类型
// Chainable3<T & Record<K, V>>; 递归此次循环 继续合并当前类型

type Chainable3<T extends Record<string, unknown> = {}> = {
    option<K extends string, V = unknown>(
        key: Exclude<K, keyof T>,
        value: V
    ): Chainable3<T & Record<K, V>>;
    get(): T;
};

export {};
