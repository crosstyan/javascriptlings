
/**
 * @summary zip two arrays
 * @template T the type of the first array
 * @template U the type of the second array
 * @param {Array<T>} a an array of type T
 * @param {Array<U>} b an array of type U
 * @returns {Array<[T, U]>}
 */
const zip = (a, b) => a.map((k, i) => [k, b[i]])

/**
 * @param {number} start the start of the range (inclusive)
 * @param {number} end the end of the range (exclusive)
 * @param {number} [step=1] the step of the range
 * @returns {Generator<number, void, unknown>}
 * @summary return a generator that yields numbers from start to end.
 * 
 * You can use this function freely without modifying it.
 * This function is correctly implemented so don't change it.
 * 
 * You are not expected to understand how this function works for now.
 * Learn to ignore the details of the implementation and focus on the usage/interface.
 */
function* range(start, end, step = 1) {
  const names = ["start", "end", "step"]
  const values = [start, end, step]
  zip(names, values)
    .map(([k, v], index) => /**@type {const} */([k, typeof v, index]))
    .forEach(([k, t, i]) => {
      if (t !== "number") {
        throw new TypeError(`argument '${k}' (at ${i}) should be a 'number'. Got '${t}' instead.`)
      }
    })
  if (start > end) {
    throw new RangeError("start should be less than end")
  }
  for (let i = start; i < end; i += step) {
    yield i
  }
}

export { range, zip }
