console.log("salut");

const heroBanner = document.querySelector(".hero-banner");
const images = [
  'url("assets/images/taylor-swift.jpg")',
  'url("assets/images/taylor_swift_red_carpet.jpg")',
];

let currentIndex = 0;

function changeBackgroundImage() {
  heroBanner.style.backgroundImage = images[currentIndex];

  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000);

changeBackgroundImage();