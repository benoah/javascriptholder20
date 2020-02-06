// Lesson 2

// Asynchronous code

/*
So far all the code we've written has been executed or returned a value as soon as it's been encountered in the program.

If you log a message
*/

console.log("I am the first log");


// the message is displayed as soon as the code is run.
// If you declare a function

function logMessage() {
    console.log("Function called");
}

// the function is run as soon as it's called:

logMessage();
// Function called

// The following will be executed after the function 
// has been called.

console.log("I am the second log");


// Running all the statements above will log:

// I am the first log
// Function called
// I am the second log

/*
The code is called statement by statement and each statement
 waits for the previous one to finish before running. 
This is called synchronous code.
*/

modul assignment 2



