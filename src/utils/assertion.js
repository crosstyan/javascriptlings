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
  assert(actual === expected, `"${message}" lhs=${actual}; rhs=${expected}`)
}

export { assert, assertEqual, AssertionError }
