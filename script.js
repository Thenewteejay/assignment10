/*
Task 1: 
1. Create a variable called number and assign it any integer.
2. Use an if-else block to print whether the number is positive, negative, or zero using console.log()
*/
/* Solution */
console.log('---------------------- Task 1 -------------------');

let number = 0;

if (number > 0) {
    console.log("The Number is positve");
} else if (number < 0) {
    console.log("The Number is negative");
} else {
    console.log("The Number is Zero");
}

/*
 Task 2:
 1. Create a variable called day and assign it the name of any day (e.g.,
 'Monday').
 2. Use a switch statement to print whether the day is a weekday or
 weekend

*/
console.log('---------------------- Task 2 -------------------');
let day = "Saturday"
switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log("Oops!!! It's a Weekday");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`Hurray!!!! It's Weekend`);
        break;
    default:
        console.log("Invalid day of the week");
        break;
}
/*
Task 3:
 1. Write a for loop that prints numbers from 1 to 10.
 2. Use console.log() to print each number in the loop.

*/
console.log('------------------- Task 3 ----------------------');
let length = 10;
for (let i = 1; i <= length; i++) {
    console.log("number " + i);
};

/*
 Task 4:
 1. Create a variable called count and initialize it to.
 2. Use a while loop to print the multiplication table of 5 (e.g., 5 × 1 = 5, 5 × 2 =10) until 5 × 10.
 Use console.log() to display each step.
*/
console.log('------------------ Task 4 ------------------------');
let count = 1;
while (count <= 10) {
    console.log(`5 * ${count} = ${5 * count}`);
    count++;
}
/*
Task:
 1. Declare and initialize a number with value of 0.
 2. Write a do-while loop that Checks if that number is greater than 10.
 3. Keep Incrementing the number by 1.
 4. Use console.log() to print "The number is: [number]".
*/
console.log('------------------- Task 5 ---------------------');
let number2 = 0;
do {
    console.log(`The number is: ${number2}`);
    number2++;
}
while (number2 <= 10);

/*
Task 6:
 1. Write a for loop that prints numbers from 1 to 10.
 2. Use a break statement to exit the loop when the number 5 is reached.
 3. Use console.log() to print each number.
*/
console.log('------------------- Task 6 ---------------------');
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
/*
Task 7:
 1. Write a for loop that prints only even numbers between 1 and 20.
 2. Use a continue statement to skip odd numbers.
 3. Print each even number using console.log()
*/
console.log('------------------- Task 7 ---------------------');
for (let i = 1; i <= 20; i++) {
    if (i % 2) {
        continue;
    }
    console.log(i);
}
/*
Task 8:
 1. Write a function that takes two numbers as parameters and divides the
 first by the second.
 2. Use try-catch-finally to handle division by zero.
 3. Print the result if the division is successful, otherwise print an error
 message
*/
console.log('------------------- Task 8 ---------------------');

function divideNumber(x, y) {
    try {
        if (y === 0) {
            throw new Error("Division by zero is not allowed");
        }
        let result = x / y;
        console.log(result);
    } catch (error) {
        console.log(`Error occurred: ${error}`);
    } finally {
        console.log('Operation Completed.');
    }
}
// divideNumber(84, 21);
divideNumber(7, 0);
/*
 Task 9:
 1. Write a function called multiply that takes two numbers as parameters
 and returns their product.
 2. Call the function with any two numbers and print the result using
 console.log().
*/
console.log('------------------- Task 9 ---------------------');

let multiplyNumber = (x, y) => {
    let value = x * y;
    return value;
}

let result = multiplyNumber(8, 2);
console.log(result);

/*
 Task 10:
 1. Write a program that prints numbers from 1 to 30.
 2. Print 'Fizz' if the number is divisible by 3.
 3. Print 'Buzz' if the number is divisible by 5.
 4 .Print 'FizzBuzz' if the number is divisible by both 3 and 5.
 5 .Use console.log() to print each result
*/
console.log('------------------- Task 10 ---------------------');
for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} is divisible by 3 and 5.   FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} is divisible by 3.   Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} is divisible by 5.   Buzz`);
    } else {
        console.log(i);
    }

}