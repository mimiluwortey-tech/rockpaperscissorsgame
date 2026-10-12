const moveButtons = document.querySelectorAll(".move-button");
const playerScoreDisplay = document.getElementById("player-score");
const drawScoreDisplay = document.getElementById("draw-score");
const computerScoreDisplay = document.getElementById("computer-score");
const choicesText = document.getElementById("choices-text");
const resultText = document.getElementById("result-text");
const playAgainButton = document.getElementById("play-again-button");

let playerScore = 0;
let drawScore = 0;
let computerScore = 0;

const moves = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

function getResult(player, computer) {
    if (player === computer) {
        return "draw";
    }

    if (beats[player] === computer) {
        return "win";
    }

    return "lose";
}

const emojis = { rock: "✊", paper: "✋", scissors: "✌️" };

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    choicesText.textContent = `You: ${emojis[playerChoice]} ${playerChoice} vs Computer: ${emojis[computerChoice]} ${computerChoice}`;

    if (result === "win") {
        playerScore = playerScore + 1;
        resultText.textContent = "You win this round! 🎉";
    } else if (result === "lose") {
        computerScore = computerScore + 1;
        resultText.textContent = "Computer wins this round!";
    } else {
        drawScore = drawScore + 1;
        resultText.textContent = "It's a draw!";
    }

    playerScoreDisplay.textContent = playerScore;
    drawScoreDisplay.textContent = drawScore;
    computerScoreDisplay.textContent = computerScore;
}

moveButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        playRound(button.dataset.move);
    });
});

playAgainButton.addEventListener("click", function () {
    playerScore = 0;
    drawScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = playerScore;
    drawScoreDisplay.textContent = drawScore;
    computerScoreDisplay.textContent = computerScore;

    choicesText.textContent = "";
    resultText.textContent = "Make a move to see the result!";
});