// ----------------------------
// Floating Hearts Animation
// ----------------------------

const hearts = document.getElementById("hearts");

const emojis = [
"💖",
"💕",
"🌸",
"✨",
"💗"
];

function createHeart(){

const heart = document.createElement("span");

heart.className = "heart";

heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left = Math.random()*100 + "vw";

heart.style.animationDuration = (4 + Math.random()*4) + "s";

heart.style.fontSize = (18 + Math.random()*20) + "px";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,350);

// ----------------------------
// Continue Button
// ----------------------------

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

document.querySelector(".card").style.transform="scale(.9)";
document.querySelector(".card").style.opacity="0";

setTimeout(()=>{

window.location.href="question.html";

},700);

});

// ----------------------------
// Small entrance animation
// ----------------------------

window.onload=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},100);

};