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
$(document).ready(function() {
	$(window).on('scroll', function () {
		var navBarTop = $('.my-skills').offset().top;
		var scrollPosition = $(window).scrollTop();
		if (scrollPosition > navBarTop) {
			$('.skillbar').each(function () {
				$(this).find('.skillbar-bar').animate({
					width: $(this).attr('data-percent')
				}, 3000);
			});
		}
	});


	$('.circle').mouseenter(function () {
		$(this).addClass("animated bounce");
	});

	//hamburger menu
	//$(".menu").show();
	$(".hamburger").click(function () {
		$(".menu").slideToggle("slow", function () {
			$(".hamburger").show(".menu");

		});
	});
});
