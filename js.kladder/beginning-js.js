//lesson 1____________________________________________________________________

// Add <script></script> tags to the HTML, right before the closing </body> tag. Inside the tags add the console logs from above:
<script>console.log("hello world"); console.log(10 + 5);</script>;
// </body>
// </html>

// Adding an external JavaScript file
// <script src="js/script.js"></script>

// Inside js/script.js add the console logs from above:
console.log("hello world from an external js file");
console.log(10 + 5);

//Formatting
// example of poorly formatted and indented code:
console.log(" hello");
console.log("world");

//This is an example of well-formatted and indented code:
console.log(" hello");
console.log("world");

// Comments can be made like this

// this is a single-line comment


// create a for loop here that counts from 1 to 10

/*
this is a multi-line comment
notice that the / and * are inverted when the comment is closed
*/

// this is a single-line comment
// with another single-line comment

// create a for loop here that counts from 1 to 10

// lesson 2__________________________________________________________________________________

// Declaring variables
var pet;

//Strings

var pet = "dog";

console.log(pet);

//Create a variable called pet with a value of "cat"
var pet="cat";

//Letter case matters in JavaScript. "Cat" is not equal to "cat". In the question above, if you give the variable a value of "Cat", the code checker will complain that's it looking for "cat".

//In JavaScript we would say
// "Cat" is not equal to "cat"
"Cat" !== "cat"


// Joining strings together
// We can join strings together using the + sign. 
// This is technically called concatenation but we'll call it joining.

var letters = "a" + "b";
console.log(letters);
 // "ab"

 //Let's assign those string values to variables and then join them:
var letter1 = "a";
var letter2 = "b";

var letters = letter1 + letter2;

console.log(letters);
 // "ab"

 // Join the strings "rab" and "bit" and assign them to a variable called animal
 var animal="rab"+"bit";

 //Anything inside quotes is a string, even numbers. The variable seven below has a string value.
 var seven = "7";

 //Create a variable called four with a string value of "4"
 var four="4";

 // Numbers
 //Numbers in JavaScript can be both integers (whole numbers) and decimals.

var integer = 8;
var decimal = 7.1;

//Basic arithmetic operators
//We can use the following operators with numbers in JavaScript.

// Operator              	Name          	       Example
//   +	                    addition	           3 + 2
//   -	                    subtraction	           7 - 1
//   *	                    multiplication	       6 * 4
//   /	                    division	           9 / 3
//   %	                    modulus	               5 % 2

// Booleans
// Boolean values are either true or false.
var isLoggedIn = true;

//Note that there are no quotes around boolean values.
//The variable badBoolean below has a string value, so it's not a boolean.
// var badBoolean = "true";

//The variable properBoolean below has a boolean value.

var properBoolean = true;

//Create a variable called lightIsOn and initialise it with a value of false
var lightIsOn =false;

// diverse fra forelesning
var firstName = "Sally";
var lastName = "Smith";

console.log(firstName);
console.log(LastName);
//or
console.log(firstName + lastName);

// to get space or combined
console.log(firstName + " " + lastName);
//or 
console.log("Her name is " + firstName + " " + lastName);

//nr 

var sallysApples = 10;
var janesApples = 8;


console.log(sallysApples);
//or
console.log(sallysApples + janesApples);
console.log(sallysApples > janesApples);

// Checking data types 
// We can use the typeof operator to check what type of data a variable holds.
// We can use it with or without brackets.
var colour = "red";

typeof(colour);
// "string" console tell you the answer of type

typeof("blue");
// "string" console tell you the answer of type

typeof 14;
// "number" console tell you the answer of type

typeof false;
// "boolean" console tell you the answer of type

//Write code that checks the type of the value: 23

typeof 23;
// "number" console tell you the answer of type










