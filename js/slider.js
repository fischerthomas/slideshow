
var counter = 0, // current slide
    $items = document.querySelectorAll('.slideshow figure'), // all the slides
    numItems = $items.length; // number of slides

// showing the next or previous slide and hiding all the others
var showCurrent = function(){

  var itemToShow = Math.abs(counter%numItems);// uses modul operator to get the actual index of the element to show  
  
  // remove .show from whichever element currently has it 
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });
  
  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');    
};

// add click events to prev & next buttons 
document.querySelector('.next a').addEventListener('click', function() {

     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev a ').addEventListener('click', function() {

     counter--;
     showCurrent();
  }, false);
  
showCurrent()