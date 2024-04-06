// if1.js
//
// Run the code and observe the failing test cases.
// try to solve the exercise in two ways

// I AM NOT DONE

/**** Helper Functions DO NOT MODIFY ****/

/**
 * @summary - An error that is thrown when an assertion fails.
 */
class AssertionError extends Error {
  /**
   * @param {string} message 
   */
  constructor(message) {
    super(message)
    this.name = "AssertionError"
  }
}

/**
 * @summary - Asserts that a condition is true.
 * @param {boolean} condition - The condition to check.
 * @param {string} message - The message to display if the condition is false.
 */
const assert = (condition, message) => {
  if (!condition) {
    throw new AssertionError(message)
  }
}

/**
 * @summary - Asserts that two values are equal.
 * @template T - The type of the values.
 * @param {T} actual - The actual value.
 * @param {T} expected - The expected value.
 * @param {string} message - The message to display if the values are not equal.
 */
const assertEqual = (actual, expected, message) => {
  assert(actual === expected, `${message} lhs=${actual} rhs=${expected}`)
}

/*** End of Helper Functions ***/

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

main()