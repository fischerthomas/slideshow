// addEvent Polyfill
var addEvent = function(element, type, callback){
    if (element.attachEvent) {
        element.attachEvent("on" + type, callback);
        addEvent = function(element, type, callback){
            element.attachEvent("on" + type, callback);
        }
    }
    else {
        element.addEventListener(type, callback, false);
        addEvent = function(element, type, callback){
            element.addEventListener(type, callback, false);
        }
    }
};




// Instance of the new Object : Slider
var Slider = function(id){

  // Check to see if the current page contains a PDF preview    
 // if (document.querySelectorAll(".pdf-preview")) {



    var id =slideshow.getAttribute(id);

    // vars 
    var slideshow = document.getElementById(id),
        nav = slideshow.getElementsByTagName('nav')[0],
        previews = slideshow.getElementsByTagName('figure');
            
    if(previews){
        //Show the first image
        previews[0].classList.add("show");

        // Iterate the previews
        Array.prototype.forEach.call(previews, function (preview, i) {

            // Create footer circular icon
            var li = document.createElement("li");
            li.innerHTML = '<a href="#"></a>';
            
            //hightlight the first icon
            if(i == 0){
                li.classList.add('centered-btns_here');
            } 

            nav.firstChild.appendChild(li);
            this.bullets = nav.getElementsByTagName('a');
     
            //Show the first image
            bullets[0].classList.add("active");

            var liLink = li.firstChild;

            var that = this;

            //Bind click event
            liLink.addEventListener("click", function (e) {
                e.preventDefault();
                //show selected image
                showSelectedImage(i, that.bullets);
                this.classList.add("active");
            });
        });
    }



    function showSelectedImage(index) {

        Array.prototype.forEach.call(previews, function (preview, i) {
            if(i === index) {
                preview.classList.add("show");
            } else {
                preview.classList.remove("show");
            }
        });

        Array.prototype.forEach.call(bullets, function (bullet, i) {
            if(i === index) {
                //bullet.classList.add("active");
            } else {
                bullet.classList.remove("active");
            }
        });
    }


 // }



};
// On Load
addEvent(window, 'load', function(){

  var slider = new Slider('slideshow-1');
  //var slider2 = new Slider('slideshow-2');

});

















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




