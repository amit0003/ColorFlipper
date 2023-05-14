const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E"];

const btn1 = document.getElementById("btn");
const Color1 =document.querySelector(".clr1");

btn1.addEventListener("click", function(){
 let hexColor ="#";
 console.log(hexColor);
 for(let i=0;i<6;i++){
   hexColor += hex[getRandomNumber()];
 } 
 Color1.textContent = hexColor;
 document.body.style.backgroundColor = hexColor;
 
})
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}