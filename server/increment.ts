import { ICounter } from "../client/src/shared/shared";

export function increment(counter: ICounter) {
  counter.count++;
  console.log(counter.count);
}
