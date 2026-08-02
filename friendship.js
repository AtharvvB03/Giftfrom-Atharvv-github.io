window.onload=()=>{

setTimeout(()=>{

loader.style.display="none";

},2500);

}

const text=

"The relief I get whenever I see your message is something I can never explain. ❤️";

let i=0;

function typing(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();

function startJourney(){

document.getElementById("about").scrollIntoView({

behavior:"smooth"

});

}

for(let i=0;i<40;i++){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="💜";

h.style.left=Math.random()*100+"%";

h.style.animationDuration=

5+Math.random()*8+"s";

document.querySelector(".hearts").appendChild(h);

}

function surprise(){

document.getElementById("popup").style.display="block";

confetti({

particleCount:300,

spread:180,

origin:{y:.6}

});

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
