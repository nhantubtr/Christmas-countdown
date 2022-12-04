function christmasCountdown (){
    const christmasDate = new Date("December 25, 2022 00:00");
    const now = new Date();
    const difference = christmasDate - now;

    const msInS = 1000;
    const msInM = msInS * 60;
    const msInH = msInM * 60;
    const msInD = msInH * 24;

    let days = Math.floor(difference/msInD);
    let hours = Math.floor((difference % msInD)/msInH);
    let minutes = Math.floor((difference%msInH) / msInM);
    let seconds = Math.floor((difference%msInM) / msInS);

    document.querySelector("#day").textContent = days;
    document.querySelector("#hour").textContent = hours;
    document.querySelector("#minute").textContent = minutes;
    document.querySelector("#second").textContent = seconds;

    if (difference <=0 ){
        document.querySelector("#day").textContent = 0;
        document.querySelector("#hour").textContent = 0;
        document.querySelector("#minute").textContent = 0;
        document.querySelector("#second").textContent = 0;

        clearInterval(timer);
        merryChristmas();
    }

    
}

function merryChristmas(){
    let header = document.querySelector("#header");
    header.textContent = "Merry Christmas! Ho-Ho-Ho";
    header.classList.add("christmasHeader");
    
}

function play(){
    const audio = document.querySelector("#audio")
    if (audio.paused){
    audio.play();
    }
    else {
        audio.pause();
    }
}

const button = document.querySelector("#button");
button.addEventListener("click", play)

let timer = setInterval(christmasCountdown, 1000);
