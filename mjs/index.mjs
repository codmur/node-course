// console.log(globalThis); !Variable global

// Common js
// const {sumFn} = require('./cjs/sum')
import { sum, sub, mult } from "./sum.mjs";

console.log(sum(1, 3));
console.log(sub(1, 3));
console.log(mult(1, 3));

