// ===== Floating Hearts =====

const hearts = document.getElementById("hearts");

const emojis = ["💖","💕","🌸","✨","🎀"];

function makeHeart(){

    const heart = document.createElement("span");

    heart.className="heart";

    heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(makeHeart,350);


// ===== Buttons =====

const yes=document.getElementById("yes");
const no=document.getElementById("no");

const texts=[
"Catch Me 😂",
"Nope 🤏",
"Too Slow 😜",
"Missed Me 😎",
"Hehe 😝",
"Click YES 💖"
];

let count=0;

function moveButton(){

    const maxX=window.innerWidth-180;
    const maxY=window.innerHeight-120;

    no.style.left=Math.random()*maxX+"px";
    no.style.top=Math.random()*maxY+"px";

    no.innerHTML=texts[count%texts.length];

    count++;

}

no.addEventListener("mouseover",moveButton);
no.addEventListener("touchstart",function(e){

    e.preventDefault();

    moveButton();

});

yes.addEventListener("click",()=>{

    document.querySelector(".card").style.transform="scale(.9)";
    document.querySelector(".card").style.opacity="0";

    setTimeout(()=>{

        window.location.href="envelope.html";

    },700);

});