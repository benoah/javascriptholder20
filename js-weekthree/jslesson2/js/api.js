// call on a endpoint that will return an array of screenshots
const baseUrl = "https://api.rawg.io/api/games/4003/screenshots";
const gamesUrlImage = `${baseUrl}`;
// console.log(gamesUrlImage);
let newHTML = "";
// make a active class
const carouselItem = document.querySelector(".carousel-inner");


// ip call

fetch(gamesUrlImage)
  .then(function(respons) {
    return respons.json();
  })
  .then(function(json) {
    caraouselImg(json);
  })
  .catch(function(error) {
    console.dir(error);
  });

// loop throug  the results to create a image slider using the html
function caraouselImg(json) {
  // assign the results array to a variable
  let imgScreen = json.results;

  // making a loop for
  for (let i = 0; i < imgScreen.length; i++) {
    let activeClass = "";

      if (i===0){
          activeClass = "active"
      }
  
    // putting in the the div in the variabel input that iam going to use again
    const input = `<div class="carousel-item ${activeClass}">
   <img src="${imgScreen[i].image}" class="d-block w-100">
   </div>`;
    // did try to put the
    newHTML += input;
  }
  // console.log(newHTML);
  carouselItem.innerHTML=newHTML;


}
