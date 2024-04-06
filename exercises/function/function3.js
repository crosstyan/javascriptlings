// functions3.js
//
// Run the code and observe the error.

// I AM NOT DONE
import { range } from "../../src/utils/range.js"
import { run_if_main } from "../../src/utils/runner.js"

"use strict"


/**
* @summary You could change the function signature but not the function implementation
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

const main = () => {
  call_me() // don't change this line
}

run_if_main(import.meta, main)