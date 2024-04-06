import { fileURLToPath } from "url"


/**
 * @summary - Run the given function if the file is executed directly.
 * @param {ImportMeta} meta - The import.meta object.
 * @param {Function} fn - The function to run.
 * @param {Array<any> | null} args - The arguments to pass to the function.
 * @see https://stackoverflow.com/questions/34842738/if-name-main-equivalent-in-javascript-es6-modules
 */
const run_if_main = (meta, fn, args = null) => {
  if (process.argv[1] === fileURLToPath(meta.url)) {
    if (args === null) {
      fn()
    } else {
      fn(...args)
    }
  }
}

export { run_if_main }
