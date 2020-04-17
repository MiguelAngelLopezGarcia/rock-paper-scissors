let roundsLeft = 5;
let playerScore = 0;
let computerScore = 0;

const selectionRockIMG = document.querySelector('#selectionRock');
selectionRockIMG.addEventListener('click', () => {
    const playerSelection = "rock";
    playRound(playerSelection, computerPlay());
    refreshRoundsLeft();
    refreshScore();
    writeGameResoult();
});

const selectionPaperIMG = document.querySelector('#selectionPaper');
selectionPaperIMG.addEventListener('click', () => {
    const playerSelection = "paper";
    playRound(playerSelection, computerPlay());
    refreshRoundsLeft();
    refreshScore();
    writeGameResoult();
});

const selectionScissorsIMG = document.querySelector('#selectionScissors');
selectionScissorsIMG.addEventListener('click', () => {
    const playerSelection = "scissors";
    playRound(playerSelection, computerPlay());
    refreshRoundsLeft();
    refreshScore();
    writeGameResoult();
});

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', () => {
    roundsLeft = 5;
    computerScore = 0;
    playerScore = 0;
    refreshGame();
    refreshRoundsLeft();
    refreshScore();
    refreshIMG();
});

const howToPlay = document.querySelector('#rules');
howToPlay.addEventListener('click',() => {
    alert("This is a very basic game of Rock, Paper and Scissors. \n" +
    "You have to choose between one of the different images and the computer will randomly select other choice. \n" +
    "Theese are the rules: \n" +
    "- You will play five rounds, the one with higher score at the end of the five rounds will win. \n" +
    "- Rock beats Scissors. \n" +
    "- Scissors beats Paper. \n" +
    "- Paper beats Rock. \n" +
    "- It may happen a tie. \n" +
    "After playing the five rounds you will have to reset the game using the \" Restart Game\" button. \n" +
    "Now choose your first image and good luck!")
})

function computerPlay() {
    let pcPick = Math.random()*3;
    pcPick = Math.floor(pcPick);

    const rps = ["rock", "paper", "scissors"];
    return rps[pcPick];
}

function playRound(playerSelection, computerSelection){
    
    if (roundsLeft <= 0) {alert("If you want to play again please click the restart button"); return;}

    switch(playerSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        playerScore++
        roundsLeft--
        writeWinnerRound(playerSelection, computerSelection);
        break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        computerScore++
        roundsLeft--
        writeLooserRound(playerSelection, computerSelection);
        break;
        
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        roundsLeft--
        writeTieRound(playerSelection, computerSelection);
        break;
    }
};

function refreshRoundsLeft(e) {
    const rounds = document.querySelector('.roundNumber');
    rounds.textContent = roundsLeft;
};

function refreshScore(e) {
    const playerPoints = document.querySelector('.playerPunctuation');
    playerPoints.textContent = playerScore;

    const computerPoints = document.querySelector('.computerPunctuation');
    computerPoints.textContent = computerScore;
};

function writeWinnerRound(playerSelection, computerSelection) {
    const winner = document.querySelector('.winner');
    winner.classList.add('winnerWin');
    winner.textContent = "You win this round!";
    if (playerSelection == "rock" && computerSelection == "scissors") {
        document.getElementById("playerIMG").src = "img/rock.jpg";

        document.getElementById("computerIMG").src = "img/scissors.png";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        document.getElementById("playerIMG").src = "img/paper.jpg";

        document.getElementById("computerIMG").src = "img/rock.jpg";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        document.getElementById("playerIMG").src = "img/scissors.png";

        document.getElementById("computerIMG").src = "img/paper.jpg";
    } else {alert("Error")}
};

function writeLooserRound(playerSelection, computerSelection) {
    const winner = document.querySelector('.winner');
    winner.classList.add('winnerLoose');
    winner.textContent = "You loose this round!";
    if (playerSelection == "scissors" && computerSelection == "rock"){
        document.getElementById("playerIMG").src = "img/scissors.png";

        document.getElementById("computerIMG").src = "img/rock.jpg";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        document.getElementById("playerIMG").src = "img/rock.jpg";

        document.getElementById("computerIMG").src = "img/paper.jpg";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        document.getElementById("playerIMG").src = "img/paper.jpg";

        document.getElementById("computerIMG").src = "img/scissors.png";
    }else {alert("Error")}
};

function writeTieRound(playerSelection, computerSelection) {
    const winner = document.querySelector('.winner');
    winner.classList.add('winnerTie');
    winner.textContent = "This round is tie!";
    if (playerSelection == "rock" && computerSelection == "rock"){
        document.getElementById("playerIMG").src = "img/rock.jpg";

        document.getElementById("computerIMG").src = "img/rock.jpg";
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        document.getElementById("playerIMG").src = "img/paper.jpg";

        document.getElementById("computerIMG").src = "img/paper.jpg";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        document.getElementById("playerIMG").src = "img/scissors.png";

        document.getElementById("computerIMG").src = "img/scissors.png";
    }else {alert("Error")}
};

function removeTransition (e) {
    if (e.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('winnerWin');
    this.classList.remove('winnerLoose');
    this.classList.remove('winnerTie');
};

const winnerText = document.querySelectorAll('.winner');
winnerText.forEach(winner => winner.addEventListener('transitionend', removeTransition));

function writeGameResoult(){
    if (roundsLeft !== 0) {
        return;} else if (roundsLeft == 0 && playerScore < computerScore){
            const gameWinner = document.querySelector('#VS');
            gameWinner.classList.add('gameWinner');
            gameWinner.textContent = "YOU ARE A LOOSER!!";
        } else if (roundsLeft == 0 && playerScore > computerScore) {
            const gameWinner = document.querySelector('#VS');
            gameWinner.classList.add('gameWinner');
            gameWinner.textContent = "YOU ARE THE WINNER!!!!";
        } else {
            const gameWinner = document.querySelector('#VS');
            gameWinner.classList.add('gameWinner');
            gameWinner.textContent = "THIS GAME WAS TIE!";
        }
};

function refreshGame() {
    const winner = document.querySelector('.winner');
    winner.textContent = "Can you beat the Computer?";
    const gameWinner = document.querySelector('#VS');
    gameWinner.classList.remove('gameWinner')
    gameWinner.classList.add('VS');
    gameWinner.textContent = "VS";
};

function refreshIMG() {
    document.getElementById("playerIMG").src = "img/player.jpg";

    document.getElementById("computerIMG").src = "img/computer.png";
}