document.addEventListener("DOMContentLoaded", function () {
  var yummersHeader = document.querySelector(".div-3");

  yummersHeader.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5503/feed/feed.html";
  });
});

var isButtonVisible = true;
var uploadTimeout; // Variable to store the timeout ID

function toggleForm() {
  var form = document.getElementById("camera-form");
  var uploadButton = document.getElementById("upload-button");
  var defaultUploadButton = document.getElementById("file-upload");

  // Toggle form visibility
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    defaultUploadButton.style.display = "none"; // Hide the default upload button

    // Reset the timeout when the form is toggled
    clearTimeout(uploadTimeout);
    // Set a new timeout to hide the upload button after 15 seconds
    uploadTimeout = setTimeout(function () {
      uploadButton.style.display = "none"; // Hide the upload button
    }, 12000); // 15 seconds in milliseconds
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

    // Clear the timeout when the form is hidden
    clearTimeout(uploadTimeout);
  }

  // Update button content and trigger animation
  uploadButton.innerText = "Upload"; // Set the button text
}
