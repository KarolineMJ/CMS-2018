"use strict" //skriver fejl hvis der er en ting der ikke er defineret
let templateBg  = document.querySelector("#bgSpeciTemp").content;


let game = document.querySelector("#game");
let page = 1;
let lookingForData = false;

function fetchBoardGames(){
    console.log("fetch");
    lookingForData = true;
    fetch('http://kmjdesign.dk/m2/CMS/wordpress/wp-json/wp/v2/events/?_embed&per_page=2&page='+page)
    .then(e => e.json())
    .then(showGames)
}

function showGames(data){
    console.log(data);
    lookingForData = false;
    data.forEach(showGame);
}

function showGame(aGame){
    console.log(aGame._embedded["wp:feturedmedia"][0].media_details);
    let clone = templateBg.cloneNode(true);
    clone.querySelector("h1").textContent = aGame.title.rendered;
}


