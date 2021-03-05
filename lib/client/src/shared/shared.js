"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementCounter = exports.counter = void 0;
exports.counter = { count: 1 };
function incrementCounter(counter) {
    counter.count++;
    console.log(counter.count);
}
exports.incrementCounter = incrementCounter;
