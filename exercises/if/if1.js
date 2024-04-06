// if1.js
//
// Run the code and observe the failing test cases.
// try to solve the exercise in two ways

// I AM NOT DONE
import { assert, assertEqual } from "../../src/utils/assertion.js"
import { fileURLToPath } from "url"

"use strict"
/**
 * Returns the bigger number between a and b.
 * If both numbers are equal, any of them can be returned.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The bigger number.
 */
function bigger(a, b) {
  // Complete this function to return the bigger number!
  // If both numbers are equal, any of them can be returned.
  // Do not use:
  // - another function call
  // - additional variables
  // Can use:
  // - if statement
  // - ternary operator
  // 
  // review `function2.js` `call_me` and check the type of parameters
  // and think about why we need to check the types?
  // 
  // Try to pass another type of value to the function and see what happens.
  // Does it work as expected?
}

// Test cases
function main() {
  assertEqual(bigger(10, 8), 10, "ten is bigger than eight")
  assertEqual(bigger(32, 42), 42, "forty two is bigger than thirty two")
  assertEqual(bigger(42, 42), 42, "forty two is equal to forty two")
}

export { main, bigger, assert, assertEqual }

// https://stackoverflow.com/questions/34842738/if-name-main-equivalent-in-javascript-es6-modules
if (process.argv[1] === fileURLToPath(import.meta.url)){
  main()
}
