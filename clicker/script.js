let score = 0;
let clickValue = 1;
let numAutoClickers = 0;
let autoClickValue = 1;
let numUpgrades = 0;
let numUpgrades2 = 0;
let numUpgrades3 = 0;
let numUpgrades4 = 0;
let numUpgrades5 = 0;

const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgrade1Button = document.getElementById('upgrade1');
const upgrade2Button = document.getElementById('upgrade2');
const upgrade3Button = document.getElementById('upgrade3');
const upgrade4Button = document.getElementById('upgrade4');
const upgrade5Button = document.getElementById('upgrade5');
const autoClicker1Button = document.getElementById('autoClicker1');
const numUpgradesElement = document.getElementById('numUpgrades');
const numUpgrades2Element = document.getElementById('numUpgrades2');
const numUpgrades3Element = document.getElementById('numUpgrades3');
const numUpgrades4Element = document.getElementById('numUpgrades4');
const numUpgrades5Element = document.getElementById('numUpgrades5');
const numAutoClickersDisplay = document.getElementById('numAutoClickersDisplay');
const resetButton = document.getElementById('resetButton');

// Upgrade costs and effects
const upgradeCosts = [10, 100, 500, 1000, 5000];
const upgradeEffects = [2, 5, 10, 20, 99999999999999999999999999999999999999999999999999999999];

// Auto-clicker costs and effects
const autoClickerCosts = [50];
const autoClickerEffects = [10];

// Auto-click function
function autoClick() {
    score += numAutoClickers * autoClickValue;
    scoreElement.textContent = `Score: ${score}`;
}

// Set interval for auto-clicking
setInterval(autoClick, 1); // Auto-click every second

clickButton.addEventListener('click', () => {
    score += clickValue;
    scoreElement.textContent = `Score: ${score}`;
});

upgrade1Button.addEventListener('click', () => {
    if (score >= upgradeCosts[0]) {
        score -= upgradeCosts[0];
        clickValue += upgradeEffects[0];
        scoreElement.textContent = `Score: ${score}`;
        numUpgrades++;
        numUpgradesElement.textContent = numUpgrades;
    }
});

upgrade2Button.addEventListener('click', () => {
    if (score >= upgradeCosts[1]) {
        score -= upgradeCosts[1];
        clickValue += upgradeEffects[1];
        scoreElement.textContent = `Score: ${score}`;
        numUpgrades2++;
        numUpgrades2Element.textContent = numUpgrades2;
    }
});

upgrade3Button.addEventListener('click', () => {
    if (score >= upgradeCosts[2]) {
        score -= upgradeCosts[2];
        clickValue += upgradeEffects[2];
        scoreElement.textContent = `Score: ${score}`;
        numUpgrades3++;
        numUpgrades3Element.textContent = numUpgrades3;
    }
});

upgrade4Button.addEventListener('click', () => {
    if (score >= upgradeCosts[3]) {
        score -= upgradeCosts[3];
        clickValue += upgradeEffects[3];
        scoreElement.textContent = `Score: ${score}`;
        numUpgrades4++;
        numUpgrades4Element.textContent = numUpgrades4;
    }
});

upgrade5Button.addEventListener('click', () => {
    if (score >= upgradeCosts[4]) {
        score -= upgradeCosts[4];
        clickValue += upgradeEffects[4];
        scoreElement.textContent = `Score: ${score}`;
        numUpgrades5++;
        numUpgrades5Element.textContent = numUpgrades5;
    }
});

autoClicker1Button.addEventListener('click', () => {
    if (score >= autoClickerCosts[0]) {
        score -= autoClickerCosts[0];
        numAutoClickers++;
        scoreElement.textContent = `Score: ${score}`;
        numAutoClickersDisplay.textContent = numAutoClickers;
    }
});

// Reset Game function
function resetGame() {
    score = 5000;
    clickValue = 1;
    numAutoClickers = 0;
    autoClickValue = 1;
    numUpgrades = 0;
    numUpgrades2 = 0;
    numUpgrades3 = 0;
    numUpgrades4 = 0;
    numUpgrades5 = 9999999;

    scoreElement.textContent = `Score: ${score}`;
    numUpgradesElement.textContent = numUpgrades;
    numUpgrades2Element.textContent = numUpgrades2;
    numUpgrades3Element.textContent = numUpgrades3;
    numUpgrades4Element.textContent = numUpgrades4;
    numUpgrades5Element.textContent = numUpgrades5;
    numAutoClickersDisplay.textContent = numAutoClickers;

    // Clear saved game data
    localStorage.removeItem('clickerGameState');
}

// Save game function
function saveGame() {
    const gameState = {
        score: score,
        clickValue: clickValue,
        numAutoClickers: numAutoClickers,
        numUpgrades: numUpgrades,
        numUpgrades2: numUpgrades2,
        numUpgrades3: numUpgrades3,
        numUpgrades4: numUpgrades4,
        numUpgrades5: numUpgrades5,
    };
    localStorage.setItem('clickerGameState', JSON.stringify(gameState));
}

// Load game function
function loadGame() {
    const savedGameState = localStorage.getItem('clickerGameState');
    if (savedGameState) {
        const gameState = JSON.parse(savedGameState);
        score = gameState.score;
        clickValue = gameState.clickValue;
        numAutoClickers = gameState.numAutoClickers;
        numUpgrades = gameState.numUpgrades;
        numUpgrades2 = gameState.numUpgrades2;
        numUpgrades3 = gameState.numUpgrades3;
        numUpgrades4 = gameState.numUpgrades4;
        numUpgrades5 = gameState.numUpgrades5;

        scoreElement.textContent = `Score: ${score}`;
        numUpgradesElement.textContent = numUpgrades;
        numUpgrades2Element.textContent = numUpgrades2;
        numUpgrades3Element.textContent = numUpgrades3;
        numUpgrades4Element.textContent = numUpgrades4;
        numUpgrades5Element.textContent = numUpgrades5;
        numAutoClickersDisplay.textContent = numAutoClickers;
    }
}

// Save game periodically
setInterval(saveGame, 10); // Save every 5 seconds

// Load game on page load
loadGame();

// Add event listener to the reset button
resetButton.addEventListener('click', resetGame);