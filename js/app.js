// Mendapatkan elemen input dan menambahkan event listener untuk fokus dan blur
const inputs = document.querySelectorAll(".input-field");
inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value !== "") return;
    inp.classList.remove("active");
  });
});

// Mendapatkan tombol toggle dan menambahkan event listener untuk toggle sign-up mode
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

// Fungsi untuk memindahkan slider
function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

// Mendapatkan elemen bullet dan menambahkan event listener untuk klik
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");
bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// Event listener untuk form login
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector(".sign-in-form");
  const emailInput = document.getElementById("isiemail-in");
  const passwordInput = document.getElementById("isipass-in");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Cek apakah email dan password sesuai dengan admin
    if (email === "admin@gmail.com" && password === "administrasi") {
      window.location.href = "indexadmin.html"; // Arahkan ke halaman admin
    } else {
      window.location.href = "indexlogin.html"; // Arahkan ke halaman login
    }
  });
});
