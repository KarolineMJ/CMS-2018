let button = document.querySelector("#menuPlus");
let menuItems = document.querySelectorAll(".menuItem");


button.addEventListener('click', openMenu);

function openMenu(){
    console.log("something happened");
    menuItems.forEach(mi=>{
        mi.classList.toggle('openedMenu');
    })

}
