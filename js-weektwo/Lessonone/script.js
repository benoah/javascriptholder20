/*
Callback functions - functions as arguments
Previously, we've passed different kinds of values into function arguments.
You can enter the code examples below in to the browser console to follow along, or save them in a .js file
*/

function logTheArgument(someFunction) {
    console.log(someFunction);
}

//We've passed in strings and numbers:

logTheArgument("Hello");
// Hello

logTheArgument(50);
// 50

// In module 1, lesson 4, we passed in arrays of objects and looped through them:
function makeGenres(genreArray) {
    // loop through the genreArray array
}

// create an empty array and pass it in to the makeGenres function
const genres = [];
makeGenres(genres);

// We can also pass functions in as arguments, and call the function 
// within the parent function. These are called callback functions.
function logTheArgument(someFunction) {
    console.log(someFunction);
}

// call the logTheArgument function and pass in an anonymous function
logTheArgument(function() {
    console.log("I am in the anonymous function");
});


//Full example:

function logTheArgument(someFunction) {
    someFunction();
}

// assign the function to a variable
const myFunction = function() {
    console.log("I am in the function stored in the variable");
};

// call the logTheArgument function and pass in the variable whose value is a function
logTheArgument(myFunction);

//You can also declare a function and then pass it in:

// declare the function
function myFunction() {
    console.log("I am in the function stored in the variable");
};


//full example:
function logTheArgument(someFunction) {
    someFunction();
}

// declare the function
function myFunction() {
    console.log("I am in the function stored in the variable");
};

// call the logTheArgument function and pass in the declared function
logTheArgument(myFunction);



