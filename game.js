//Model
let points = 5000;
let counter = 0;
let corect = 0;
let close = 0;
let round = 0;

let position = [];
let number = [];
createCells();

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
    const stats = document.querySelector(".stats");
    const corectSpan = document.querySelector(".corect");
    const closeSpan = document.querySelector(".close");

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
        stats.style.display = "flex";
        corectSpan.innerHTML = corect;
        closeSpan.innerHTML = close;
    }
    if(round > 9) {
        loser();
    }
}

//View
function winner() {
    const winDiv = document.querySelector(".won");
    const pointsDiv = document.querySelector(".winPoints");

    winDiv.style.display = "flex";
    pointsDiv.innerHTML = points;
}

function loser() {
    const loseDiv = document.querySelector(".lose");
    const pointsDiv = document.querySelector(".losePoints");

    loseDiv.style.display = "flex";
    pointsDiv.innerHTML = points;
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
