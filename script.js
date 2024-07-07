let count = 0;
const countDisplay = document.getElementById('countDisplay');

function updateDisplay() {
    countDisplay.textContent = count;
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

// Initial display update
updateDisplay();
