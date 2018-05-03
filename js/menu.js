let button = document.querySelector("#menuPlus");
let menuItems = document.querySelectorAll(".menuItem");
let plussign = document.querySelector(".menuPlus");
let menuMap  = document.querySelector(".menuMaps");
let menuGames = document.querySelector(".menuGames");
let menuInfo = document.querySelector(".menuInfo");
let menuPhone = document.querySelector(".menuPhone");

button.addEventListener('click', openMenu);

function openMenu(){
    console.log("something happened");
    plussign.classList.toggle('enable');
    menuItems.forEach(mi=>{
        mi.classList.toggle('openedMenu');
    })

}

menuMap.onclick = function (){
    console.log("clicks on maps")
    location.href = "get-to-us.html"
}

menuGames.onclick = function (){
    location.href = "index.html";
}

menuInfo.onclick = function (){
    location.href = "#";
}

menuInfo.onclick = function (){
    location.href = "#";
}
