
let slider_content = document.querySelector(".slider-content");
let items = Array.from(slider_content.children);


let left = 0;
let right;
let waitSLide = new Date().getTime();
let clearSetTimeWaitSLide;
function initSlider(leftOrRight) {

   if(new Date().getTime() > waitSLide + 1000){
  
      right = left + 1;

      items.forEach((el) => {
         el.removeAttribute("style");
         el.classList.remove("transition");
      })

      if(right > (items.length - 1)){
         right = 0;
      }else if(right < 0) {
         right = (items.length - 1);
      }

      effectSlider(right, left, leftOrRight);

      if(left > (items.length - 2)){
         left = 0;
      }else {
         left++;
      }

      waitSLide = new Date().getTime();
   }

}

function effectSlider(right, left, rightOrLeft) {

   let styleLeftLeft;
   let styleLeftLeftSetTime;
   let styleLeftRight;
   let styleLeftRightSetTime;

   if(rightOrLeft == true){
      styleLeftLeft = "0%";
      styleLeftRight = "-100%";
      styleLeftRightSetTime = "100%";
      styleLeftLeftSetTime  = "0%";
   }else {
      styleLeftLeft = "0%";
      styleLeftRight = "100%";
      styleLeftRightSetTime = "-100%";
      styleLeftLeftSetTime  = "0%";
   }


   items[left].style.zIndex = "33";
   items[right].style.zIndex = "33";

   items[left].style.left = styleLeftLeft;
   items[right].style.left = styleLeftRight;
   
   
   setTimeout(() => {
      items[left].classList.add("transition");
      items[right].classList.add("transition");

      items[left].style.left = styleLeftRightSetTime;
      items[right].style.left = styleLeftLeftSetTime;

   },10);


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
   autoPlaySlideShowSetTimeClear = setTimeout(autoPlaySlideShow, 5000);
}
