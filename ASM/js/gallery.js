let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  //get back to first image
  if (n > slides.length) {
    slideIndex = 1;
  }
  //go to last image
  if (n < 1) {
    slideIndex = slides.length;
  }
  //hide img
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //disable dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
}
