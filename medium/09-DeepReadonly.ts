/*
 * @Date: 2022-03-03
 * @Description: DeepReadonly
 */

type X = {
    x: {
        a: 1;
        b: "hi";
    };
    y: "hey";
};

//1

type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends { [index: string]: unknown }
        ? DeepReadonly<T[P]>
        : T[P];
};

//2

type DeepReadonly2<T> = keyof T extends never
    ? T
    : {
          [P in keyof T]: DeepReadonly2<T[P]>;
      };

type Expected = {
    readonly x: {
        readonly a: 1;
        readonly b: "hi";
    };
    readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

//判断是否为对象 keyof T extends never  ? :
// extends {[index;string]:unknown}

const test: Todo = {
    x: {
        a: 1,
        b: "hi",
    },
    y: "hey",
};
//test.x.a = 123;