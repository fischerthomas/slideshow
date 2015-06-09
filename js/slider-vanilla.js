/*

    SlideShow: 
    Html =>

    <div id="" class="slideshow" data-options="">
      <!-- slides -->
      <div class="slideshow-wrapper">        
          <?php for($i = 0; $i < count($pdf_data); $i++) {
                if(trim($pdf_data[$i])) echo "<figure class='preview-image'><img alt='' width='100%' src='".$pdf_data[$i]."'></figure>";
          } ?>
      </div>
      <!-- nav -->
      <nav><ul></ul></nav>

    </div>


    data options: add autoplay and a speed in ms
*/

// classList Polyfill

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
;if("document" in self&&!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false;do{r=t[s]+"";var q=g(this,r);if(q!==-1){this.splice(q,1);o=true}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}return !o};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))};



// Instance of the new Object : Slider
var Slider = function(slideshow){


    // properties declaration
    this.slideshow = slideshow ? document.getElementById(slideshow) : document.getElementsByClassName('slideshow')[0];
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




