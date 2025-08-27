let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)

function checkGuess() {
    let guessNumber = parseInt(userInput.value);

    if (guessNumber > randomNumber) {
        gameResult.textContent = "Too High!";
        gameResult.backgroundColor = "1e217c";
    } else if (guessNumber < randomNumber) {
        gameResult.textContent = "Too Low!";
        gameResult.backgroundColor = "1e217c";
    } else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congratulations you are Correct!";
        alert("Congratulations you are Correct!");
        gameResult.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please Enter a valid input!";
        gameResult.backgroundColor = "green";
    }
}