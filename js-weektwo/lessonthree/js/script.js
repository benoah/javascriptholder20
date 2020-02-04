// add an argument called event to the func
function loadGames(event) {
    const genre = event.target.dataset.genre;
    console.log ("from dataset:", genre);


    // assign the value of the button id to buttonId

    // declare a variable that will hold a different value depending on the button clicked
    let arrayToLoopThrough = [];

    switch (genre){
        case "action": //buttin id== "shotter"
        arrayToLoopThrough = actionGames;
        //show action
            break;
        case "shooter":
            arrayToLoopThrough = shooterGames;
            break;
        case "rpg":
            arrayToLoopThrough = rpgGames;
            break;
    default:
        //default
        arrayToLoopThrough =[];
}

    const container = document.querySelector(".container.results");
    let newHTML = "";

    for (let i = 0; i < arrayToLoopThrough.length; i++) {

        let ratingValue = "Not rated";

        if (arrayToLoopThrough[i].rating) {
            ratingValue = arrayToLoopThrough[i].rating;
        }

        const genres = arrayToLoopThrough[i].genres;
        const genresHTML = makeGenres(genres);

        const platforms = arrayToLoopThrough[i].platforms;
        const platformsHTML = makePlatforms(platforms);

        const details = `<div class="card">
                            <div class="image" style="background-image: url(${arrayToLoopThrough[i].background_image});"></div>
                            <div class="details">
                                <h4 class="name">${arrayToLoopThrough[i].name}</h4>
                                <div class="rating">${ratingValue}</div>
                                ${genresHTML}
                                <div class="platforms">${platformsHTML}</div>
                            </div>
                        </div>`;

        newHTML += details;
    }

    container.innerHTML = newHTML;
}


function makeGenres(genreArray) {

    let genreHTML = "";

    for (let i = 0; i < genreArray.length; i++) {
        genreHTML += `<a class="genre">${genreArray[i].name}</a>`;
    }

    return genreHTML;
}

function makePlatforms(platformsArray) {

    let platformsHTML = "";

    for (let i = 0; i < platformsArray.length; i++) {
        platformsHTML += `<span>${platformsArray[i].platform.name}</span>`;
    }

    return platformsHTML;
}


function handleActiveClass(event){
    for (let i = 0; i<buttons.length; i++){
        buttons[i].classList.remove("active");
    }
    event.target.classList.add("active");
}


