# JavaScriptlings

Inspired by [rustlings](https://github.com/rust-lang/rustlings). Small exercises to get you used to reading and writing (opinionated and typed) JavaScript code.

## Getting Started

### Clone the Repository

Clone the repository (I assumed that [git](https://git-scm.com/) is installed on your machine):

```bash
git clone https://github.com/crosstyan/javascriptlings.git
```

### Install a JavaScript Runtime

Install a JavaScript runtime like [Node.js](https://nodejs.org) (I believe that [Deno](https://deno.com/) and [Bum](https://bun.sh/) also work, although I haven't tested them):

I'm assuming we're using [Node.js](https://nodejs.org) for now.

### Run the Exercises

Write the exercises in the `exercises` directory.

Run the exercises with:

```bash
node <exercise>
```

for example, you want to play with the [`variable1.js`](exercises/variable/variable1.js) exercise:

```bash
node exercises/variable/variable1.js
```

You're expected to be greeted with a `ReferenceError` because the variable `x` is not declared.

### Fix the Code

If you find difficulties in fixing the code, you can check the `<exercise>.md`. For example, you want to check the hint for `variable1.js` then find the [`variable1.md`](exercises/variable/variable1.md).

```bash
cat exercises/variable/variable1.md
```

## The order of the exercises

- [x] [variable](exercises/variable)
- [x] [function](exercises/function)
- [x] [if](exercises/if)
- [ ] types and type notation
- [ ] module, including [CommonJS](https://en.wikipedia.org/wiki/CommonJS) (just
mention the history of it and how to identify one) and [ES6
module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [ ] array (map, filter, reduce) might include a bit of `for of` loop (but you
can always use `forEach`) and intentionally leave out traditional C like `for`
loop. [Spread
operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) should be included.
- [ ] a taste of recursion (inspired by [the little schemer](https://mitpress.mit.edu/books/little-schemer))
- [ ] function revisited (currying, partial application, higher order function and closure)
- [ ] object (how do I define an dataclass/struct like object in JavaScript?
Preferably immutable) Intentionally leave out `class` syntax (we don't need it
as long as we have the type definition) 
- [ ] async (callback, promise, async/await)

## Beyond the language

- [ ] package manager (`npm` and `corepack`)
- [ ] bundler (`esbuild`)
- [ ] [TypeScript](https://www.typescriptlang.org/) should be easy if `JSDoc` is actively used
- [ ] frontend dev server (`vite`)
- [ ] DOM manipulation (vanilla JS)

## What am I opinionated about?

- [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)
Paradigm first, which means I probably won't even use control flow statements
(except `if` and `else`), and encourage the using of `map`, `filter`, `reduce`,
etc. Emphasizing the immutability of data and the use of pure functions.
- [Type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
first.  Every function should have type annotation with
[JSDoc](https://jsdoc.app/).  Type safety is introduced early and emphasized.
Although no [TypeScript](https://www.typescriptlang.org/) should be used since
I don't want to involve any compilation/preprocessing. (might be a good idea to use [ts-node](https://www.npmjs.com/ts-node) though)

## Note for myself

```bash
node  --import ./exercises/if/if1.js
```

> alternatively use dynamic import: `const { main } = await import("./exercises/if/if1.js")`
