var preloader = document.getElementById('loading');
function loadingFunction()
{
    preloader.style.display = 'none';
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-8vh";
  }
  prevScrollpos = currentScrollPos;
}
