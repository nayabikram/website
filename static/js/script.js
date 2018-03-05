$(document).ready(function(){
  var slideIndex = 1;
  showSlides(slideIndex);
})

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var thumbnails = document.getElementsByClassName("thumbnail");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  if(slides.length !== 0){
    slides[slideIndex-1].style.display = "block"; 
    thumbnails[slideIndex-1].className += " active";
  }
}

function hidePreview() {
  $( ".preview" ).fadeOut();
  $("iframe")[0].src += "&autoplay=1";
}