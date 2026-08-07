const container = document.getElementById("games");
const search = document.getElementById("search");
const frame = document.getElementById("gameFrame");


function loadGames(list){

    container.innerHTML="";


    list.forEach(game=>{


        container.innerHTML += `

        <div class="card">

        <img src="${game.image}">

        <h2>${game.name}</h2>

        <p>${game.category}</p>


        <button onclick="playGame('${game.link}')">
        PLAY
        </button>


        </div>

        `;


    });

}



function playGame(url){

    frame.src=url;

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



loadGames(games);



search.addEventListener("input",()=>{


let text = search.value.toLowerCase();


let filtered = games.filter(game=>

game.name.toLowerCase().includes(text)

);



loadGames(filtered);


});
