export declare interface ICounter {
  count: number;
}

export const counter: ICounter = { count: 1 };

export function incrementCounter(counter: ICounter) {
  counter.count++;
  console.log(counter.count);
}
