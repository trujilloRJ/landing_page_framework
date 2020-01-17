// Variables from the DOM
const burguerBtn = document.querySelector(".navbar-burguer");
const navMobile = document.querySelector(".navbar-mobile");
const mobileBtns = document.querySelectorAll(".mob");

const showcase = document.querySelector(".showcase");
const navBar = document.querySelector("header");
const hero = document.querySelector(".navbar-hero");
const headerList = document.querySelectorAll(".navbar-list ul li a");
const burguerDiv = document.querySelectorAll(".navbar-burguer div");

// burguer menu interaction
burguerBtn.addEventListener("click", toggleMenu);
mobileBtns.forEach(btn => {
  btn.addEventListener("click", toggleMenu);
});
let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    burguerBtn.classList.add("close");
    navMobile.classList.add("active");
    showMenu = true;
  } else {
    burguerBtn.classList.remove("close");
    navMobile.classList.remove("active");
    showMenu = false;
  }
}

// scroll nav interaction
const options = {
  rootMargin: "-100px 0px 0px 0px"
};
const showcaseObserver = new IntersectionObserver(function(
  entries,
  showcaseObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navBar.classList.add("scrolled");
      hero.classList.add("scrolled");
      burguerDiv.forEach(a => {
        a.classList.add("scrolled");
      });
      headerList.forEach(a => {
        a.classList.add("scrolled");
      });
    } else {
      navBar.classList.remove("scrolled");
      hero.classList.remove("scrolled");
      burguerDiv.forEach(a => {
        a.classList.remove("scrolled");
      });
      headerList.forEach(a => {
        a.classList.remove("scrolled");
      });
    }
  });
},
options);
showcaseObserver.observe(showcase);
