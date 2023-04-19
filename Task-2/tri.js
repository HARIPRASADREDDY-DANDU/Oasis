'use strict'
alert("This is an desktop page view the website in desktop mode for better visual's.👍");
// carousel start
var carousel = document.querySelector('.carousel');
var carouselInner = carousel.querySelector('.carousel-inner');
var prevBtn = carousel.querySelector('.prev');
var nextBtn = carousel.querySelector('.next');
var slideWidth = carouselInner.offsetWidth / 3;
var currentIndex = 0;

prevBtn.addEventListener('click', function(event) {
  event.preventDefault();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 2;
  }
  carouselInner.style.transform = 'translateX(' + (-1 * currentIndex * slideWidth) + 'px)';
});

nextBtn.addEventListener('click', function(event) {
  event.preventDefault();
  currentIndex++;
  if (currentIndex > 2) {
    currentIndex = 0;
  }
  carouselInner.style.transform = 'translateX(' + (-1 * currentIndex * slideWidth) + 'px)';
});
// ends