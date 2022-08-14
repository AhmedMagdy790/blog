let slider_content = document.querySelector(".slider-content");
let items = Array.from(slider_content.children);
let delaySlider = 3000;
let zIndex = 1;
let i = 0;


function affectRight() {

   items.map((el, index) => {
         el.style.transition = "0.5s";
         el.style.left = "-100%";
         el.style.zIndex = -1;
   });
  
   items[i].style.transition = "0.5s";
   items[i].style.left = "100%";

   let next_i = i + 1;
   if(next_i >  items.length - 1){
      next_i = 0;
   }
   items[next_i].style.transition = "0.5s";
   items[next_i].style.left = "0%";
   items[next_i].style.zIndex = zIndex + 1;

}

function affectLeft() {
   items.map((el, index) => {
      el.style.transition = "0.5";
      el.style.left = "-100%";
      el.style.zIndex = -1;
   });
  
   items[i].style.transition = "0.5s";
   items[i].style.left = "100%";

   let next_i = i + 1;
   if(next_i >  items.length - 1){
      next_i = 0;
   }
   console.log(next_i)
   items[next_i].style.left = "0%";
   items[next_i].style.transition = "0.5s";
   items[next_i].style.zIndex = zIndex + 1;
}




// nextSliderAuto();
let clearTimeOutSlider;
let autoIncrease = true;
function nextSliderAuto() {
   if(autoIncrease == true){
      affectRight();
      if(i == items.length - 1){
         i = 0;
      }else {
         i++;
      }
   }
   clearTimeout(clearTimeOutSlider);
   clearTimeOutSlider = setTimeout(nextSliderAuto, delaySlider);
};

// next Button
let clearSliderAuto;
function nextButton() {
   if(i !== items.length - 1){
      i++;
   }
   affectRight();
   autoIncrease = false;
   nextSliderAuto()
   autoIncrease = true;
}

// Prev Button

function prevButton() {
   if(i >= 1){
      i--;
   }
   affectLeft();
   autoIncrease = false;
   nextSliderAuto();
   autoIncrease = true;
}
