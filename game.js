//Model
let points = 5000;
let counter = 0;
let corect = 0;
let close = 0;
let round = 0;
let flag = 1;
let counterTime = 120;

let position = [];
let number = [];
let intervalID;

createCells();

if(flag === 1) {
        intervalID = setInterval(function () {
        const timer = document.querySelector(".time");
        counterTime--;

        if(counterTime >= 0 ) {
            timer.innerHTML = counterTime;
        }

        if(counterTime < 6) {
            timer.style.color = "red";
        }

        if(counterTime === 0) {
            loser();
        }
    }, 1000);
}


//Controller
function createCells() {
    for(let i=0;i<4;i++) {
        number[i] = Math.floor(Math.random() * (5 - 1)) + 1;
    }
}

function addIcon(n) {
    let cells = [];
    cells[0] = document.querySelector(".div1");
    cells[1] = document.querySelector(".div2");
    cells[2] = document.querySelector(".div3");
    cells[3] = document.querySelector(".div4");

    if(round === 0 && counter === 1 ) {
        flag = 1;
    }

    if(counter === 0) {
        for(let i=0;i<4;i++) {
            cells[i].style.backgroundColor = "transparent";
            cells[i].innerHTML = "";
        }
    }
    //View
    if(n === 0) {

        cells[counter].innerHTML = "&#9824;";
        position[counter] = 1;
    } else if(n === 1) {

        cells[counter].innerHTML = "&#9827;";
        position[counter] = 2;
    } else if(n === 2) {

        cells[counter].innerHTML = "&#9829;";
        position[counter] = 3;
    } else if(n === 3) {

        cells[counter].innerHTML = "&#9830;";
        position[counter] = 4;
    }
    counter++;
    if(counter === 4) {
        check();
        if(corect === 4) {
            winner();
        } else {
            refresh();
        }

        addStats();
    }
    if(round > 9) {
        loser();
    }
}

function addStats() {
    const div = document.querySelector(".stats-div");
    const number = document.createElement("p");
    const stats = document.createElement("div");
    const corectSpan = document.createElement("p");
    const closeSpan = document.createElement("p");
    const correctP = document.createElement("p");
    const closeP = document.createElement("p");

    stats.classList.add("stats");
    corectSpan.classList.add("corect");
    closeSpan.classList.add("close");
    correctP.classList.add("svgIcons");
    closeP.classList.add("svgIcons");
    number.style.marginRight = "20px";
    corectSpan.style.marginRight = "10px";

    number.innerHTML = round + ": ";
    correctP.innerHTML = "&#128081;";
    closeP.innerHTML = "&#127800;";
    corectSpan.innerHTML = corect;
    closeSpan.innerHTML = close;

    stats.appendChild(number);
    stats.appendChild(correctP);
    stats.appendChild(corectSpan);
    stats.appendChild(closeP);
    stats.appendChild(closeSpan);
    div.appendChild(stats);
}

//View
function winner() {
    const winDiv = document.querySelector(".won");
    const pointsDiv = document.querySelector(".winPoints");

    winDiv.style.display = "flex";
    pointsDiv.innerHTML = points;

    clearInterval(intervalID);
}

function loser() {
    const loseDiv = document.querySelector(".lose");
    const pointsDiv = document.querySelector(".losePoints");

    loseDiv.style.display = "flex";
    pointsDiv.innerHTML = points;

    clearInterval(intervalID);
}

function refresh() {
    const turn = document.querySelector(".turn");
    counter = 0;
    round += 1;

    turn.innerHTML = (10 - round);

    getPoints();
}

function getPoints() {
    points -= 496;
}

function check() {
    corect = 0;
    close = 0;
    let cor = [];
    for(let i=0;i<4;i++) {
        if(number[i] === position[i]) {
            corect += 1;
            position[i] = 10;
            cor[i] = number[i];
            number[i] = 5;
        }
    }
    for(let i=0;i<4;i++) {
        for(let j=0;j<4;j++) {
            if(cor[i] === 1) {
                i++;
            }
            if(number[i] === position[j]) {
                close += 1;
                position[i] = 10;
                cor[i] = number[i];
                number[i] = 5;
            }
        }
    }
    for(let i=0;i<4;i++) {
        if(cor[i]) {
            number[i] = cor[i];
        }
    }
}

function openInfo() {
    const infoDiv = document.querySelector(".info-div");
    infoDiv.style.left = "0";
}

function closeInfo() {
    const infoDiv = document.querySelector(".info-div");
    infoDiv.style.left = "100%";
}
