// Game state variables
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
const MAX_ROUNDS = 5;

// DOM Element References
const playerScore_p = document.getElementById('player-score');
const computerScore_p = document.getElementById('computer-score');
const roundInfo_h2 = document.getElementById('round-info');
const roundResult_p = document.getElementById('round-result');
const finalResult_h2 = document.getElementById('final-result');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissor_btn = document.getElementById('scissor');
const playAgain_btn = document.getElementById('play-again');

// Add event listeners to buttons
rock_btn.addEventListener('click', () => game('rock'));
paper_btn.addEventListener('click', () => game('paper'));
scissor_btn.addEventListener('click', () => game('scissor'));
playAgain_btn.addEventListener('click', resetGame);

/**
 * Gets the computer's choice randomly.
 * @returns {string} 'rock', 'paper', or 'scissor'
 */
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

/**
 * Plays a single round of Rock Paper Scissors.
 * @param {string} playerSelection - The player's choice.
 * @param {string} computerSelection - The computer's choice.
 * @returns {string} The result message for the round.
 */
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a Tie! You both chose ${playerSelection}.`;
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        playerScore++;
        playerScore_p.textContent = playerScore;
        return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else {
        computerScore++;
        computerScore_p.textContent = computerScore;
        return `You Lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;
    }
}

/**
 * Main game function, triggered by player's choice.
 * @param {string} playerSelection - The player's choice.
 */
function game(playerSelection) {
    const computerSelection = getComputerChoice();
    roundResult_p.textContent = playRound(playerSelection, computerSelection);

    if (roundNumber === MAX_ROUNDS) {
        endGame();
    } else {
        roundNumber++;
        roundInfo_h2.textContent = `Round ${roundNumber}`;
    }
}

/**
 * Handles the end of the game after 5 rounds.
 */
function endGame() {
    rock_btn.disabled = true;
    paper_btn.disabled = true;
    scissor_btn.disabled = true;

    if (playerScore > computerScore) {
        finalResult_h2.textContent = 'Congratulations! You won the game!';
    } else if (computerScore > playerScore) {
        finalResult_h2.textContent = 'Game Over! The computer won.';
    } else {
        finalResult_h2.textContent = "It's a tie game!";
    }

    playAgain_btn.classList.remove('hidden');
}

/**
 * Resets the game to its initial state.
 */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;

    playerScore_p.textContent = '0';
    computerScore_p.textContent = '0';
    roundInfo_h2.textContent = 'Round 1';
    roundResult_p.textContent = 'Choose your weapon!';
    finalResult_h2.textContent = '';

    playAgain_btn.classList.add('hidden');

    rock_btn.disabled = false;
    paper_btn.disabled = false;
    scissor_btn.disabled = false;
}

/**
 * Helper function to capitalize the first letter of a string.
 * @param {string} string - The string to capitalize.
 * @returns {string} The capitalized string.
 */
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}