// DOM section 
const result = document.querySelector('#result'); 
const p = document.createElement('p');


const player = document.querySelector('#player')     //Shows the answers 
const computer = document.querySelector('#computer')   // on the page 

const playerChoose = document.createElement('div')
const computerChoose = document.createElement('div')
computerChoose.classList.add('options');
playerChoose.classList.add('options');

const scoarboard = document.querySelector('#scoarboard'); //scoreboards the results
let win = 0;
let lose = 0;
const playerScoar = document.querySelector ('#playerScoar');
playerScoar.textContent = win; 
const computerScoar = document.querySelector ('#computerScoar');
computerScoar.textContent = lose; 




//randomly generats computer answer
function computerPlay() {
    const rockPaperScissors = ["rock","paper","scissors"]
    let randomValue= rockPaperScissors[Math.floor(Math.random()* rockPaperScissors.length)]

    computerChoose.textContent = randomValue; 
    computer.appendChild(computerChoose);

    return randomValue;
    }

    

let playerSelection //let player select an option via buttons 
const buttons = document.querySelectorAll('button'); 
buttons.forEach((button) => { 
       button.addEventListener('click', () => { 
         playerSelection = button.id

         playerChoose.textContent = playerSelection; 
         player.appendChild(playerChoose);

         if (win===5 || lose===5) {
            win =0; 
            lose =0; 
            playerScoar.textContent = win;
            computerScoar.textContent = lose; 
          }

         playRound()
       });
   });


function playRound() { //compare generated tandom valuse vs players one and shows a winer
    let computerSelection=computerPlay();
    console.log(playerSelection)

    if (playerSelection != "rock"&&playerSelection != "paper"&&playerSelection != "scissors"){
        p.textContent = 'Somehow you manage to choose another variant. You defeat the creator of the game.'; 
        result.appendChild(p);
    } else {
     if (playerSelection===computerSelection) { 
        p.textContent = 'It\'s a toe'; 
        result.appendChild(p);
     } else if (playerSelection=="rock"&&computerSelection=="scissors") {
        p.textContent = "You win, rock beats scissors";
        result.appendChild(p);
        win += 1;
        playerScoar.textContent = win; 
     } else if(playerSelection=="scissors"&&computerSelection=="paper") { 
        p.textContent = "You win, scissors beats paper";
        result.appendChild(p);
        win += 1; 
        playerScoar.textContent = win; 
     } else if (playerSelection=="paper"&&computerSelection=="rock") { 
        p.textContent = "You win, paper beats rock";
        result.appendChild(p);
        win += 1; 
        playerScoar.textContent = win; 
     } else { 
        p.textContent = "You lose, " + computerSelection + " beats " + playerSelection ;
        result.appendChild(p);
        lose += 1; 
        computerScoar.textContent = lose; 
    } 
    if (win === 5) { 
      p.textContent = 'You won the game congrats!' + ' To start new game press any button.'; 
      result.appendChild(p);
      
    } else if (lose === 5) { 
      p.textContent = 'You lose try again :(' + ' To start new game press any button.'; 
      result.appendChild(p);
      
    }
 }

 } 
 





