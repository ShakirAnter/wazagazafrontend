document.addEventListener("DOMContentLoaded", () => {
  const navBarToggler = document.querySelector(".navbar-toggler");
  const navbar = document.querySelector(".navbar");
  navBarToggler.onclick = () => {
    
    navBarToggler.classList.toggle("rotate");

    if (navbar.classList.contains("opened")) {
      navbar.classList.remove("opened");
    } else {
      navbar.classList.add("opened");
    }
  };
});