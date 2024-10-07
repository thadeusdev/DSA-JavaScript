/**
 * Function calls can be made recursively in JavaScript. The factorial() function defined earlier can also be written recursively, like this:
 */
function factorial(number){
    if (number == 1){
        return number;
    }
    else{
        return number * factorial(number - 1)
    }
} 
console.log(factorial(5));

/**
 * When a function is called recursively, the results of the function’s computation are tem‐
porarily suspended while the recursion is in progress. To demonstrate how this works,
here is a diagram for the factorial() function when the argument passed to the func‐
tion is 5:

        5 * factorial(4)
        5 * 4 * factorial(3)
        5 * 4 * 3 * factorial(2)
        5 * 4 * 3 * 2 * factorial(1)
        5 * 4 * 3 * 2 * 1
        5 * 4 * 3 * 2
        5 * 4 * 6
        5 * 24
        120

 */