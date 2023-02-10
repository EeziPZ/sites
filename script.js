var thumbnails = document.querySelectorAll(".thumbnail");
var fullscreen = document.querySelector(".fullscreen");
var fullscreenImg = document.querySelector(".fullscreen-img");
var closeButton = document.querySelector(".close-button");
var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");
var isTransitioning = false;

let currentIndex = 0;

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    currentIndex = i;
    fullscreenImg.src = this.src;
    fullscreen.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
}

closeButton.addEventListener("click", function () {
  fullscreen.style.display = "none";
  document.body.style.overflow = "visible";
});

prevButton.addEventListener("click", function () {
  if (isTransitioning) {
    return;
  }
  isTransitioning = true;
  currentIndex = (currentIndex + thumbnails.length - 1) % thumbnails.length;
  fullscreenImg.src = thumbnails[currentIndex].src;
});

fullscreenImg.addEventListener("load", function () {
  setTimeout(function () {
    isTransitioning = false;
  }, 300);
});

nextButton.addEventListener("click", function () {
  if (isTransitioning) {
    return;
  }
  isTransitioning = true;
  currentIndex = (currentIndex + 1) % thumbnails.length;
  fullscreenImg.src = thumbnails[currentIndex].src;
});


function toggleVisibility(id) {
  document.getElementById(id + "-card").classList.toggle("visible");
  document.getElementById(id + "-card").classList.toggle("hidden");
  document.getElementById(id + "-page").classList.toggle("hidden");
  document.getElementById(id + "-page").classList.toggle("visible");
}