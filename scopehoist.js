var name = "John";

(function() {
  console.assert(name === undefined) // 1 The variable must be "undefined" because one has not been established until after the assertion is asked; therefore, it will not go out of the function to find it since it's located later.

  var name = "Jane";  // The variable name is replace with "Jane", but only within this function
  // removing the "var" and making this "name = 'Jane';", then the first assert will now see "John" because no variable is named within the function, so it goes outside the function to find a variable named "name", which is sees in global scope. "name = 'Jane';" is simply an assignment of new value to "name".

  console.assert(name === "Jane") // 2 Therefore, the assert passes here with "name === 'Jane'" because the variable within the function is established as "var name = 'Jane'".

})()

console.assert(name === "John") // 3  The variable remains the global state "John" because the function only fulfills within itself the variable assignment
