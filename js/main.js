const header = document.querySelector(".header");
const accordeons = document.querySelectorAll(".culture__accordeon");
const burgerBtn = document.querySelector(".header__burger");
window.addEventListener("scroll", (e) => {
  window.scrollY > 0
    ? header.classList.add("scroll")
    : header.classList.remove("scroll");
});

accordeons.forEach((el) => {
  const margin = 15;
  const titleHeight = el.querySelector(
    ".culture__accordeon-title"
  ).scrollHeight;
  el.style.height = `${titleHeight + 24}px`;
  const contentHeight = el.querySelector(
    ".culture__accordeon-content"
  ).scrollHeight;
  el.addEventListener("click", () => {
    console.log(contentHeight + titleHeight + 24 + margin);
    el.classList.toggle("active");
    if (el.clientHeight < 50) {
      el.style.height = `${titleHeight + 24 + contentHeight + margin}px`;
    } else if (el.clientHeight > 30) {
      el.style.height = `${titleHeight + 24}px`;
    }
  });
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

burgerBtn.addEventListener("click", () => {
  document.querySelector(".header__nav").classList.toggle("active");
  burgerBtn.querySelectorAll("img").forEach((el) => {
    el.classList.contains("active")
      ? el.classList.remove("active")
      : el.classList.add("active");
  });
});
