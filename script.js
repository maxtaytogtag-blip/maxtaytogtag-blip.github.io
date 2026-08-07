const searchBar = document.getElementById("searchBar");
const gameCards = document.querySelectorAll(".game-card");


searchBar.addEventListener("input", function () {

    let search = searchBar.value.toLowerCase();


    gameCards.forEach(card => {

        let title = card
            .querySelector("h2")
            .innerText
            .toLowerCase();


        if (title.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});



// Smooth page loading

window.onload = () => {

    document.body.style.opacity = "1";

};
