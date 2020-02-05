const container = document.querySelector(".container");

//We'll then create a variable to hold the HTML strings we'll be creating. 
//Because the value assigned to this variable will change, we'll declare the variable with let:
let newHTML = "";



// Let's loop over the array and log the name of the games:

//for (let i = 0; i < actionGames.length; i++) {
  //  console.log(actionGames[i].name);
//}

//Template literals
//We've seen before that we can join strings together using the + sign.

//We could create an HTML string with the name of the game in the loop like this:

// const name = "<h4>" + actionGames[i].name + "</h4>";

for (let i = 0; i < actionGames.length; i++) {
    
    // create a default value for the rating
let ratingValue = "Not rated";
// if the object contains a rating property
// set the ratingValue equal to the rating property
if (actionGames[i].rating) {
    ratingValue = actionGames[i].rating;
}

const genres = actionGames[i].genres;

 // assign the return value of the makeGenres function (the HTML the function creates) to a variable
    const genresHTML = makeGenres(genres);

    // assign the platforms property in each game object to a variable
    const platforms = actionGames[i].platforms;

    // assign the return value of the makePlatforms function to a variable
    const platformsHTML = makePlatforms(platforms);
    
    // create the HTML string by joining the strings together
    //const name = "<h4>" + actionGames[i].name + "</h4>";
    // console.log(name);
   // each time the loop is executed, assign the details variable a template literal
    // this is a string with embedded variables
    const details = `<div class="card">
                        <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
                        <div class="details">
                            <h4 class="name">${actionGames[i].name}</h4>
                            <div class="rating">${ratingValue}</div>
                            ${genresHTML}
                            <div class="platforms">${platformsHTML}</div>
                        </div>
                    </div>`;
    // add the value of details to the existing value of newHTML
    newHTML += details;
}


container.innerHTML = newHTML;



// Default values for missing properties
// Sometimes data returned from an API call will contain missing properties in the objects. 
//The The Elder Scrolls V game is missing its rating property and is displaying undefind
//Let's provide a default value for that property if it's 
//missing so that we give the user a more meaningful message than undefined.
//Inside the loop, we'll create a variable called ratingValue with a value of "Not rated". 
//This value may change so we'll use let to declare it.

// create a default value for the rating
//let ratingValue = "Not rated";


// assign the genres in each game object to a variable


// Inside the function, we will loop through the array of objects - genres - that gets passed in as the genreArray argument:
function makeGenres(genreArray) {
    // variable that will hold the HTML string we create in the loop
    let genreHTML = "";

    // loop through each object in the genreArray
    for (let i = 0; i < genreArray.length; i++) {
        // add the new HTML to the existing HTML stored in genreHTML
        genreHTML += `<a class="genre">${genreArray[i].name}</a>`;
    }

    // return the HTML that was created
    return genreHTML;
}



function makePlatforms(platformsArray) {
    // variable that will hold the HTML string we create in the loop
    let platformsHTML = "";

    for (let i = 0; i < platformsArray.length; i++) {
        // add the new HTML to the existing HTML stored in platformsHTML
        platformsHTML += `<span class="platform">${platformsArray[i].platform.name}</span>`;
    }

    // return the HTML that was created
    return platformsHTML;
}



