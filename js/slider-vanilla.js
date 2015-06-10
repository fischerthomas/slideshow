/*

    SlideShow: 
    
*/


// Instance of the new Object : Slider
var Slider = function(slideshow){


    // properties declaration
    this.slideshow = document.getElementById(slideshow);
    this.nav = this.slideshow.getElementsByTagName('nav')[0];
    this.previews = this.slideshow.getElementsByTagName('figure');
    this.currentPreview = 0;


    // Get the Slideshows Options via its data-attribute
    var dataOptions = this.slideshow.getAttribute('data-options');
    this.options = dataOptions ? dataOptions.split(/\s+/) : false;

    // init the slider
    this.initSlider();

}

// Init Slider
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
            that.bullets = that.nav.getElementsByTagName('a');

            //Show the first image
            that.bullets[0].classList.add("active");

            var liLink = li.firstChild;


            //Bind click event
            liLink.addEventListener("click", function (e) {

                e.preventDefault();
                
                // if the slideshow is autPlaying stop it
                if(that.autoplayTimer){
                    window.clearInterval(that.autoplayTimer);
                }
                //show selected image
                that.showSelectedSlide(i, that.bullets);

            });
        });

    }


    // check Options
    if(this.options){

        // AutoPlay
        if(this.options.indexOf("autoplay") > -1){

            var speed = (this.options.length>1) ? this.options[1] : 2000;

            this.autoplay(speed);
        }

    }

}

// AutoPLay
Slider.prototype.autoplay =  function(speed){

    var that = this;

    this.autoplayTimer = window.setInterval(function(){

        next(that.currentPreview, that.bullets);

    },speed);

    // next Slide
    function next(num){

        that.showSelectedSlide(num, that.bullets)

        that.currentPreview +=1;
        
        if(that.currentPreview > that.previews.length-1){

            that.currentPreview = 0;
        }

    }

}


// Show Selected Slide
Slider.prototype.showSelectedSlide =  function(index, bullets){

    //this.bullets = bullets;

    Array.prototype.forEach.call(this.previews, function (preview, i) {
        
        if(i === index) {
            preview.classList.add("show");
        } else {
            preview.classList.remove("show");
        }
    });


    Array.prototype.forEach.call(this.bullets, function (bullet, i) {

        if(i === index) {
            bullet.classList.add("active");
        } else {
            bullet.classList.remove("active");
        }
    });

};



// If there is more than 1 slideshow in the same page, give them different id
var slider1 = new Slider('slideshow-1');
var slider2 = new Slider('slideshow-2');





