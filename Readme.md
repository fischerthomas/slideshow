Readme

vanilla slider

refactor pdf preview to remove heavy dependency on bloated plugin


communicating how many images are available ad what relative image the user is currently viewing. The code for this is implemented on a page by page basis using a feature-rich jQuery plugin.

The jQuery plugin dependency should be removed and replaced with semantic markup that can be targeted by a function to reside in our new global mi.min.js script. Whenever this markup is targeted appropriate click/tap events will be bound.

Acceptance Criteria

No dependency on jQuery
No plugins required
VanillaJS
Code to apply functionality exists only once and only in a new global JavaScript file that will be loaded on all page

The following is pseudo code only. It has not been tested and is recommended approach. The key concepts are:

Using semantic markup and meaningful class names over ids
Using document.querySelectorAll which eliminates to a great extent the need for jQuery's $() function
Using addEventListener for event binding

Pseudo Markup

<div class="pdf-preview">
   <div class="preview-image">
      <img src="path-to-image" />
   </div>
   <div class="preview-image">
      <img src="path-to-image" />
   </div>
   <div class="preview-image">
      <img src="path-to-image" />
   </div>
   <div class="footer"></div>
</div>


Pseudo CSS

.pdf-preview {
   width: 123px;
   height: 123px;
}

   .pdf-preview .preview-image {
      width: 123px;
      height: 123px;
   }

   .pdf-preview .footer {
      width: 123px;
      height: 123px;
   }

      .pdf-preview .footer image {
         /* Could be from a CSS sprite */
      }

         .pdf-preview .footer image current {
            /* Could be from a CSS sprite */
         }


Pseudo JavaScript

// This would appear after the DOM has safely loaded (e.g. bottom of the page)

// Check to see if the current page contains a PDF preview
if (document.querySelectorAll(".pdf-preview")) {
   // Get a reference to the footer of the preview
   var footer = document.querySelectorAll(".pdf-preview.footer");
   // Get an array of all the preview images (e.g. between 1 and 4)
   var previews = document.querySelectorAll(".pdf-preview.preview-image");
   // Iterate the previews
   Array.prototype.forEach.call(previews, function (preview, i) {
      // Bind click
      document.addEventListener("click", function (e) {
         // Show opaque background
         // Show image enlarged
         // Eg. a basic lightbox pattern
         // Don't forget to bind a body click to hide the image and opaque background to exit the lightbox
      });
      // Create footer circular icon
      var div = document.createElement("div");
      // Set background to the image in the CSS sprite
      // Bind a click event handler that selects the corresponding image and 
      // changes the CSS sprite to show the selected image
      footer.appendElement(div);
   });
}