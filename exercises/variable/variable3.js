// variables3.js
//
// Run the code and observe the error.

// I AM NOT DONE
import { run_if_main } from "../../src/utils/runner.js"
"use strict"

const main = () => {
  const x = 3
  console.log(`Number ${x}`)
  x = 5 // don't change this line
  console.log(`Number ${x}`)
}

run_if_main(import.meta, main)
