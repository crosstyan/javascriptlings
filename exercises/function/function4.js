// functions4.js
//
// Run the code and observe the error.

// I AM NOT DONE
import { run_if_main } from "../../src/utils/runner.js"

"use strict"

/**
 * @summary an non empty array
 * @template T
 * @typedef {[T, ...T[]]} NonEmptyArray
 */

/**
 * @summary adds things up
 * @template {number | string} T
 * @param {NonEmptyArray<T>} n things to add up
 * @returns {T extends string ? string : number}
 * @throws {TypeError} if the stuff in the `n` is not consistent
 * @throws {TypeError} if the stuff in the `n` is not a string or number
 * @throws {RangeError} if no arguments are provided
 * 
 * Don't change the implementation of this function. Well you can look at it though.
 */
function adds_up_n(...n) {
  if (n.length === 0) {
    throw new RangeError("at least one argument is required")
  }
  const type = typeof n[0]
  if (!["string", "number"].includes(type)) {
    throw new TypeError(`argument should be a 'string' or 'number'. Got '${type}' instead.`)
  }
  n.map((v, i) => /** @type {const} */([v, typeof v, i])).forEach(
    ([v, t, i]) => {
      if (t !== type) {
        throw new TypeError(`argument at ${i} (value ${v}) should be a '${type}'. Got '${t}' instead. (Types are not consistent)`)
      }
    })
  const init_value = type === "string" ? "" : 0
  // @ts-expect-error don't know how to handle, using the escape hatch
  return n.reduce((acc, v) => acc + v, init_value)
}

// fix me!
const main = () => {
  console.log(adds_up_n(1, 2, 3, 4, 5))
  console.log(adds_up_n("a", "b", "c", "d", "e"))
  console.log(adds_up_n())
  console.log(adds_up_n(1, "a", 2, "b", 3, "c"))
  console.log(adds_up_n(1, 2, 3, "4"))
}

run_if_main(import.meta, main)

