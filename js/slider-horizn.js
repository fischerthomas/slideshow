/*
    SlideShow
    
*/


// Instance of the new Object : Slider
var Slider = function(slideshow){

    // properties declaration 
    var $slideshow = $('#'+ slideshow);
    this.$slideshow = slideshow ? $slideshow : $('.slideshow:first');
    this.$nav = this.$slideshow.find('nav');
    this.$previews = this.$slideshow.find('figure');
    this.currentPreview = 0;

    this.defaultOptions = {speed: 2000}

    // Get the Slideshow Options object via its data-attribute
    this.dataOptions = this.$slideshow.data('options');

    // init the slider
    this.initSlider();

}

// Init Slider
Slider.prototype.initSlider = function(){

    if(this.$previews.length != 0){


        var that = this;

        // Iterate the previews
        this.$previews.each(function (i) {

            // Create the nav
            var $li = $('<li></li>');
            $li.append('<a href="#"></a>');
            that.$nav.find('ul').append($li);

            // Declare var for the navigation
            that.$bullets = that.$nav.find('a');
            var $liLink = $li.find('a');

            //Show the first image
            that.$previews.first().addClass("show");
            that.$bullets.first().addClass("active");


            //Bind click event
            $liLink.on("click", function (e) {

                e.preventDefault();
                
                // if the slideshow is autoPlaying: stop it
                if(that.autoplayTimer){
                    window.clearInterval(that.autoplayTimer);
                }
           
                //show selected image
                that.showSelectedSlide(i, that.$bullets);

            });
        });

    }

    // check if there is some options called
    if(this.dataOptions){

        if(typeof this.dataOptions === 'object'){
            // AutoPlay
            if(this.dataOptions.autoplay){

                var speed = this.dataOptions.autoplay ? this.dataOptions.autoplay : this.defaultOptions.speed;
                // AutoPlay
                this.autoplay(speed);
            }       
        }else if(this.dataOptions === 'autoplay'){

                var speed = this.defaultOptions.speed;
                // AutoPlay
                this.autoplay(speed);
        }else{}

    }
}

// AutoPLay
Slider.prototype.autoplay =  function(speed){

    var that = this;

    this.autoplayTimer = window.setInterval(function(){
        next(that.currentPreview, that.$bullets);
    },speed);

    // next Slide
    function next(num){

        that.showSelectedSlide(num, that.$bullets)

        that.currentPreview +=1;
        
        if(that.currentPreview > that.$previews.length-1){

            that.currentPreview = 0;
        }
    }
}


// Show Selected Slide
Slider.prototype.showSelectedSlide =  function(index, bullets){

    var that = this;
    this.$previews.each(function (i) {

        if(i === index) {
            that.$slideshow.find("figure:eq("+ i + ")").addClass("show");
        } else {
            that.$slideshow.find("figure:eq("+ i + ")").removeClass("show");
        }
    });


    this.$bullets.each(function (i) {

        if(i === index) {
            that.$slideshow.find("a:eq("+ i + ")").addClass("active");
        } else {
            that.$slideshow.find("a:eq("+ i + ")").removeClass("active");
        }
    });

};


(function($){

    // If there is more than 1 slideshow in the same page, give them different id
    var slider1 = new Slider('slideshow-1');
    var slider2 = new Slider('slideshow-2');


})(jQuery);
