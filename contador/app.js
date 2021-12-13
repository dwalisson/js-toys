var buttonDecrement = document.getElementById("decrement");
var buttonIncrement = document.getElementById("increment");
var count = parseInt(currentNumber.innerHTML);

buttonDecrement.addEventListener("click", function () {
    
    count = count - 1;
    
    setCurrentNumber(count);
    setNumberStyle(count);
    setButtonsState(count);
})

buttonIncrement.addEventListener("click", function () {
    
    count = count + 1;

    setCurrentNumber(count);
    setNumberStyle(count);
    setButtonsState(count);
})

function setCurrentNumber(count) {
    var currentNumber = document.getElementById("currentNumber");
    currentNumber.innerHTML = count;
}

function setNumberStyle(count) {
    currentNumber.style.color = "black";

    if (count < 0) {
        currentNumber.style.color = "red";
    } else if (count > 0) {
        currentNumber.style.color = "blue";
    }
}

function setButtonsState(count) {
    buttonIncrement.disabled = false;
    buttonDecrement.disabled = false;

    if (count >= 10) {
        buttonIncrement.disabled = true;
    } else if (count <= -10) {
        buttonDecrement.disabled = true;
    }
}