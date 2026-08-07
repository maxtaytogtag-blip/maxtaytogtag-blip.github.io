const games = [

{
name: "Rooftop Duel",
image: "https://www.onlinegames.io/media/posts/1002/responsive/Rooftop-Duel-Online-lg.jpg",
link: "https://cloud.onlinegames.io/games/2025/construct/213/rooftop-duel/index-og.html"
},

{
name: "Geometry Dash FreezeNova",
image: "https://www.onlinegames.io/media/posts/510/responsive/Geometry-Dash-FreezeNova-lg.jpg",
link: "https://www.onlinegames.io/games/2023/q2/geometry-dash-freezenova/index.html"
},

{
name: "Highway Racer 2",
image: "https://www.onlinegames.io/media/posts/323/responsive/Highway-Racer-2-lg.jpg",
link: "https://www.onlinegames.io/games/2022/unity2/highway-racer-2/index.html"
},

{
name: "Cookie Clicker Pro",
image: "https://www.onlinegames.io/media/posts/971/responsive/Cookie-Clicker-Pro-Game-lg.jpg",
link: "https://cloud.onlinegames.io/games/2025/unity/cookie-clicker-pro/index-og.html"
},

{
name: "Drunken Duel",
image: "https://www.onlinegames.io/media/posts/698/responsive/Drunken-Duel-lg.jpg",
link: "https://www.onlinegames.io/games/2024/code/2/drunken-duel/index.html"
},

{
name: "Crazy Stickman Physics",
image: "https://www.onlinegames.io/media/posts/715/responsive/Crazy-Stickman-Physics-lg.jpg",
link: "https://www.onlinegames.io/games/2023/construct/185/crazy-stickman-physics/index.html"
},

{
name: "Sniper Elite",
image: "https://www.onlinegames.io/media/posts/127/responsive/Sniper-Elite-Online-lg.jpg",
link: "https://www.onlinegames.io/games/2021/1/sniper-elite/index.html"
},

{
name: "Wasteland Shooters",
image: "https://www.onlinegames.io/media/posts/218/responsive/Wasteland-Shooters-lg.jpg",
link: "https://www.onlinegames.io/games/2021/unity2/wasteland-shooters/index.html"
},

{
name: "Escape Car",
image: "https://www.onlinegames.io/media/posts/1000/responsive/Escape-Car-lg.jpg",
link: "https://cloud.onlinegames.io/games/2025/unity2/escape-car/index-og.html"
},

{
name: "Highway Racer Pro",
image: "https://www.onlinegames.io/media/posts/397/responsive/Drift-Hunters-Pro-lg.jpg",
link: "https://www.onlinegames.io/games/2024/unity/highway-racer-pro/index.html"
},

{
name: "Basket Hoop",
image: "https://www.onlinegames.io/media/posts/843/responsive/Basket-Hoop-lg.jpg",
link: "https://cloud.onlinegames.io/games/2024/construct/311/basket-hoop/index-og.html"
},

{
name: "Burnout Drift Hunter",
image: "https://www.onlinegames.io/media/posts/327/responsive/Burnout-Drift-Hunter-Online-lg.jpg",
link: "https://www.onlinegames.io/games/2022/unity4/burnout-drift-hunter/index.html"
},

{
name: "Highway Traffic",
image: "https://www.onlinegames.io/media/posts/32/responsive/Highway-Traffic-2-lg.jpg",
link: "https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html"
}

];


const gameContainer = document.getElementById("games");


games.forEach(game => {

gameContainer.innerHTML += `

<div class="game-card">

<img src="${game.image}" alt="${game.name}">

<h3>${game.name}</h3>

<a href="${game.link}" target="_blank">
Play Now
</a>

</div>

`;

});
