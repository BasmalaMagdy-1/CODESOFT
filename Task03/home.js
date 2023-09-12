//scroll to top
const scrolltop = document.querySelector("#scrolltop");
scrolltop.addEventListener("click", function () {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
    left: 0,
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY >= 280) {
    scrolltop.style.opacity = 1;
  } else {
    scrolltop.style.opacity = 0;
  }
});
