"use strict" //skriver fejl hvis der er en ting der ikke er defineret
let templateBg  = document.querySelector("#bgTemp").content;


let game = document.querySelector("#gameList");
let page = 1;
let lookingForData = false;

function fetchBoardGames(){
    lookingForData=true;

    let urlParams =  new URLSearchParams(window.location.search);

    let catid = urlParams.get("category");
    if(!catid){
        catid=39;
    }
    let endpoint = "http://kmjdesign.dk/m2/CMS/wordpress/wp-json/wp/v2/events/?_embed&author=1&per_page=4&page="+page +"&categories="+catid

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
    console.log("something")
    let clone = templateBg.cloneNode(true);
    clone.querySelector("h2").textContent = aGame.title.rendered;
      clone.querySelector(".rank span").textContent=aGame.acf.ranking;
    clone.querySelector(".gameText").innerHTML = aGame.content.rendered;

  if(aGame._embedded["wp:featuredmedia"]){//img is there
     clone.querySelector("img").setAttribute("src", aGame._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
  } else { // no img
      clone.querySelector("img").remove()
  }

    clone.querySelector('.readmore').href="subpage.html?id=" +aGame.id;

    game.appendChild(clone);

}

fetchBoardGames();
//fetchSubpages()

setInterval(function(){

  if(bottomVisible() && lookingForData===false){
    console.log("We've reached rock bottom, fetching articles")
    page++;
    fetchBoardGames();
  }
}, 1000)



function bottomVisible(){

    const scrollY = window.scrollY
    const visible = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight
    const bottomOfPage = visible + scrollY >= pageHeight-20
    console.log(scrollY,visible, pageHeight, bottomOfPage);
    return bottomOfPage || pageHeight < visible
}
