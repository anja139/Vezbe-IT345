const countDisplay = document.getElementById('count');

const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

increaseButton.addEventListener('click', increaseCount);
decreaseButton.addEventListener('click', decreaseCount);
resetButton.addEventListener('click', resetCount);

let count = 0;

function updateDisplay() {
    countDisplay.textContent = count;
}

function increaseCount() {
    count++;
    updateDisplay();
}

function decreaseCount() {
    if (count > 0) {
        count--;
    }
    updateDisplay();
}

function resetCount() {
    count = 0;
    updateDisplay();
}
