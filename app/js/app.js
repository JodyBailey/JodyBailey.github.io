const navBar = document.querySelector(".nav-bar");
const navBarLinks = document.querySelector(".nav-bar-links");
const toggleMenu = document.querySelector(".toggle-menu");
const header = document.querySelector("header");
const options = {
  rootMargin: "-449px 0px 0px 0px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add("nav-scrolled");
    } else {
      navBar.classList.remove("nav-scrolled");
    }
  });
}, options);

toggleMenu.addEventListener("click", () => {
  navBarLinks.classList.toggle("clicked");
});

observer.observe(header);
