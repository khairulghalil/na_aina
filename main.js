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

// Modal Product
const modalData = [
  {
    title: "Jamu Bunga Ratu Pari dan Kacip Fatimah",
    url: "../public/img/testImg.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    title: "Jamu Tongkat Ali dan Ubi Jaga",
    url: "../public/img/testImg.png",
    description: `Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    title: "Jamu Cengkih dan Kulit Kayu Manis",
    url: "../public/img/testImg.png",
    description: `Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];
function openModal(index) {
  const data = modalData[index];

  document.getElementById("dynamicTitle").innerText = data.title;
  document.getElementById("dynamicImg").src = data.url;
  document.getElementById("dynamicDesc").innerText = data.description;

  const myModal = new bootstrap.Modal(document.getElementById("productModal"));
  myModal.show();
}

// Remove URL hash on page load to prevent automatic scrolling
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(
      "",
      document.title,
      window.location.pathname + window.location.search,
    );
  }
  window.scrollTo(0, 0);
});
