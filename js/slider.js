let slider_content = document.querySelector(".slider-content");
let items = Array.from(slider_content.children);

let prevItem;
let centerItem = (items.length - 1);
let nextItem;
let waitSlide = new Date().getTime();
function initSlider(leftOrRight) {

   if(new Date().getTime() > waitSlide + 1100){

      items.forEach((el) => {
         el.removeAttribute("style");
         el.classList.remove(
            "center-to-right",
            "left-to-center",
            "right-to-center",
            "center-to-left"
         );
      });

      if(leftOrRight === false) {
         centerItem--;
      }else {
         centerItem++;
      }

      if(centerItem > (items.length - 1)){
         centerItem = 0;
      }else if(centerItem < 0){
         centerItem = (items.length - 1);
      }

      // prev
      prevItem = centerItem - 1;
      if(prevItem > (items.length - 1)){
         prevItem = 0;
      }else if(prevItem < 0) {
         prevItem = (items.length - 1);
      }
      
      // Next
      nextItem = centerItem + 1;
      if(nextItem > (items.length - 1)){
         nextItem = 0;
      }else if(nextItem < 0) {
         nextItem = (items.length - 1);
      }

      effectSlider(leftOrRight, centerItem, nextItem, prevItem);
      
      waitSlide = new Date().getTime();
   }
}

function effectSlider(rightOrLeft, centerItem, nextItem, prevItem) {

   if(rightOrLeft == true){
      // Prev And Center
      items[prevItem].style.zIndex = "99";
      items[centerItem].style.zIndex = "99";

      items[prevItem].classList.add("center-to-right");
      items[centerItem].classList.add("left-to-center");
   }else {

      // Center And Next
      items[centerItem].style.zIndex = "99";
      items[nextItem].style.zIndex = "99";

      items[centerItem].classList.add("right-to-center");
      items[nextItem].classList.add("center-to-left"); 
   }

}

let autoPlaySlideShowSetTimeClear;
function nextButton() {
   clearTimeout(autoPlaySlideShowSetTimeClear);
   autoPlaySlideShow(true);
}

function prevButton() {
   clearTimeout(autoPlaySlideShowSetTimeClear);
   autoPlaySlideShow(false);
}

function autoPlaySlideShow(n) {
   let ROL;
   if(n == null || n == true){
      ROL = true;
   }else {
      ROL = false;
   }
   initSlider(ROL);
   autoPlaySlideShowSetTimeClear = setTimeout(autoPlaySlideShow, 1000);
}

onload = () => {
   autoPlaySlideShow();
}