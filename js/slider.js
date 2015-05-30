// Instance of the new Object : Slider
var Slider = function(slideshow){

  // Check to see if the current page contains a PDF preview    
 // if (document.querySelectorAll(".pdf-preview")) {


    // properties declalration
    this.slideshow = document.getElementById(slideshow);
    this.nav = this.slideshow.getElementsByTagName('nav')[0];
    this.previews = this.slideshow.getElementsByTagName('figure');


    this.initSlider();

}

Slider.prototype.initSlider = function(){

    if(this.previews.length != 0){

        //Show the first image
        this.previews[0].classList.add("show");

        var that = this;

        // Iterate the previews
        Array.prototype.forEach.call(this.previews, function (preview, i) {

            // Create footer circular icon
            var li = document.createElement("li");
            li.innerHTML = '<a href="#"></a>';

            that.nav.firstChild.appendChild(li);
            var bullets = that.nav.getElementsByTagName('a');

            //Show the first image
            bullets[0].classList.add("active");

            var liLink = li.firstChild;

            //Bind click event
            liLink.addEventListener("click", function (e) {

                e.preventDefault();
              
                //show selected image
                that.showSelectedImage(i, bullets);

                this.classList.add("active");
            });
        });
    }

}

Slider.prototype.showSelectedImage =  function(index, bullets){

    this.bullets = bullets;

    Array.prototype.forEach.call(this.previews, function (preview, i) {
        if(i === index) {
            preview.classList.add("show");
        } else {
            preview.classList.remove("show");
        }
    });

    Array.prototype.forEach.call(this.bullets, function (bullet, i) {


        if(i === index) {
            //bullet.classList.add("active");
        } else {
            console.log(bullet)
            bullet.classList.remove("active");
        }
    });

};


// On Load
//addEvent(window, 'load', function(){

  var slider1 = new Slider('slideshow-1');
  var slider2 = new Slider('slideshow-2');

//});

















/*
      var counter = 0, // current slide
          $items = document.querySelectorAll('.slideshow figure'), // all the slides
          numItems = $items.length, // number of slides
          $bullets = document.querySelectorAll('.slideshow .bullets a'), // all the slides
          numBullets = $bullets.length; // number of slides
*/
      // showing the next or previous slide and hiding all the others
/*      var showCurrent = function(item){

        if(item){
          var itemToShow = item
        }else{

          var itemToShow = Math.abs(counter%numItems);// uses modul operator to get the actual index of the element to show  
        }
        
        // remove the class .show from elements 
        // http://stackoverflow.com/a/16053538/2006057
        Array.prototype.forEach.call( $items, function(el){
          el.classList.remove('show');
        });
        
    /*    for(i = 0; i < numItems; i++){
          $items[i].classList.remove('show');
        }
    */
        // add .show to the one item that's supposed to have it
        //$items[itemToShow].classList.add('show');    
      //};

      // add click events to prev & next buttons 
    /*  document.querySelector('.next a').addEventListener('click', function() {

           counter++;
           showCurrent();
        }, false);

      document.querySelector('.prev a ').addEventListener('click', function() {

           counter--;
           showCurrent();
        }, false);
        */

      // bullets
/*      for(i = 0; i < numBullets; i++){

        $bullets[i].addEventListener('click', function() {
            
            showCurrent(Math.abs(this.className)-1);
          }, false);
      }*/




