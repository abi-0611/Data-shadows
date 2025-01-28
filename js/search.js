document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".input-search");

    searchBox.addEventListener("keydown", function (event) {
      // Check if Enter key is pressed
      if (event.key === "Enter") {
        // Redirect if the input value is "link"
        if (searchBox.value.trim().toLowerCase() === "link") {
          window.location.href = "answer.html"; // Replace with your target page URL
        } else {
          alert("Incorrect answer!"); // Optional feedback
        }
      }
    });
  });