$(window).scroll(function() {
  var positionTop = $(document).scrollTop();
  console.log(positionTop);
  if (positionTop > 800) {
    $(".navbar").css("background", "#222328");
    $(".navbar").css("box-shadow", " 0 10px 33px rgba(0, 0, 0, .1)");

  }
  if ((positionTop > 0) && (positionTop < 800)) {
    $(".navbar").css("background", "none");
    $(".navbar").css("box-shadow", "none");
  }
});
$(".home").click(function() {
  $(".navbar").css("background", "none");
  $(".navbar").css("box-shadow", "none");
});
$(".sidenav-home").click(function() {
  $(".navbar").css("background", "none");
  $(".navbar").css("box-shadow", "none");
});
// preventing bootstrap navbar default implementation of toggler icon onclick
$(".navbar-toggler").click(function(e) {
  e.preventDefault();
  e.stopPropagation();
});
// sidenav bar
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  $("body").click(function() {
    document.getElementById("mySidenav").style.width = "0";


  });

}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        // element.classList.add('in-left');
        element.classList.add('in-right');
      } else {
        // element.classList.remove('in-left');
          element.classList.remove('in-right');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
