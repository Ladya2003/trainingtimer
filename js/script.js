let a = 91, b = 121, i = 1;

function time90s() {
    // b=-1;
    let timer = document.querySelector("#timer");
    let def_text = document.querySelector(".timer-default-text");
    if (a >= i) {
        a--;
        def_text.innerHTML = "";
        timer.innerHTML = a;
        setTimeout(time90s, 1000);
    }
    else if (a==-1) {
        
    }
    else {
        alert("Time is up! To start new timer, choose new time.");
        a = 91;
        def_text.innerHTML = "choose your time";
        timer.innerHTML = "";
    }
}
function time120s() {
    // a=-1;
    let timer = document.querySelector("#timer");
    let def_text = document.querySelector(".timer-default-text");
    if (b >= i) {
        b--;
        def_text.innerHTML = "";
        timer.innerHTML = b;
        setTimeout(time120s, 1000);
    }
    else if (b==-1) {

    }
    else {
        alert("Time is up! To start new timer, choose new time.");
        b = 121;
        def_text.innerHTML = "choose your time";
        timer.innerHTML = "";
    }
}

function resetAll() {
    a=-1;
    b=-1;

    setTimeout(a=91, 10);
    setTimeout(a=121, 10);
}

function progressBar90s() {
    let progress_bar = document.querySelector("#progress-bar");
    let progress = `<div class="progress90s"></div>`;
    progress_bar.innerHTML = progress;
    setTimeout(audio, 90500);

    let timer = document.querySelector(".timer");
    timer.classList.remove("timer-120s-anim");
    timer.classList.add("timer-90s-anim");
    // setTimeout(timer.classList.remove("timer-90s-anim"))
}
function progressBar120s() {
    let progress_bar = document.querySelector("#progress-bar");
    let progress = `<div class="progress120s"></div>`;
    progress_bar.innerHTML = progress;
    setTimeout(audio, 119000);

    let timer = document.querySelector(".timer");
    timer.classList.remove("timer-90s-anim");
    timer.classList.add("timer-120s-anim");
}

function audio() {
    new Audio('sound/bell-sound.mp3').play()
}
