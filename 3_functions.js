/**
 * JavaScript provides the means to define both value-returning functions and functions that don’t return values (sometimes called subprocedures or void functions).
 */

// value returning function
function factorial(number){
    let product = 1;
    for (let i = number; i >= 1; i--){
        product *= i;
    }
    return product;
}
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));

//  A subprocedure or void function in JavaScript
function curve(arr, amount){
    for (let i = 0; i < arr.length; i++){
        arr[i] += amount
    }
}

const grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades);