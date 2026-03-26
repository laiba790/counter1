const counterValueE1 = document.querySelector(".counter__value");
const counterTitleE1 = document.querySelector(".counter__title");
const increaseButtonE1 = document.querySelector(".counter__button--increase");
const decreaseButtonE1 = document.querySelector(".counter__button--decrease");
const resetButtonE1 = document.querySelector(".counter__reset-button");

const MAX = 5;
const MIN = 0;

// Central function to update counter and title
function updateCounter(newValue) {
    counterValueE1.textContent = newValue;
    counterTitleE1.textContent = (newValue === MAX) ? "You have reached the limit" : "Fancy Counter";
}

// Increase button click
increaseButtonE1.addEventListener("click", () => {
    const value = +counterValueE1.textContent;
    if (value < MAX) updateCounter(value + 1);
});

// Decrease button click
decreaseButtonE1.addEventListener("click", () => {
    const value = +counterValueE1.textContent;
    updateCounter(Math.max(MIN, value - 1));
});

// Reset button
resetButtonE1.addEventListener("click", () => updateCounter(0));

// Keyboard support: ArrowUp = increase, ArrowDown = decrease
document.addEventListener("keydown", (event) => {
    const value = +counterValueE1.textContent;

    if (event.key === "ArrowUp" && value < MAX) {
        updateCounter(value + 1);
    }

    if (event.key === "ArrowDown") {
        updateCounter(Math.max(MIN, value - 1));
    }
});     