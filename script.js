let next = document.getElementById("next");
let prev = document.getElementById("prev");
let imageContainer = document.querySelector(".image-container");

let x = 0;

prev.addEventListener("click",function(){
    x = x + 45;
    rotate();
})
next.addEventListener("click",function(){
    x = x - 45;
    rotate();
})
function rotate(){
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}