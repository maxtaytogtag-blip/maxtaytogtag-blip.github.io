const container = document.getElementById("games");

const search = document.getElementById("search");

const frame = document.getElementById("gameFrame");

const playing = document.getElementById("playing");


let currentGames = games;



// LOAD GAMES

function loadGames(list){


    container.innerHTML="";


    list.forEach((game,index)=>{


        let fav = isFavorite(game.name)
        ? "favorite"
        : "";


        container.innerHTML += `


        <div class="card">


            <img src="${game.image}">


            <h3>${game.name}</h3>


            <p>${game.description}</p>


            <small>
            ${game.category}
            </small>


            <button onclick="playGame(${index})">

            ▶ PLAY

            </button>



            <button 
            class="${fav}"
            onclick="favoriteGame('${game.name}')">

            ⭐ Favorite

            </button>



        </div>


        `;


    });


}






// PLAY GAME


function playGame(index){


    let game = currentGames[index];


    frame.src = game.link;


    playing.innerHTML =
    "Playing: " + game.name;



    document
    .querySelector(".player")
    .scrollIntoView({

        behavior:"smooth"

    });



}







// SEARCH


search.addEventListener("input",()=>{


let text =
search.value.toLowerCase();



let filtered =
games.filter(game =>


game.name
.toLowerCase()
.includes(text)


);



currentGames = filtered;


loadGames(filtered);



});








// CATEGORY BUTTONS


function showCategory(category){


if(category==="All"){


currentGames = games;


}

else{


currentGames =
games.filter(game =>

game.category===category

);


}



loadGames(currentGames);


}







// FAVORITES


function favoriteGame(name){


let favorites =
JSON.parse(

localStorage.getItem("favorites")

)||[];



if(favorites.includes(name)){


favorites =
favorites.filter(
x=>x!==name
);


}

else{


favorites.push(name);


}



localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);



loadGames(currentGames);



}





function isFavorite(name){


let favorites =
JSON.parse(

localStorage.getItem("favorites")

)||[];



return favorites.includes(name);


}






function showFavorites(){


let favorites =
JSON.parse(

localStorage.getItem("favorites")

)||[];



let list =
games.filter(game =>

favorites.includes(game.name)

);



currentGames=list;


loadGames(list);



}








// FULLSCREEN


function fullscreenGame(){


if(frame.requestFullscreen){


frame.requestFullscreen();


}


}







// START


loadGames(games);
