function getComputerChoice()
{
    var choices = ["rock" , "paper", "scissor"]
    var randomIndex = Math.floor(Math.random()*3)
    var coice = choices[randomIndex]
    return coice
}

function playRound(playerSelection,computerSelection)
{
    if(playerSelection===computerSelection){
        return "tie"
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "you lose! paper beats rock"
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "you win! paper beats rock"
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        return "you win! rock beats scissor"
    }
    else if (playerSelection === "scissor" && computerSelection === "rock"){
        return "you lose! rock beats scissor"
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        return "you win! scissor beats paper"
    }
    else if (playerSelection === "paper" && computerSelection === "scissor"){
        return "you lose! scissor beats paper"
    }
}

console.log(playRound("paper","paper"))