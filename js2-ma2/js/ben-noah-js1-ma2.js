// Module Assignment 2

// LEVEL1

// question 1(reference: lesson1 )

// Create a function expression by assigning an anonmyous function
// to a variable called myFunctionExpression.
// The function should console log your name.

const myFunctionExpression = function() {
  console.log("my name is", "", "ben");
};

myFunctionExpression();

/*
let myFunctionExpression = function(){
  console.log("ben");
}
myFunctionExpression();
*/

/*
  Question 2
  Refer: lesson 2
  Select the button in the HTML below by its class. 
  Add a click event listener. 
  The callback function passed to the event listener should log the sentence I was clicked.
  You can pass the function in directly, declare it and pass 
  it in by its name or assign it to a variable and pass it in by the variable name.
  */

//  Select the button in the HTML below by its class.
let buttonClick = document.querySelector(".btn");

// Add a click event listener.
function alertClick() {
  console.log("I was clicked"); //   The callback function passed to the event listener should log the sentence I was clicked.
}
alertClick(); //You can pass the function in directly, declare it and pass
//it in by its name or assign it to a variable and pass it in by the variable name.
buttonClick.addEventListener("click", alertClick);

/*
  Question 3
  Refer: lesson 2
  Select the input in the HTML below by its id. 
  Add a keydown event listener. 
  The callback function passed to the event listener should log the value of the key that was pressed.
  */

//   Select the input in the HTML below by its id.
const KeyPressed = document.querySelector("#firstName");
//   Add a keydown event listener.
function firstName(event) {
  console.log(event);
}
// The callback function passed to the event listener should log the value of the key that was pressed.
document.addEventListener("keydown", firstName);

/*
  Question 4
  Refer: lesson 2 / 3
  Select the button in the HTML below by its tag. 
  Add a mouseover event listener. 
  The callback function should
  add a class called hover to the button.
  */

const button = document.querySelector("button");
button.addEventListener("mouseover", AddHover);

function AddHover() {
  button.classList.add("hover");
  console.log("hover");
}

/*
  Question 5
  Refer: lesson 2 / 3
  Select the button in the HTML below by its data attribute 
  and add a mouseout event listener to it. 
  The callback function should remove the class called hover from the button.
  */

const buttonOut = document.querySelector("[data-animal='dog']"); // element
buttonOut.addEventListener("mouseout", RemoveClass);

function RemoveClass() {
  buttonOut.classList.remove("hover");
  console.log("remove");
}

/* 
  Question 6
  Refer: lesson 3
  Select all the li tags from the HTML below. 
  
  
  Using a loop, add a mouseover event listener to each tag.
  
  The callback function should log the value of the data 
  attribute on each element when the cursor moves over it.
  */
  
 const listItems = document.querySelectorAll("li");
  
 for (i = 0; i < listItems.length; i++) {
   const liElement = listItems[i];
   liElement.addEventListener("mouseover", logDataAttribute);
   function logDataAttribute() {
     const dataAttribute = liElement.dataset.animal;
     console.log(dataAttribute);
   }
 }
 
 /* 
 Question 7
 Refer: lesson 3
 Convert the if-else-if statement below to a switch statement. 
 Use the code inside the else block in the default 
 block in the switch.
 */
 
 
 
 
 const animal = "";
 
 
 
 switch(animal){
 
     case "cow":
         console.log("Moo");
         break;
 
     case "cat":
         console.log("Meow");
         break;
 
     case "bird":
         console.log("Tweet");
         break;
 
         default:
         console.log("Harrumph");
         break;
 
       //  console.log('hello')
     };
 
 
 /* 
 Question 8
 Refer: lesson 4
 Convert the for loop code below to a forEach loop.
 */
 
 const sheep = ["Malcolm", "Anders", "Marie"];
 
 
 sheep.forEach(function(sheep) {
     console.log(sheep);
 });
 
 /* 
 
 Question 9
 Refer: lesson 4
 Create a timer that logs the word hello every half a second. 
 It must stop after its logged the word 6 times.*/
 
 
 function logHello() {
     console.log("hello");
 
     if(counter === 5) {
         clearInterval(intervalId);
     }
     counter++;
 }
 
 let counter = 0;
 const intervalId = setInterval(logHello, 500);
 
 /* 
 Question 10
 Refer: lesson 4
 Select the div from the HTML below.
 Write code that updates the div's text 
 to say Text updated after waiting 2 seconds. 
 You can use either innerText or innerHTML to update the text.
 */
 
 const timeoutContainer = document.querySelector(".container");
 
 // the function to run after the delay
 function updateDiv() {
     timeoutContainer.innerHTML = "This was set by the set Timeout function"
     
 }
 
 // 2000 milliseconds = 2 seconds
 setInterval(updateDiv, 2000);
 
 
 /*
 
 // timen
 
 function logTime(){
     console.log(new Date());
     if(counter === 4){
         clearInterval(intervalId);
     }
     counter++
 }
 
 let counter = 0;
 const intervalId = setInterval(logTime, 1000);
 
 
 // setTimeout
 
 setTimeout(function()){
     // do stuff
 };
 */