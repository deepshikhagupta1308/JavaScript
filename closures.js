/*
What is a closure?

-  When a function returns another function with its lexical scope(parent scope) variables is known as closure.


Example : 
- The parent() creates a local variable "a" and a function named as "child()". 
- child() function is an inner function inside the "parent()" function & it is only accesible within the scope of "parent()". 
- The "child()" function has no local variables.
- The inner function can access the outer function's variable even if the parent is called & removed from the memory scope.
- So the function child() can access the variable 'a', which is declared and defined in parent() even after the execution & this concept is known closure.

*/

function parent() { 
    var a = 10; // "a" is a local variable created by parent
    
    return function child() { 
        return a; 
    }; 
} 
var b = parent(); // parent is called &returned the result 
console.log(b()); // b function will still be holding the context of a = 10
