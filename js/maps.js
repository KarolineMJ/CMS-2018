let myVar;

function loaderThreeSec(){
    myVar = setTimeout(showPage, 3000);
}

function showPage(){
    document.querySelector(".loader").style.display= "none";
}
