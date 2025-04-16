//* Navbar *//
// Buat ngatur navbar pas di scroll //
const navbar = document.querySelector(".navbar");
const search_input = document.querySelector(".search-input");

window.addEventListener("scroll", function () {
  // console.info(search_input);
  if (window.innerWidth > 992) {
    // Cek ukuran layar
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      search_input.classList.add("scrolled");
    } else {
      search_input.classList.remove("scrolled");
      navbar.classList.remove("scrolled");
    }
  }
});

// buat ngatur hamburger menu //
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

//* Main *//
// Buat ngatur slider //
const slider = document.querySelector(".recommendation-content");
const sliderItems = document.querySelectorAll(".recommendation-item");
const prevButton = document.querySelector(".slider-button.prev");
const nextButton = document.querySelector(".slider-button.next");
const isMobile = window.innerWidth < 425;

// console.info(sliderItems);
let currentIndex = 0;
let itemWidth = sliderItems[0].offsetWidth;
const visibleItems = 2;

function updateSlider() {
  itemWidth = sliderItems[0].offsetWidth;
  const translateX = -currentIndex * itemWidth;
  slider.style.transform = `translateX(${translateX}px)`;
}

function resetSlider() {
  currentIndex = 0;
  updateSlider();
}

nextButton.addEventListener("click", () => {
  if (currentIndex < sliderItems.length - visibleItems) {
    currentIndex++;
  }
  updateSlider();
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateSlider();
});

// buat ngatur ukuran slider kalo di hp
window.addEventListener("resize", () => {
  resetSlider();
  itemWidth = sliderItems[0].offsetWidth;
});

resetSlider();
