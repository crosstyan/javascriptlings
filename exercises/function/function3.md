The `functions3.js` exercise involves modifying the function signature of `adds_up_4` to handle cases where it is called with fewer than four arguments, without changing the function's implementation. The current implementation expects four numbers and throws a `TypeError` if any of the arguments are missing or not of type "number". To solve this exercise, you need to consider the use of default parameters and the concept of function arity.

### Hint on Default Parameters and Function Arity:

1. **Default Parameters:**
   - Default parameters allow you to specify default values for function arguments that are not explicitly passed during the function call. They provide a way to handle missing arguments gracefully and ensure the function behaves predictably.
   - In the `adds_up_4` function, you can see that the parameter `d` is already assigned a default value of `0`. This means that if the function is called with only three arguments, `d` will automatically take the value of `0`.
   - Consider how you can apply the concept of default parameters to the other parameters (`a`, `b`, and `c`) to handle cases where the function is called with fewer than four arguments.

2. **Function Arity and Argument Handling:**
   - The arity of a function refers to the number of arguments it expects or accepts. In the case of `adds_up_4`, it currently has an arity of 4, expecting four arguments.
   - However, the exercise requires the function to handle being called with fewer arguments, specifically just one argument in the `main()` function.
   - Think about how you can modify the function signature to allow for a flexible number of arguments while still maintaining the function's core behavior of adding up the provided numbers.
   - Consider the order in which default parameters should be defined to ensure that the function can handle different combinations of missing arguments correctly.

3. **Type Checking and Error Handling:**
   - The current implementation of `adds_up_4` includes type checking to ensure that all arguments are of type "number". It throws a `TypeError` if any argument is not a number.
   - When modifying the function signature to handle missing arguments, make sure to maintain this type checking behavior for the arguments that are provided.
   - Think about how you can leverage the existing type checking logic and error handling to ensure that the function still validates the types of the provided arguments correctly.

Remember, the goal is to modify the function signature of `adds_up_4` to handle being called with fewer than four arguments, specifically just one argument in the `main()` function, without changing the function's implementation. Use default parameters strategically to provide default values for missing arguments while preserving the function's behavior and type checking.
