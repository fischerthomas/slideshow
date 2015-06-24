# Set Up #

## Step 1: include the slider-horizn.js Javascript and its Css (or Sass) files in the page ##

It's recommended to put the .js file before the end body tag (</body>).

**For IE 8:** Use conditional comments to include a specific stylesheet for ie8 and an 'HTML5 Shiv' in the head to respect nav, figure and figcaption tags as valid elements:

	<!--[if lt IE 9]>
	<script src="js/lib/html5shiv.js"></script>
    <link href="stylesheets/css/styles-ie8.css" rel="stylesheet" type="text/css" />
	<![endif]-->

**Dependency:** jQuery (IE8 support was dropped in jQuery 2.x, so you will use any version beginning with 1. to support it).

To change easily the size of the slideshow and the size and the color of the bullets, use the Sass variables

    $slideshow-width: 50%;
    $bullet-color: rgba(163,163,163, 1);
    $bullet-size: 1rem;
    
## Step 2: Add one (or more) Slider to your page ##

    <!-- Slider -->
    <div id="" class="slideshow" data-options=''>
    	<!-- slides -->
    	<div class="slideshow-wrapper">
    		<figure><img src="image.png" alt="" width="100%" /><figcaption></figcaption></figure>
    		<figure><img src="image.png" alt="" width="100%" /><figcaption></figcaption></figure>
    		<figure><img src="image.png" alt="" width="100%" /><figcaption></figcaption></figure>
    		<figure><img src="image.png" alt="" width="100%" /><figcaption></figcaption></figure>
    	</div>
    	<!-- nav -->
		<nav><ul></ul></nav>
	</div>


1. If there is more than one slideshow in the page, it's necessary to add a specific Id for each slideshow. *e.g.* `"slideshow-1", "slideshow-2"`
2. the figcaption and the nav element are optional.
3. You can specify the slideshow options via its data-option Attribute as a string or an Object.

**Options:** At this time, we can only choose to add an "auto-play functionality" by passing to the Slideshow a string, or an Object to specify the speed. *e.g.* 

    data-options='autoplay' or data-options='{"autoplay": 1500}'


## Step 3: Instantiate the slider(s) in your main.js  ##

If there is more than one slider per page you will have to pass their id names to the new Objects. *e.g.*

    (function($){
    	var slider1 = new Slider('slideshow-1');
    	var slider2 = new Slider('slideshow-2');
    })(jQuery);
or

    (function($){
    	var slider = new Slider();
    })(jQuery);