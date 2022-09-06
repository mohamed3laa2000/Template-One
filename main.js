// scroll top
let myTopToScroll = document.querySelector(".scroll-to-top");
window.onscroll = function () {
  if (scrollY >= 500) {
    myTopToScroll.classList.add("scroll");
  } else {
    myTopToScroll.classList.remove("scroll");
  }
};
myTopToScroll.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.querySelector(".menu").onclick = () => {
  document.querySelector(".small-menu").classList.toggle("active");
};
document.addEventListener("click", (e) => {
  if (e.target != document.querySelector(".menu")) {
    document.querySelector(".small-menu").classList.remove("active");
  }
});
