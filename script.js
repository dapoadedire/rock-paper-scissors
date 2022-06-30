
player_score = document.getElementById("player-score");
computer_score = document.getElementById("computer-score");
let player = document.getElementById("player");
let computer = document.getElementById("computer");

function reset() {
    player_score.innerHTML = "0";
    computer_score.innerHTML = "0";
    player.innerHTML = "PLAYER";
    computer.innerHTML = "COMPUTER";
    round = 0;
}


round = 0;
function checkWinner() {
    round++;
    console.log(round + " rounds");
    console.log(player_score.innerHTML);
    console.log(computer_score.innerHTML);
    if (round === 5) {
        if (parseInt(player_score.innerHTML) > parseInt(computer_score.innerHTML)) {
            alert("You win!");
        } else if (parseInt(player_score.innerHTML) < parseInt(computer_score.innerHTML)) {
            alert("You lose!");
        } else {
            alert("It's a tie!");
        }
        reset();
    }
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        
    } else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
        } else {
            player_score.innerHTML = parseInt(player_score.innerHTML) + 1;
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
        } else {
            player_score.innerHTML = parseInt(player_score.innerHTML) + 1;
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
        } else {
            player_score.innerHTML = parseInt(player_score.innerHTML) + 1;
        }
    }

    


}


rockButton = document.getElementsByClassName("rock")[0];
paperButton = document.getElementsByClassName("paper")[0];
scissorsButton = document.getElementsByClassName("scissors")[0];

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    let choice = "";
    if (random == 0) {
        choice = "ROCK";
    } else if (random == 1) {
        choice = "PAPER";
    } else {
        choice = "SCISSORS";
    }
    computer.innerHTML = choice;
    return choice;
}

function playRock() {
    player.innerHTML = "ROCK";
    return playGame("ROCK", computerPlay());
}

function playPaper() {
    player.innerHTML = "PAPER";
    return playGame("PAPER", computerPlay());
}

function playScissors() {
    player.innerHTML = "SCISSORS";
    return playGame("SCISSORS", computerPlay());
}


rockButton.addEventListener("click", playRock);
rockButton.addEventListener("click", checkWinner);

paperButton.addEventListener("click", playPaper);
paperButton.addEventListener("click", checkWinner);
scissorsButton.addEventListener("click", playScissors);
scissorsButton.addEventListener("click", checkWinner);











