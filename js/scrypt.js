/* 1.Human should choose r p or s; 
2. Computer makes a randome decision; 
3. They are comparing; */ 

//1. 
function computerPlay() {
    const rockPaperScissors = ["rock","paper","scissors"]
    
    let randomValue= rockPaperScissors[Math.floor(Math.random()* rockPaperScissors.length)]
    
    return randomValue;

    }



//3. 
function game() {
    computerSelection=computerPlay(); 

    console.log(computerSelection);
    
    let playerSelection = (prompt("rock, paper or scissors?"));
    if (playerSelection.toLowerCase===computerSelection.toLowerCase) { 
        console.log("it's a toe")
    } else { 
        console.log("It's not a toe")
    }
   
}

game();