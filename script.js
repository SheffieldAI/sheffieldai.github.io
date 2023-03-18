var secondsLeft = 2;
function updateTimer() {
    secondsLeft--;
    document.querySelector('.timer').textContent = secondsLeft;
    if (secondsLeft <= 0) {
        window.location.href = 'https://shef-ai.github.io/';
    }
}
setInterval(updateTimer, 1000);