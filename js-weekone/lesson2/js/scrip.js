// We'll select the h1 by its tag name 
// and log it using dir so that a clickable 
// list of its properties is displayed:

 console.dir(document.querySelector("h1"));

/*  
This is some of the properties  that get displayed
style - this is an object which has all the CSS properties on it.
We can change these properties using JavaScript.
Notice that the CSS properties don't use hyphens
- like they do in CSS, but rather camelCase 
- they start with a small letter and "joined" 
words are capitalised, not hyphenated.
Using hyphens in variable names and properties
is not allowed in JavaScript.
className - a string value of all the
classes on an element.
If the element has no classes, 
this is an empty string.
classList - this is an object of the CSS classes on the element. The h1 tag has no classes on it.
innerText - this is a string value of the text inside the selected element.
innerHTML - this is a string containing the HTML content inside the element. The h1 tag doesn't contain any HTML, just the string "Hello". We will soon use the innerHTML property to create HTML content inside a selected element.
*/



// Let's select the h2 element by its tag name 
// and assign it to a variable:

const heading2 = document.querySelector("h2");
console.dir(heading2);

//This time the classList property is not empty, 
// it has the value "heading2".

// Because the h2 element has a class, 
// we can select it by its class.

const headingByClass = document.querySelector(".heading2");
console.dir(headingByClass);

// This will display the same list of properties as above because the same element has been selected.

// Let's select the ul by its id:

const list = document.querySelector("#list");
console.dir(list);

/*   
The innerHTML property for list displays a string version of the HTML inside the ul.

If we use querySelector and the selection string (the value used to select the element) occurs more than once on the page, the first occurence of the element is selected.

We can see that if we select "li" using querySelector:
*/

const listItem = document.querySelector("li");
console.dir(listItem);

/*   
This diplays only one li element, the first one with the innerText value of "Dog".

To select all the li elements, use querySelectorAll:
*/ 

const listItems = document.querySelectorAll("li");
console.dir(listItems); // this display a NodeList( a type of object) 
                        // with all the li elemts as properties
/* 
Although this is not an array, we can loop over the NodeList 
using brackets to get each item. 
The syntax looks the same as looping over an array:
*/

for(let i =0; i < listItems.length; i++) {
    console.dir(listItems[i]);
}

// This will log each li element object.
// We can log any property on the li object using dot notation.

   
//Let's use a for loop to log the innerText value of each li:

for(let i =0; i < listItems.length; i++) {
    console.dir(listItems[i].innerText);
}

// MANIPULATING THE ELEMENTS

/*  
When you change elements in the DOM with JavaScript, 
you are not changing the underlying HTML,
only how that HTML is displayed in the browser.
On live websites, the HTML (with the CSS, JavaScript, images) 
is stored on a server and cannot be changed by JavaScript 
that lives in the browser.
*/

const heading1 = document.querySelector("h1")
heading1.style.color = "purple";

/*
If you inspect the h1 element you
will see an inline style has been added:


<h1 style="color: purple;">Hello</h1>
*/


/*
The style object on an element contains all the CSS properties, so we can change any of those properties by assigning string values to them.

Let's add a border:
*/

heading1.style.border = "1px green solid";

// Now let's add a background colour and some padding:

heading1.style.backgroundColor = "lightGray";
heading1.style.padding = "1em";

/*
As we noted above, all hyphenated CSS properties become camel cased when using
JavaScript, e.g. background-color becomes backgroundColor.
*/

//  className and classList

/*
Most of your styling is done through CSS classes on HTML elements.
Let's add a class to the div element.
If we select the div using the "div" 
selector and log its className property, we can see it's empty:
*/
const div = document.querySelector("div");
console.log(div.className);
// nothing will be displayed

//We can add a class using the add method on the classList object:
div.classList.add("container");
console.log(div.className);

//We can add a second class:
div.classList.add("second-class");
console.log(div.className);
// container second-class

// innerText 
// Let's use innerText to change the h1 element's text value:
const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Updated using innerText";

// Let's update the text value of all the lis.
// We need to use querySelectorAll 
// because we want to select more than one element:

const allTheListItems = document.querySelectorAll("li");

// loop through all the li elements and change their innerText value
for(let i =0; i < allTheListItems.length; i++) {
    allTheListItems[i].innerText = i + " changed";
}


// innerHtml
// we can also use innerHtml to change the h1`s value:
const pageHeadingOne = document.querySelector("h1");
pageHeading.innerHTML = "Updated using innerHTML";

// We can also add HTML content to other elements using
// innerHTML. We will use backticks that we discussed in lesson 1:1:

const container = document.querySelector("div");
container.innerHTML = `<p>
                        <b>Bold text:</b> unbolded text
                    </p>`;


/*  
We looked at joining strings together using + in Programming Foundations.
If we wanted to add an li to the ul element, 
we could do that by joining the existing innerHTML 
string value of the ul with a new string value containing 
the li:
*/
// select the ul
const list = document.querySelector("ul");

// get the existing HTML inside the ul element and 
// assign it to a variable
const existingHTML = list.innerHTML;

// create the new li HTML
const newHTML = "<li>New item at the end</li>";

// set the ul's new HTML to the existing HTML 
// plus the new HTML 

list.innerHTML = existingHTML + newHTML;


/*  
A new li element containing the text New item at the beginning will be added as the first item in the list.
We can add a class to the new element inside the string:
*/

const list = document.querySelector("ul");

const newHTML = `<li class="red">
                    New item at the end
                </li>`;

list.innerHTML = list.innerHTML + newHTML;




// When we are adding the HTML string to 
// the end of the existing HTML string,
// we can use the shorthand += operator: 

list.innerHTML += newHTML;

// The += operator adds the 
//new string to the existing string, so is the same as:
list.innerHTML = list.innerHTML + newHTML;

//  If we used the assignment operator = on its own like this:

list.innerHTML = newHTML;


/*
The existing HTML string would be replaced by newHTML 
and that's all the list would contain.

<ul>
    <li class="red">
        New item at the end
    </li>
</ul>

*/




