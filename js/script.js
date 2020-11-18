//Logo pop up

window.onscroll = function() {scrollFunction()};
          
  function scrollFunction() {
    if (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680) {
      document.getElementById("logo").style.fontSize = "50px";
    } else {
      document.getElementById("logo").style.fontSize = "0px";
    }
  }
