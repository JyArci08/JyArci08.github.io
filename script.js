function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");
  
    function checkScroll() {
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      });
    }
  
    checkScroll();
  

    window.addEventListener("scroll", checkScroll);
});