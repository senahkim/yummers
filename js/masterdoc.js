document.addEventListener("DOMContentLoaded", function () {
  var yummersHeader = document.querySelector(".div-3");

  yummersHeader.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5503/feed/feed.html";
  });
});

// Define a variable to track the button visibility
var isButtonVisible = true;

function toggleForm() {
  var form = document.getElementById("camera-form");
  var uploadButton = document.getElementById("upload-button");
  var defaultUploadButton = document.getElementById("file-upload");

  // Toggle form visibility
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    defaultUploadButton.style.display = "none"; // Hide the default upload button
  } else {
    form.classList.add("hidden");
    defaultUploadButton.style.display = "block"; // Show the default upload button

    // Toggle the pink rectangle button visibility based on the variable
    if (isButtonVisible) {
      uploadButton.style.display = "none"; // Hide the pink rectangle button
      isButtonVisible = false; // Update the visibility state
    } else {
      uploadButton.style.display = "inline-block"; // Show the pink rectangle button
      isButtonVisible = true; // Update the visibility state
    }
  }

  // Update button content and trigger animation
  uploadButton.innerText = "Upload"; // Set the button text
}
