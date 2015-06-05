// Instance of the new Object : Slider
var Slider = function(slideshow, autoPlay){


    // properties declalration
    this.slideshow = document.getElementById(slideshow);
    this.nav = this.slideshow.getElementsByTagName('nav')[0];
    this.previews = this.slideshow.getElementsByTagName('figure');
    this.autoPlay = autoPlay;

    this.currentPreview = 0;
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
            that.bullets = that.nav.getElementsByTagName('a');

            //Show the first image
            that.bullets[0].classList.add("active");

            var liLink = li.firstChild;


            //Bind click event
            liLink.addEventListener("click", function (e) {

                e.preventDefault();
              
                //show selected image
                that.showSelectedImage(i, that.bullets);

                //this.classList.add("active");
            });
        });


    }

    if(this.autoPlay){
        this.play();
    }

}

Slider.prototype.play =  function(){
    var that = this;

    window.setInterval(function(){

        that.next(that.currentPreview, that.bullets);

    },2000);
}


Slider.prototype.next = function(num){

    var that = this;

    this.showSelectedImage(num, that.bullets)

    that.currentPreview +=1;
    
    if(that.currentPreview > this.previews.length-1){

        that.currentPreview = 0;
    }
}

Slider.prototype.showSelectedImage =  function(index, bullets){

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



  var slider1 = new Slider('slideshow-1', true);
  var slider2 = new Slider('slideshow-2');




