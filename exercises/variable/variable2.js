// variables2.js
//
// Run the code and observe the error.

// I AM NOT DONE
import { run_if_main } from "../../src/utils/runner.js"
"use strict"

function main() {
  /**
   * @type {number}
   */
  const x

  // You should NOT change the following code
  if (typeof x === "number") {
    if (x === 10) {
      console.log("x is ten!")
    } else {
      console.log("x is not ten!")
    }
  } else {
    throw new TypeError("x is not a number")
  }
}

run_if_main(import.meta, main)
