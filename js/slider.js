
(function(){

  var counter = 0, // current slide
      $items = document.querySelectorAll('.slideshow figure'), // all the slides
      numItems = $items.length, // number of slides
      $bullets = document.querySelectorAll('.slideshow .bullets a'), // all the slides
      numBullets = $bullets.length; // number of slides

  // showing the next or previous slide and hiding all the others
  var showCurrent = function(item){

    if(item){
      var itemToShow = item
    }else{

      var itemToShow = Math.abs(counter%numItems);// uses modul operator to get the actual index of the element to show  
    }
    
    // remove the class .show from elements 
    // http://stackoverflow.com/a/16053538/2006057
  /*  Array.prototype.forEach.call( $items, function(el){
      el.classList.remove('show');
    });*/
    
    for(i = 0; i < numItems; i++){
      $items[i].classList.remove('show');
    }

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
    

  // bullets
  for(i = 0; i < numBullets; i++){

    $bullets[i].addEventListener('click', function() {
        
        showCurrent(Math.abs(this.className)-1);
      }, false);
  }


})()




