// Challenge 5 Solution
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Define the function doubleNumbers
function doubleNumbers(arr){
  const result = arr.map(num => num * 2) ;
  return result
}
// Call the function with the numbers array
 let doubled = doubleNumbers(numbers);
// Console log the new array
console.log(doubled);
console.log(numbers)
