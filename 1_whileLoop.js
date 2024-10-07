/**
 * When we want to execute a set of statements while a condition is true, we use a while loop
 */
let number = 1;
let sum = 0;
while (number < 11){
    sum += number;
    number++;
}
console.log(sum);