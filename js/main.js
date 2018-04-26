"use strict" //skriver fejl hvis der er en ting der ikke er defineret
let templateBg  = document.querySelector("#bgTemp").content;


let game = document.querySelector("#game");
let page = 1;
let lookingForData = false;

function fetchBoardGames(){
    lookingForData=true;

    let urlParams =  new URLSearchParams(window.location.search);

    let catid = urlParams.get("category");
    let endpoint = "http://kmjdesign.dk/m2/CMS/wordpress/wp-json/wp/v2/events/?_embed&per_page=2&page="+page
    if(catid){
        endpoint = "http://kmjdesign.dk/m2/CMS/wordpress/wp-json/wp/v2/events/?_embed&per_page=2&page="+page +"&categories="+catid
    }
    fetch(endpoint)
    .then(e => e.json())
    .then(showGames)
}

function showGames(data){
    console.log(data);
    lookingForData = false;
    data.forEach(showGame);
}

function showGame(aGame){

    let clone = templateBg.cloneNode(true);
    clone.querySelector("h1").textContent = aGame.title.rendered

    game.appendChild(clone);

}

fetchBoardGames();





function bottomVisible(){
    const scrollY = window.scrollY
    const visible = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight
    const bottomOfPage = visible + scrollY >= pageHeight
    return bottomOfPage || pageHeight < visible
}
