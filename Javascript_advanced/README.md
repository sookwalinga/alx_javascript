### Javascript advanced

1. **Lexical Scoping in JavaScript**:
   Lexical scoping refers to the way variable scope is determined in JavaScript based on the physical structure of the code. In lexical scoping, the scope of a variable is defined by its location within the source code, and inner functions can access variables from their containing (parent) functions.

2. **Closure in JavaScript**:
   A closure is a function that retains access to variables from its containing lexical scope, even after that scope has exited. Closures are created when a function is defined within another function and captures variables from the outer function, allowing those variables to persist and be used within the inner function.

3. **How to Use Closure**:
   To use closure, define a function inside another function and access variables from the outer function within the inner function. This inner function can then be returned or passed around to maintain access to the outer function's variables.

4. **How to Chain Different Closures**:
   You can chain closures by returning functions from other functions. Each returned function can capture the state of the previous one, allowing you to build a chain of operations or transformations.

5. **How to Simulate Private Methods with Closure**:
   You can simulate private methods in JavaScript by encapsulating a function within another function. The inner function can access variables in the outer function's scope, effectively making them private. The outer function can return the inner function, limiting access to the encapsulated functionality.

6. **Execution Stack Order with JavaScript**:
   JavaScript uses a Last-In-First-Out (LIFO) execution stack order. Functions are pushed onto the stack when they are called and popped off when they finish executing. This stack order helps manage function calls and their associated scope.

7. **How to Use Binding**:
   In JavaScript, binding refers to setting the context (the value of `this`) for a function. You can use methods like `bind()`, `call()`, or `apply()` to explicitly set the `this` value within a function, ensuring that it references a specific object.

8. **How to Use Callbacks**:
   Callbacks are functions passed as arguments to other functions, typically to be executed after some asynchronous operation or event. Callbacks are used to handle asynchronous tasks, such as making HTTP requests, and ensure that code executes in the desired order when the task is complete.
