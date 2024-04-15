let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
/*Có 3 lọai function:
1: function nameFunction
2: var numbers = function (a,b){}
3: var numbers = (a,b)=>{}

*/
function filterEvenNumbers(arr) {
  // TODO - Your code here (1 line)
  var a = arr.filter(num => num % 2 === 0);
  return a;
}

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(arr) {
  //  TODO - Your code here (1 line)
  var a = arr.map((num) => num * num);
  return a;
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
  //  TODO - Your code here (1 line)
  var a = arr.reduce((total, item) => item += total)
  return a;
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15