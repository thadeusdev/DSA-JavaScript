/**
 * When we want to execute a set of statements a specified number of times, we use a for loop. here a for loop to sum the integers 1 through 10.
 */

// Summing integers using a for loop
let number = 1;
let sum = 0;
for (let number = 1; number < 11; number++){
    sum += number;
}
console.log(sum);

// Using a for loop with an array
const numbers = [3, 7, 12, 22, 100];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);