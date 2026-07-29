| Feature                     | Function Declaration | Function Expression        | Arrow Function         |
| --------------------------- | -------------------- | -------------------------- | ---------------------- |
| Syntax                      | `function greet(){}` | `let greet = function(){}` | `let greet = () => {}` |
| Has Function Name           | ✅ Yes                | ❌ Usually Anonymous        | ❌ Anonymous            |
| Stored in Variable          | ❌ No                 | ✅ Yes                      | ✅ Yes                  |
| Hoisted                     | ✅ Yes                | ❌ No                       | ❌ No                   |
| Can Call Before Declaration | ✅ Yes                | ❌ No                       | ❌ No                   |
| Supports `this`             | ✅ Yes                | ✅ Yes                      | ❌ Uses outer `this`    |
| Short Syntax                | ❌ No                 | ❌ No                       | ✅ Yes                  |
| Modern JavaScript           | ✅ Yes                | ✅ Yes                      | ⭐ Most Common          |



✅ Function Declaration → General reusable functions.

✅ Function Expression → When you want to store a function in a variable or pass it around.

✅ Arrow Function → Modern JavaScript, callbacks, array methods (map, filter, forEach), React, Node.js, and most new codebases.






/*
| Function Declaration             | Function Expression                                                       |
| -------------------------------- | ------------------------------------------------------------------------- |
| Uses `function name()`           | Uses `let x = function()`                                                 |
| Has a function name              | Usually anonymous                                                         |
| Can be called before declaration | Cannot be called before declaration                                       |
| Hoisted                          | Variable exists, but cannot be used before initialization (`let`/`const`) |
*/
