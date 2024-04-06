/**
 * @param {number} start the start of the range (inclusive)
 * @param {number} end the end of the range (exclusive)
 * @returns {Generator<number, void, unknown>}
 * @summary return a generator that yields numbers from start to end.
 * 
 * You can use this function freely without modifying it.
 * This function is correctly implemented so don't change it.
 * 
 * You are not expected to understand how this function works for now.
 * Learn to ignore the details of the implementation and focus on the usage/interface.
 */
function* range(start, end) {
  if (start === undefined) {
    throw new TypeError("start is required")
  }
  if (end === undefined) {
    throw new TypeError("end is required")
  }
  if (typeof start !== "number") {
    throw new TypeError("start should be a number")
  }
  if (typeof end !== "number") {
    throw new TypeError("end should be a number")
  }
  if (start > end) {
    throw new RangeError("start should be less than end")
  }
  for (let i = start; i < end; i++) {
    yield i
  }
}

export { range }
