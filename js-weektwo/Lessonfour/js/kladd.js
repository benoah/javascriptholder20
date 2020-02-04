// Lesson 4 - forEach, setInterval, setTimeout


// forEach

/*
So far we've used for loops to loop (iterate) over arrays.
We can also use the forEach method. We'll see how it works using the array below.
*/

const cats = ["Blob", "Harold", "Slim"];

// This is how the code would look using a for loop:

for(let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

// This is what it would look like using a forEach:

cats.forEach(function(cat) {
    console.log(cat);
});


// The forEeach method takes a callback function as an argument. 
//The function runs on every item in the array.
// We could define the function first and then pass it in:

function handleEachCat(cat) {
    console.log(cat);
}

cats.forEach(handleEachCat);


/*
The callback function receives each item in the array as an argument. 
We've called this argument cat because the array is called cats but it can be called anything:
*/
function handleEachCat(item) {
    console.log(item);
}


/*
The item argument is how we get access to each item in the array,
and is equivalent to the cats[i] part in the for loop code.
If you run the for loop code and then the forEach version,
you will see they both log each item in the array.

Blob
Harold
Slim
*/

// Let's look at an example that uses forEach on an array of objects:

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
        age: 7
    },
    {
        name: "Slim",
        age: 21
    }
];

function handleEachCat(item) {
    console.log(item.name, item.age);
}

cats.forEach(handleEachCat)


/*
The above code logs the name and age of each cat item in the array.

Let's rewrite the makeGenres function from Module 1, 
Lesson 4 to use a forEach. We'll pass the function directly into the method without declaring it first.
genre is a good name for the argument.
*/

function makeGenres(genreArray) {

    let genreHTML = "";

    genreArray.forEach(function(genre) {
        genreHTML += `<a class="genre">${genre.name}</a>`;
    });

    return genreHTML;
}
/*
You can access the item's index by passing in a second argument to the callback function. 
Remember, an array's index begins at 0.
*/

function handleEachCat(item, index) {
    console.log("name: " + item.name + " index: " + index);
}


// DATE

/*
The Date object provides a way to work with dates
and calling new Date()will return the current date, time and timezone.
*/
console.log(new Date());

// We will look at how to format dates when we add the release date to the game cards.

// SETINTERVAL 

/*
The setInterval method creates a timer that repeatedly calls a function at a specified interval.

It has two required arguments:

1. the function to be executed
2.the delay - the interval in milliseconds (thousands of a second) between function executions
Let's log the current time every second.

First we'll create the function that logs the time:
*/

function logTime() {
    console.log(new Date());
}
// Next we'll pass the function and the number 1000 to setInterval. 1000 milliseconds is 1 second.


setInterval(logTime, 1000);


/*
f you run the code above you will see the current time logged every second.
 Increase or decrease the milliseconds to see it in action.

This code will keep running as long as the browser tab it's in is open. 
It's not a good idea to have code endlessly runnning like this - we need a way to stop it.

The return value from setInterval is a number value used to indentify the timer 
that is created by setInterval.

If we assign the return value to a variable, we can use that variable to cancel the timer 
and stop futher execution of the function.

The timer's id will be stored in intervalId:
*/
const intervalId = setInterval(logTime, 1000);


/*
We want to stop the timer after the function has been called 5 times.
 We'll create a variable and give it a value of 0 and then increment 
 (add one to it) every time the function is called. 
After the function has been called five times we'll cancel the timer.
*/
function logTime() {
    // first log the current date/time
    console.log(new Date());

    // if the counter is equal to 4 it means the function has been called 5 times (because we started the counter at 0)
    // cancel the timer - the logTime function won't be called again
    if(counter === 4) {
        clearInterval(intervalId);
    }

    // add one to the counter variable
    // this is shorthand for count = count + 1
    counter++;

}

// this is the variable we'll increment and use to check how of often the function has been called
let counter = 0;

// The timer's id will be stored in `intervalId`:
const intervalId = setInterval(logTime, 1000);

//  In index.html, there is a div with a counter class: <div class="counter"></div>
/*
Let's use setInterval to change the innerHTML of this div to be the value of a counter variable.

First we'll select the div using querySelector:
*/
const counterContainer = document.querySelector(".counter");

// Then we'll create the function (that will update the div's innerHTML) and the counter variable:

function updateDiv() {
    // set the div's innerHTML property to be the counter's value
    counterContainer.innerHTML = counter;
    counter++;
}

// we'll start the counter at 1
let counter = 1;

//Now we'll use setInterval to call the function every one-and-a-half seconds:
setInterval(updateDiv, 1500);

/*
Run this code and you'll see the counter variable's value is displayed inside the div.

We don't want this to run forever, so let's cancel it after it counts to 4:
*/

// FULLCODE 

const counterContainer = document.querySelector(".counter");

function updateDiv() {
    counterContainer.innerHTML = counter;
    
    // cancel the timer after the counter reaches 4
    if(counter === 4) {
        clearInterval(intervalId);
    }

    counter++;
}

let counter = 1;

const intervalId = setInterval(updateDiv, 1500);

/*
setTimeout
setTimeout is similar to setInterval, 
but it only calls a function once after a specified interval. 
It also has two required arguments:

the function to be executed
the delay - the delay in milliseconds before the function is executed
The div with a class of counter has been replaced by one with a class
of timeout and a button has been added:

<button class="btn btn-primary timeout">Test setTimeout</button>
<div class="timeout">setTimeout test</div>


Let's select the div and then update its innerHTML after two seconds using the setTimeout method. 
There are two elements with a class of timeout so we need to specify the tag type when selecting it:
*/
const timeoutContainer = document.querySelector("div.timeout");

// the function to run after the delay
function updateDiv() {
    timeoutContainer.innerHTML = "This was set by the setTimeout function"
}

// 2000 milliseconds = 2 seconds
setTimeout(updateDiv, 2000);

// The div's innerHTML will be updated after two seconds.

// Let's add a CSS class in the function too:

function updateDiv() {
    timeoutContainer.innerHTML = "This was set by the setTimeout function"
    timeoutContainer.classList.add("primary");
}

/*
As well as its innerHTML changing, the div will now have a primary class added to it after two seconds and be styled accordingly.

Let's add a click event listener to the button.

First we'll select both the div and the button using their tag names in the selectors:
*/

const timeoutContainer = document.querySelector("div.timeout");
const timeoutButton = document.querySelector("button.timeout");
//We'll add the "click" event lister to the button and pass in 
// a function called updateDivAfterClick as the callback function:

timeoutButton.addEventListener("click", updateDivAfterClick);

//The first things we want to do in the function 
// are clear the div of its text and add a class called loader:

function updateDivAfterClick() {
    // clear the text inside the div
    timeoutContainer.innerText = "";
    // add the class "loader" to the div
    timeoutContainer.classList.add("loader");
}


// If you run the full code so far

const timeoutContainer = document.querySelector("div.timeout");
const timeoutButton = document.querySelector("button.timeout");

timeoutButton.addEventListener("click", updateDivAfterClick);

function updateDivAfterClick() {
    timeoutContainer.innerText = "";
    timeoutContainer.classList.add("loader");
}

/*
you will see the text in the div disappears 
and the loader class adds a CSS loading animation to the div.
Let's let the animation run for three seconds, 
then remove the class and add the text "Loaded".
*/

// add the text "Loaded" to the div and remove the "loader" class after 3 seconds
setTimeout(function() {
    timeoutContainer.innerText = "Loaded";
    timeoutContainer.classList.remove("loader");
}, 3000);

// Full code:
const timeoutContainer = document.querySelector("div.timeout");
const timeoutButton = document.querySelector("button.timeout");

timeoutButton.addEventListener("click", updateDivAfterClick);

function updateDivAfterClick() {
    timeoutContainer.innerText = "";
    timeoutContainer.classList.add("loader");

    setTimeout(function() {
        timeoutContainer.innerText = "Loaded";
        timeoutContainer.classList.remove("loader");
    }, 3000);
}












