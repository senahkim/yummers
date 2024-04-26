document.addEventListener("DOMContentLoaded", function () {
  var yummersHeader = document.querySelector(".div-3");

  yummersHeader.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5503/feed/feed.html";
  });
});
