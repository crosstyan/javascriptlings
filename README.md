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

- [variable](exercises/variable)
- [function](exercises/function)
- [if](exercises/if)

## What am I opinionated about?

- [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)
Paradigm first, which means I probably won't even use control flow statements
(except `if` and `else`), and encourage the using of `map`, `filter`, `reduce`,
etc. Emphasizing the immutability of data and the use of pure functions.
- [Type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
first.  Every function should have type annotation with
[JSDoc](https://jsdoc.app/).  Type safety is introduced early and emphasized.
Although no [TypeScript](https://www.typescriptlang.org/) should be used since
I don't want to involve any compilation/preprocessing.
- Self-contained exercises. No external dependencies are needed to run the exercises.
You just type `node <exercise>`. I know it might cause the duplication of helper functions
but it's a good trade off to keep the execution simple (until modules are necessary)
