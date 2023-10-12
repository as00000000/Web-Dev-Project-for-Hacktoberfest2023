//bubble making function

function makebubb() {
    let cutter = "";
    for (let index = 1; index <= 297; index++) {
        var k = Math.floor(Math.random() * 10);

        cutter += ` <div class="bubble">${k}</div>`
    }
    document.querySelector("#pbtn").innerHTML = cutter;
}

//timer function
var timer = 60;
function runTimmer() {
    var timmerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timer").textContent = timer;
        }
        else {
            clearInterval(timmerint)
            document.querySelector("#pbtn").innerHTML = `<h1>Game Over</h1>`;
            document.querySelector("#hit").innerHTML = "";

        }
    }, 1000);
}


//hit making function
var hitk = 0;
function getmewhit() {
    hitk = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitk;
}

//score increasing function
var score = 0;
function incscore() {
    score += 10;
    document.querySelector("#scval").textContent = score;
}


//refreshing function
var k = document.querySelector("#pbtn")
k.addEventListener("click", function (details) {
    // alert("chs")
    // console.log();
    var clickednum = Number(details.target.textContent);
    if (clickednum === hitk) {
        incscore();
        getmewhit();
        makebubb();
    }
});


// incscore();
getmewhit();
makebubb();
runTimmer();