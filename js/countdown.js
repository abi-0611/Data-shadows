document.addEventListener("DOMContentLoaded", function () {
  const timerDisplay = document.getElementById("countdown-timer");
  const actionButton = document.getElementById("action-button");
  const hintText = document.getElementById("hint-text"); // Select the hint text element

  let timeLeft = 10 ; // 10 minutes in seconds

  // Update the timer function
  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      unlockButton();
      hintText.style.display = "none"; // Hide the hint text after the countdown finishes
    }
  }

  // Unlock the action button when time is up
  function unlockButton() {
    actionButton.style.display = "inline-block";
    timerDisplay.textContent = "Here is your hint";
  }

  // Start the countdown
  const timerInterval = setInterval(updateTimer, 1000);
});
