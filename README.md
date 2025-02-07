# TypeScript Runtime Error Despite Static Typing

This repository demonstrates a scenario where a TypeScript program compiles successfully but throws a runtime error due to type coercion during an addition operation.  Even though TypeScript provides static typing, it doesn't guarantee the complete absence of runtime errors if you have type mismatches.  It's essential to handle potential runtime errors appropriately.

## Bug Description
The `add` function is designed to take two numbers as input and return their sum.  However, it's possible to call the function with a string and a number. The TypeScript compiler will not generate an error because of type coercion to string. This will then cause a runtime error if a number is then added to it. 

## Solution
The solution involves adding runtime type checking to the `add` function to prevent the runtime error.