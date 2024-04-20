// functions3.js
//
// Run the code and observe the error.

// I AM NOT DONE
import { zip } from "../../src/utils/range.js"
import { run_if_main } from "../../src/utils/runner.js"

"use strict"

/**
 * @summary adds numbers up
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @returns {number}
 * 
 * One should not change the implementation of this function but the signature.
 */
const adds_up_4 = (a, b, c, d = 0) => {
  const names = ["a", "b", "c", "d"]
  const values = [a, b, c, d]
  // https://stackoverflow.com/questions/70101584/how-to-cast-typescript-type-in-javascript-using-jsdoc
  // https://stackoverflow.com/questions/64559624/jsdoc-equivalent-to-typescripts-as-const
  zip(names, values)
    .map(([k, v], index) => /**@type {const} */([k, typeof v, index]))
    .forEach(([k, t, i]) => {
      if (t !== "number") {
        throw new TypeError(`argument '${k}' (at ${i}) should be a 'number'. Got '${t}' instead.`)
      }
    })
  return a + b + c + d
}

const main = () => {
  adds_up_4(1) // don't change this line
}

run_if_main(import.meta, main)
