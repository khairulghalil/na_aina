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
      swiperElement.querySelector(".swiper-config").innerHTML.trim()
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
    "https://wa.me/60179062684?text=Assalamualaikum+Cik+Na+🤗";
}

// Modal Product
const modalData = [
  {
    title: "Jamu Bunga Ratu Pari dan Kacip Fatimah",
    url: "../public/img/testImg.png",
    description: `Gabungan Bunga Ratu Pari dan Kacip Fatimah berfungsi untuk memulihkan tenaga, mengimbangi hormon, dan menguatkan otot peranakan.`,
    details: `<b>Pemulihan Selepas Bersalin (Sakit Urat & Rahim)</b><br />
    - Sesuai untuk mengecutkan rahim (involsi), mengetatkan otot faraj yang longgar, dan membuang darah kotor (nifas).<br />
    - Membantu badan kembali bertenaga dan mengelakkan masalah "bentan".<br />
    <hr />
    <b>Masalah Kitaran Haid & Hormon</b><br />
    - Sesuai untuk haid yang tidak teratur, senggugut yang teruk (dysmenorrhea), atau darah haid yang berbau/berwarna gelap.<br />
    - Melancarkan aliran darah dan mengurangkan sakit pinggang semasa datang bulan.<br />
    <hr />
    <b>Masalah Keputihan</b><br />
    - Sesuai untuk keputihan yang berlebihan, gatal-gatal pada bahagian intim, dan bau yang tidak enak.<br />
    - Menjaga kebersihan dalaman dan mengeringkan kawasan intim secara sihat.<br />
    <hr />
    <b>Kelesuan & Sakit Sendi</b><br />
    - Sesuai untuk badan yang sering terasa "berangin", cepat penat, dan sakit-sakit sendi.<br />
    - Meningkatkan peredaran darah ke seluruh badan, menjadikan tubuh terasa lebih ringan dan cergas.<br />
    `,
  },
  {
    title: "Jamu Tongkat Ali dan Ubi Jaga",
    url: "../public/img/testImg.png",
    description: `Gabungan Tongkat Ali dan Ubi Jaga adalah berfungsi untuk meningkatkan kesihatan, stamina dan menguatkan tenaga batin lelaki.`,
    details: `<b>Meningkatkan Tenaga Batin</b><br />
    - Sesuai untuk masalah tenaga batin, kurang keinginan (libido), atau masalah prestasi.<br />
    - Tongkat Ali membantu meningkatkan hormon testosteron secara semula jadi, manakala Ubi Jaga membantu melancarkan pengaliran darah ke bahagian organ intim.<br />
    <hr />
    <b>Melegakan Sakit Pinggang & Sendi</b><br />
    - Sesuai untuk sakit pinggang, lenguh-lenguh badan, dan rasa kebas pada kaki atau tangan.<br />
    - Membantu menguatkan otot dan memulihkan sistem saraf.<br />
    <hr />
    <b>Mengatasi Kelesuan</b><br />
    - Sesuai untuk rasa mengantuk di siang hari, badan terasa berat ("berangin"), atau cepat penat walaupun tidak buat kerja berat.<br />
    - Memberikan tenaga yang lebih tahan lama berbanding kafein.<br />
    <hr />
    <b>Melancarkan Peredaran Darah</b><br />
    - Sesuai untuk mereka yang mempunyai peredaran darah yang lemah atau sering merasa sejuk di hujung jari.<br />
    - Ubi Jaga terkenal dengan keupayaannya untuk meningkatkan aliran darah dan oksigen ke seluruh badan.<br />
    `,
  },
  {
    title: "Jamu Cengkih dan Kulit Kayu Manis",
    url: "../public/img/testImg.png",
    description: `Gabungan Cengkih dan Kulit Kayu Manis berfungsi untuk menguatkan sistem imun (anti-radang), membuang toksin dan meningkatkan kesihatan pencernaan.`,
    details: `<b>Masalah Pencernaan & Angin Dalam Badan</b><br />
    - Sesuai untuk perut kembung, kerap sendawa, dan masalah penghadaman.<br />
    - Cengkih dan kayu manis membantu merangsang enzim pencernaan dan mempercepatkan proses pengeluaran angin dari saluran usus.<br />
    <hr />
    <b>Mengawal Gula Dalam Darah & Kolesterol</b><br />
    - Sesuai untuk mereka yang ingin menjaga paras gula dan membantu menurunkan kolesterol.<br />
    - Membantu metabolisme glukosa dengan lebih berkesan.<br />
    <hr />
    <b>Kesihatan Mulut & Pernafasan (Resdung)</b><br />
    - Sesuai untuk masalah resdung, sakit tekak, batuk berpanjangan, dan masalah bau mulut.<br />
    - Cengkih dan kayu manis membantu membunuh bakteria di kerongkong dan membantu mencairkan kahak.<br />
    <hr />
    <b>Memanaskan Badan & Melancarkan Darah</b><br />
    - Sesuai untuk orang yang sering rasa sejuk kaki/tangan, atau wanita yang mengalami darah haid tersumbat (berketul).<br />
    - Meningkatkan suhu badan secara dalaman dan melancarkan aliran darah ke seluruh badan.<br />
    `,
  },
];
function openModal(index) {
  const data = modalData[index];

  document.getElementById("dynamicTitle").innerText = data.title;
  document.getElementById("dynamicImg").src = data.url;
  document.getElementById("dynamicDesc").innerText = data.description;
  document.getElementById("dynamicDetails").innerHTML = data.details;

  const myModal = new bootstrap.Modal(document.getElementById("productModal"));
  myModal.show();
}

// Remove URL hash on page load to prevent automatic scrolling
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
  window.scrollTo(0, 0);
});
