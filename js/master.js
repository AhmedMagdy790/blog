let search = document.getElementById("search");
let iconSearch = document.getElementById("icon-search");
let iconMenu = document.getElementById("icon-menu");
let notr = document.querySelector(".moving-tape");
let sliderBoxMain = document.querySelector(".slider-box-main");
let menuBarLinks = document.querySelector(".menu-bar .links");


// Search
iconSearch.onclick = () => {
    search.classList.toggle("active");
}

// Menu Bar
iconMenu.onclick = () => {
    menuBarLinks.classList.toggle("active");
    window.onscroll = () => {
        menuBarLinks.classList.remove("active");
    }
}


// Ticker
function ticker() {
    let i = 0;
    function onTicker(){
        i++;
        notr.style.right = `calc(100% - ${i}px)`;
        if( i == notr.clientWidth + 1200){
            i = 0;
            onTicker();
        }else{
            setTimeout(onTicker,10)
        }
    }
    if(notr.children.length > 0){
        onTicker();
    }
}



// Onload
window.onload = () => {
    ticker();
    autoPlaySlideShow();
}