const container = document.querySelector(".container");

let newHTML = "";

for (let i = 0; i < actionGames.length; i++) {

    let ratingValue = "Not rated";

    if (actionGames[i].rating) {
        ratingValue = actionGames[i].rating;
    }

const GENRES = actionGames[i].genres;
const genrasHTML = makeGenres(GENRES);

const platforms = actionGames[i].platforms;
const platformsHTML = makePlatforms(platforms);









    const details = `<div class="card">
                        <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
                        <div class="details">
                            <h4 class="name">${actionGames[i].name}</h4>
                            <div class="rating">${ratingValue}</div>
                            genre: ${genrasHTML}
                            <div class="platforms">${platformsHTML}</div>

                        </div>
                    </div>`;
    newHTML += details;
}

/*
function makeGenres(genreArray){
    console.log(genreArray);
}*/

function makeGenres(genreArray){
    let genreHTML="";


    for(let i = 0; i< genreArray.length; i++){
        genreHTML += `<a class="genre" href="#" > ${genreArray[i].name}</a>`;
    }
   // console.log("makeGenres:", genreHTML);
    return genreHTML;
}

function makePlatforms(platformsArray){
    let platformsHTML = "";

    for(let i = 0; i < platformsArray.length; i++){
        platformsHTML += `<span class="platform">${platformsArray[i].platform.name}</span>`;
        //console.dir(platformsArray[i]);
        //console.log(platformsArray[i].platform.name);    
    }
    return platformsHTML;
}












container.innerHTML = newHTML;

