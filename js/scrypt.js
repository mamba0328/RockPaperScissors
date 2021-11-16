
function computerPlay() {
    const rockPaperScissors = ["rock","paper","scissors"]
    
    let randomValue= rockPaperScissors[Math.floor(Math.random()* rockPaperScissors.length)]
    
    return randomValue;

    }

    
    
    
    
function playRound() {
    let computerSelection=computerPlay();
    console.log(computerSelection)

    let playerSelection = prompt("rock, paper or scissors?").toLowerCase();

    
    if (playerSelection != "rock"&&playerSelection != "paper"&&playerSelection != "scissors"){
        console.log("Are you dumbass?")
    } else {
    
    if (playerSelection===computerSelection) { 
        return "it's a toe";
    } else if (playerSelection=="rock"&&computerSelection=="scissors") {
        return "You win, rock beats scissors";
    } else if(playerSelection=="scissors"&&computerSelection=="paper") { 
        return "You win, scissors beats paper";
    } else if (playerSelection=="paper"&&computerSelection=="rock") { 
        return "You win, paper beats rock";
    } else { 
        return "You lose, " + computerSelection + " beats " + playerSelection ;
    }
}
}

function game() { 
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
}

game();

