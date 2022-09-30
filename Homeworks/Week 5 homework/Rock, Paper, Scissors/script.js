
const gameOptions = ['rock', 'paper', 'scissors'];


function gameResults() {
    const userChoice = Math.floor(Math.random() * 3);
console.log("User choice is " + gameOptions[userChoice]);

    const computerChoice = Math.floor(Math.random() *3);
console.log("Computer choice is " + gameOptions[computerChoice]);


      if (computerChoice === userChoice) {
        console.log("Its a draw!");
        return 
      }
    if (gameOptions[userChoice] === 'rock') {
        if (gameOptions[computerChoice] === 'paper') {
            console.log("Computer wins!");
        } 
        else {
            console.log("User wins!");
        }
    }
    if (gameOptions[userChoice] === 'paper') {
        if (gameOptions[computerChoice] === 'rock') {
            console.log("User wins!");
        } 
        else {
            console.log("Computer wins!");
            
        }
    }
    if (gameOptions[userChoice] === 'scissors') {
        if (gameOptions[computerChoice] === 'rock') {
            console.log("Computer wins!");
        }
        else {
            console.log("User wins!");
        }
    }
}


