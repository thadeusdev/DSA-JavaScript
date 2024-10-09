//  the following loop assigns the values 1 through 100 to an array:
const nums = [];
for (let i = 0; i < 100; i++){
    nums[i] = i+1;
}
// console.log(nums);

// accessing all the elements of an array sequentially is much easier using a for loop
const numbers = [1,2,3,5,8,13,21];
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
// console.log(sum);

// creating arrays from strings
let sentence = "the quick brown fox jumped over the lazy dog";
let words = sentence.split(" ");
// console.log(words)
for (let i = 0; i < words.length; i++){
    console.log("word " + i + ": " + words[i]);
}