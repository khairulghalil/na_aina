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

// Swiper
function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
    let config = JSON.parse(
      swiperElement.querySelector(".swiper-config").innerHTML.trim(),
    );

    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}

window.addEventListener("load", initSwiper);

// Whatsapp Me function
function whatsappMe() {
  window.location.href =
    "https://wa.me/60179062684?text=Assalamualaikum+Cik+Na+";
}

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
