// functions2.js
//
// Run the code and observe the error.

// I AM NOT DONE
import { range } from "../../src/utils/range.js"
import { run_if_main } from "../../src/utils/runner.js"

"use strict"


/**
* @summary don't change the implementation of this function
* @param {number} num
* @returns {void}
*/
const call_me = (num) => {
  if (num === undefined) {
    throw new TypeError("num is required")
  }
  if (typeof num !== "number") {
    throw new TypeError("num should be a number")
  }
  for (const i of range(0, num)) {
    console.log(`Ring! Call number ${i + 1}`)
  }
}

// what you need to change lays below
const main = () => {
  call_me()
}

run_if_main(import.meta, main)