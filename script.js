const colors =[ "red","green","rgba(123,133,112)", "#A3215C6"];

const btn = document.getElementById("btn");
const  color = document.querySelector(".clr");

btn.addEventListener("click", function(){
   let randomNumber = getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});

 function getRandomNumber(){
   return Math.floor( Math.random() * colors.length);
 };



