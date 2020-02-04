console.log("hello world");

let container = document.querySelector(".container");

container.innerText = "hello world";
//container.innerHTML = "good bye";
//container.innerHTML = "<h1>good bye</h1>";

let newHtml = "";

for(let i=0; i < actionGames.length; i++ ){
    //console.log(actionGames[i].name);
    // let name = "<h4>" + actionGames[i].name + "</h4>" ; // the old way
     let name = `<h4>${actionGames[i].name} </h4>`     // es6
    
    const details =`
    <div>
        <h4> ${actionGames[i].name}</h4>
        <div class= "rating">${actionGames[i].rating}</div>
    </div>
    `;
newHtml += details;
console.log(newHtml);

};





