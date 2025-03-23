
let menuOpen = false;

function toggleMenu(val) {
  if(val) {
  }
  else {
    if(!menuOpen) { 
      $('#menu').animate({
        right: 0
      }, 420, 'swing');
    }
    else { 
      $('#menu').animate({
        right: -260
      }, 420, 'swing');
    }
    menuOpen = !menuOpen;
  }
} 