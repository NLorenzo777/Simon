var colors = ["orange", "green", "red", "violet", "yellow", "blue"]
var colorRegistry = []
var colorUserSelected = []
var round = 0
var colorsToSelect = 0;
var gameOver = false;

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        //start the game
        alert("the game has started");
        document.getElementById("level-title").innerText = `Level ${round + 1}`
        setTimeout( function() {
            selectColor()
        }, 1000)
    }
})


//Function that will await user to click a button.
for (i=0; i < document.querySelectorAll(".btn").length; i++) {
    document.getElementsByClassName("btn")[i].addEventListener("click", function() {
        colorUserSelected.push(this.getAttribute("id"));
        if(colorUserSelected[colorsToSelect] != colorRegistry[colorsToSelect]) {
            document.getElementsByTagName("body")[0].classList.add("game-over");
            document.getElementById("level-title").innerText = `GAME OVER! YOUR SCORE IS ${round} `
            setTimeout(function() {
                document.getElementsByTagName("body")[0].classList.remove("game-over");
                document.getElementById("level-title").innerText = `Press ENTER Key to Start`
            }, 3000)
            resetGame();

        }
        else {
            if(colorsToSelect == round) {
                continueGame();
            }
            else {
                colorsToSelect++;
            }
        }

    })
}

function continueGame() {
    colorUserSelected = [];
    colorsToSelect = 0;
    round++;
    document.getElementById("level-title").innerText = `Level ${round + 1}`
    setTimeout(function(){
        selectColor()
    }, 1000);
}

function selectColor() {
    var selectedColor = colors[Math.floor(Math.random()*(colors.length))]; // e.g. 1 was selected --> "green".
    colorRegistry.push(selectedColor) // colorRegistry = ["green"].
    document.getElementById(selectedColor).classList.add("computer-pressed")
    setTimeout( function() {
        document.getElementById(selectedColor).classList.remove("computer-pressed");
    }, 800)
}

function resetGame() {
    colors = ["orange", "green", "red", "violet", "yellow", "blue"]
    colorRegistry = []
    colorUserSelected = []
    round = 0
    gameOver = false;
}

function verifyInput() {

}







