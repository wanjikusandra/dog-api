function getComputerChoice() {
    const rpsChoice = ['rock', 'paper', 'scissors'];
    const randomNumber=Math.floor(Math.random()*3)
    return rpsChoice[randomNumber]
}
console.log(getComputerChoice())

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        score=0
    } 
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        score=1
    }
        else if (playerChoice === 'paper' && computerChoice === 'rock') {
        score=1
        }
        else if (playerChoice === 'scissors' && computerChoice === 'paper'){
            score=1
        }
        else {
            score=-1
        }
        return score
}
getResult('rock', 'scissors')