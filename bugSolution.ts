function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }
  return a + b;
}

// This will now throw a compile-time error because TypeScript is detecting the mismatch
// let result = add("1", 2);

let result1 = add(1,2);
console.log(result1); // This will execute without an error

let result2 = add(1, "2"); // This will throw a compile time error
console.log(result2);