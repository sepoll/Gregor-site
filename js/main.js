document.addEventListener("DOMContentLoaded", function() {

  var button = document.querySelectorAll("a.read_more");
  var i = 0;

  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(event) {
      var article = this.nextElementSibling;
      article.style.display = "block";

      var closeButton = document.createElement("button")

      closeButton.innerHTML = "zamknij";

      closeButton.addEventListener("click", function(event) {
        article.style.display = "none";
        article.removeChild(closeButton);
      });
      article.appendChild(closeButton);
    });
  };
});
