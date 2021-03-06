

let numRounds = 5;
let actualRound = 0;
let roundsLeft = 4;
let playerScore = 0;
let computerScore = 0;

while (actualRound != numRounds) {
    const computerPlay = () => {
        let pcPick = Math.random()*3;
        pcPick = Math.floor(pcPick);

        const rps = ["rock", "paper", "scissors"];
        return rps[pcPick];
    }

    const userPlay = () => {
        userPick = prompt("Choose between Rock, Paper and Scissors.");
        return userPick.toLowerCase()
    }

    const score = () => {
        return ("Player: " + playerScore + " points." +"\nComputer: " + 
        computerScore + " points.")
    }

    function playRound(playerSelection, computerSelection){
        switch(playerSelection + computerSelection) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
            playerScore++
            return ("You win! " + playerSelection + " beats " + computerSelection + 
            "." + "\nYou have " + roundsLeft + " rounds left.\n" + score());
            break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
            computerScore++
            return ("You lose! " + computerSelection + " beats " + playerSelection + 
            "." + "\nYou have " + roundsLeft + " rounds left.\n" + score());
            break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
            return ("It's a tie!" +"\nYou have " + roundsLeft + " rounds left.\n"
            + score());
            break;
        }
    }

    const playerSelection = userPlay();
    const computerSelection = computerPlay();

    alert(playRound(playerSelection, computerSelection));
    actualRound++
    roundsLeft--
}

if (playerScore < computerScore) {
    alert("You lose the game!")
} else if (playerScore > computerScore) {
    alert("You win the game!")
} else if (playerScore == computerScore) {
    alert("The game it's tie!")
}
