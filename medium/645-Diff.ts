/*
 * @Date: 2022-03-05
 * @Description: Diff
 */
/**
 * Get an Object that is the difference between O & O1
 */

type I1 = {
    name: string;
};

type I2 = {
    name: string;
    age: number;
    id: number;
};

type Diff<O, O1> = O1 extends O
    ? {
          [K in Exclude<keyof O1, keyof O>]: O1[K];
      }
    : {
          [K in Exclude<keyof O, keyof O1>]: O[K];
      };

type Result = Diff<I1, I2>;

export {};
