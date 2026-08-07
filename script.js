const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", function () {

    const text = this.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h2").textContent.toLowerCase();

        if(title.includes(text)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

});
