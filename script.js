const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const carouselImgs = document.querySelectorAll(".carousel-img");
const prevBtn = document.querySelector(".carousel-control-prev");
const nextBtn = document.querySelector(".carousel-control-next");
let index = 0;

function showImage() {
  // Hide all images
  for (let i = 0; i < carouselImgs.length; i++) {
    carouselImgs[i].classList.remove("active");
  }
  // Show current image
  carouselImgs[index].classList.add("active");
}

function slideLeft() {
  if (index === 0) {
    index = carouselImgs.length - 1;
  } else {
    index--;
  }
  showImage();
}

function slideRight() {
  if (index === carouselImgs.length - 1) {
    index = 0;
  } else {
    index++;
  }
  showImage();
}

// Event listeners for the buttons
prevBtn.addEventListener("click", slideLeft);
nextBtn.addEventListener("click", slideRight);
