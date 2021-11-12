const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");

// console.log(slideRight);

const slidesLenght = slideRight.querySelectorAll("div").length;

// console.log(slidesLenght);

let numberActiveSlide = 0;

slideLeft.style.top = `-${(slidesLenght -1)*100}vh`;

arrowUp.addEventListener("click", function(){
    changeSlide("up");
});

arrowDown.addEventListener("click", function(){
    changeSlide("down");
});

function changeSlide(direction){
    const sliderHight = containerSlider.clientHeight; //hlídá změny aktuální víšky okna

    if(direction === "up"){
        numberActiveSlide++;
        if(numberActiveSlide > slidesLenght - 1){
            numberActiveSlide = 0;
        }
    } else {
        numberActiveSlide--;
        if(numberActiveSlide < 0){
            numberActiveSlide = slidesLenght - 1;
        }
    }

    slideRight.style.transform = `translateY(-${numberActiveSlide * sliderHight}px)`;
    slideLeft.style.transform = `translateY(${numberActiveSlide * sliderHight}px)`;
}
