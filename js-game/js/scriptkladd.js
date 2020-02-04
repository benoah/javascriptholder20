const CONTAINER = document.querySelector(".container");
console.dir(CONTAINER);

let newHtml = "";

let ratingValue = "Not Rated";

for (let i = 0; i < actionGames.length; i++) {
  //var name= "<h4>" + actionGames[i].name + "</4>"; //es5
  //const NAME = `<h4> $ {actionGames [i].name} </h4>`; //es6
  actionGames[i].rating = actionGames[i].rating ?
  actionGames[i].rating:
  "Not Rated";

  /*const DETAILS = `<div>
  <h4> ${actionGames[i].name} </h4>
  <div class = "rating">${actionGames [i].name}</div>
  </div>`;*/
  /*
  if (actionGames[i].rating){
      ratingValue = actionGames[i].rating;
    }else{
        ratingValue = "Not Rated"
    }
*/

  const DETAILS = `
  <div class="card">
  <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
  <div class="details">
      <h4 class="name">${actionGames[i].name}</h4>
      <div class="rating">${ratingValue}</div>
      </div>
      </div>`;

  newHtml += DETAILS;
}

CONTAINER.innerHTML = newHtml;
console.log(newHtml);




//Module assignment 
// Create an object called cat.
// give the object one property called complain.
//complain´s value should be a method(a function)
//which logs the string"meow"


