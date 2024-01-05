
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
      for(tablink of tablinks){
          tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
          tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
  }

  var sidemenu = document.getElementById("sidemenu");
  function openmenu(){
    sidemenu.style.right = "0";

  }
  function closemenu(){
    sidemenu.style.right = "-200px";
    
  }
  var typed = new Typed(".input", {
    strings: ["Jason Monilla","Aspiring Front-End Developer"],
    typeSpeed: 120,
    backSpeed: 110,
    loop: true
})
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.certificate-slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';

    // Apply slide animation
    slides[slideIndex].style.animation = 'slideAnimation 1s ease';
}

function animateSlide() {
    // Remove animation class to trigger it again on the next click
    const slides = document.querySelectorAll('.certificate-slide');
    slides[slideIndex].style.animation = '';
}
