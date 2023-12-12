let currentIndex = 0;

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slideWidth = document.querySelector(".carousel-item").clientWidth;
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 5) % 5;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 5;
  showSlide(currentIndex);
}
