The `functions4.js` exercise involves fixing the `main` function to handle the different cases correctly when calling the `adds_up_n` function. The `adds_up_n` function is a variadic function that accepts any number of arguments of either `string` or `number` type, and it adds them up accordingly. The function throws errors if the arguments are inconsistent in type or if no arguments are provided. To solve this exercise, you need to understand the concept of variadic functions and how they handle different numbers and types of arguments.

### Hint on Variadic Functions and Function Arity:

1. **Variadic Functions:**
   - Variadic functions, also known as variable-arity functions, are functions that can accept a varying number of arguments. In JavaScript, this is achieved using the rest parameter syntax (`...args`).
   - The `adds_up_n` function is a variadic function that accepts any number of arguments using the rest parameter `...n`. This allows it to handle different numbers of arguments flexibly.
   - Inside the function, the `n` parameter is treated as an array containing all the arguments passed to the function.
   - When calling a variadic function, you can pass any number of arguments, and they will be collected into an array within the function.

2. **Argument Types and Consistency:**
   - The `adds_up_n` function expects all the arguments to be of the same type, either `string` or `number`. It throws a `TypeError` if the arguments are inconsistent in type.
   - In the `main` function, you need to consider the different cases when calling `adds_up_n` with various numbers and types of arguments.
   - Pay attention to the error conditions specified in the `adds_up_n` function's JSDoc comments. It throws a `RangeError` if no arguments are provided and a `TypeError` if the arguments are not consistent in type or if they are not of type `string` or `number`.

3. **Adding Up the Arguments:**
   - Based on the type of the arguments, the `adds_up_n` function adds them up accordingly. If the arguments are of type `string`, it concatenates them. If the arguments are of type `number`, it sums them up.

4. **Fixing the `main` Function:**
   - In the `main` function, there are four calls to the `adds_up_n` function with different combinations of arguments.
   - The first two calls are correct and should work as expected, adding up numbers and concatenating strings, respectively.
   - The third and fourth calls, however, mix `string` and `number` arguments, which will throw a `TypeError` based on the implementation of `adds_up_n`.
   - To fix the `main` function, you need to ensure that the arguments passed to `adds_up_n` are consistent in type within each function call.

Consider how you can modify the arguments passed to `adds_up_n` in the `main` function to ensure they are consistent in type. Think about the expected behavior for each function call and adjust the arguments accordingly. Remember, the goal is to have the `main` function execute without throwing any errors.
