// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Check if the array includes the number 5

const hasFive = numbers.includes(5);
console.log(hasFive)

// If true, filter out numbers less than 5
const filtered = numbers.filter(num => num >= 5 );
console.log(filtered);

// Then square each number in the resulting array

const squared = filtered.map(num => num * num);


// Output the final array
console.log(squared);

// Output a message if the number 5 is not in the array
console.log("The number 5 is in the array.");
