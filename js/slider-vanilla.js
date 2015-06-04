// Instance of the new Object : Slider
var Slider = function(slideshow){


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



  var slider1 = new Slider('slideshow-1');
  var slider2 = new Slider('slideshow-2');


