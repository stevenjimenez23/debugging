
function checkAnswer() {
    var selectedAnswer = document.querySelector("input[name='bananas']:checked").value;
    if (selectedAnswer == "persephone") {
        alert("Correct!")
    } else {
        alert("Wrong!")
    }
}