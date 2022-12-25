let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
buttonDecrement.addEventListener('click', handleMinusClic)
function handleMinusClic(e) {
    counterValue = counterValue - 1;
    document.getElementById("value").innerHTML = counterValue;
};

const buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonIncrement.addEventListener('click', handlePlusClic)
function handlePlusClic(e) {
    counterValue += 1;
    document.getElementById("value").innerHTML = counterValue;
};

