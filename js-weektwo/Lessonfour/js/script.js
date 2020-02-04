function loadGames(event) {

    // get genre value from the data-genre attribute
    const genre = event.target.dataset.genre;
   
    let arrayToLoopThrough;

    switch(genre) {

        case "action":
            arrayToLoopThrough = actionGames;
            break;

        case "shooter":
            arrayToLoopThrough = shooterGames;
            break;

        case "rpg":
            arrayToLoopThrough = rpgGames;
            break;
        
        default:
            arrayToLoopThrough = [];
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

    genreArray.forEach(function(genre) {
        genreHTML += `<a class="genre">${genre.name}</a>`;
    });

    return genreHTML;
}

function makePlatforms(platformsArray) {

    let platformsHTML = "";

    for (let i = 0; i < platformsArray.length; i++) {
        platformsHTML += `<span>${platformsArray[i].platform.name}</span>`;
    }

    return platformsHTML;
}

const timeoutContainer = document.querySelector("div.timeout");

const timeoutButton = document.querySelector("button.timeout");


function updateDiv(){
    timeoutContainer.innerHTML = "<h1>This</h2> was set by the setTimeout function";
    timeoutContainer.classList.add("primary");
}

setTimeout(updateDiv, 2000);
timeoutButton.addEventListener("click", updateDivAfterClick);

function updateDivAfterClick(){
    // clear the text inside div
    timeoutContainer.innerText = "";
    // add the class loader to the div, show a loading icon 
    timeoutContainer.classList.add("loader");
    setTimeout(function(){
        timeoutContainer.innerHTML = "Loaded";
        timeoutContainer.classList.remove("loader"); 
    }, 3000);
};



