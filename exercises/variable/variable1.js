// variables1.js
//
// Run the code and observe the error.

// I AM NOT DONE
import { run_if_main } from "../../src/utils/runner.js"
"use strict"

const main = () => {
  x = 5
  console.log(`x has the value ${x}`)
}

run_if_main(import.meta, main)
