// Floating button
let floatingBtn = document.querySelector(".floating-btn");

function toggleFloating() {
  if (floatingBtn) {
    window.scrollY > 100
      ? floatingBtn.classList.add("active")
      : floatingBtn.classList.remove("active");
  }
}
floatingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   whatsappMe();
});

window.addEventListener("load", toggleFloating);
document.addEventListener("scroll", toggleFloating);

// AOS Animation
function aosInit() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", aosInit);

// Preloader
const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
