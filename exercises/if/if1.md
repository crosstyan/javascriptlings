For the `if1.js` exercise, you're tasked with completing the `bigger` function to return the larger of two numbers, or either number if they are equal. This exercise encourages you to think about control flow using `if` statements or the ternary operator, as well as the importance of type checking in JavaScript functions.

### Hint for Solving `if1.js`:

1. **Using an `if` statement:**
   - Consider how an `if` statement can be used to compare `a` and `b`. What condition would you check for to determine if `a` is greater than `b`? And how would you handle the case where `a` and `b` are equal?

2. **Using the ternary operator:**
   - The ternary operator (`condition ? exprIfTrue : exprIfFalse`) provides a concise way to perform conditional logic. Can you apply this to succinctly choose between `a` and `b` based on their values?

3. **Type Checking:**
   - Reflect on why it might be important to check the types of `a` and `b`. What happens if the function is called with non-numeric arguments? How does JavaScript handle comparisons and operations on mixed or incorrect types? Consider using `typeof` to ensure that `a` and `b` are both numbers before proceeding with the comparison. This can prevent unexpected behavior and ensure your function behaves predictably.

4. **Experimenting with Different Types:**
   - Try calling your `bigger` function with different types of arguments (e.g., strings, booleans, objects) and observe the behavior. Does it work as expected? This can provide insight into why type checking is a valuable practice in JavaScript.

Remember, the goal of this exercise is not only to implement the function correctly but also to understand the underlying concepts of control flow, conditional logic, and type safety in JavaScript.
