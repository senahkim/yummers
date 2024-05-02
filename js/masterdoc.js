document.addEventListener("DOMContentLoaded", function () {
  var yummersHeader = document.querySelector(".div-3");

  yummersHeader.addEventListener("click", function () {
    window.location.href = "feed.html";
  });
});

var isButtonVisible = true;
var uploadTimeout; // Variable to store the timeout ID
var cameraClickable = true; // Variable to track if the camera icon is clickable

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
      cameraClickable = true; // Allow camera icon to be clickable again
    }, 15000); // 15 seconds in milliseconds

    // Disable camera icon clickability when form is visible
    cameraClickable = false;
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

    // Enable camera icon clickability when pink rectangle disappears
    setTimeout(function () {
      cameraClickable = true;
    }, 10000); // 10 seconds in milliseconds
  }

  // Update button content and trigger animation
  uploadButton.innerText = "Upload"; // Set the button text
}

// Function to handle camera icon click event
function cameraIconClicked() {
  if (cameraClickable) {
    // Your camera icon click logic here
    console.log("Camera icon clicked!");
  } else {
    console.log("Camera icon is not clickable yet.");
  }
}
