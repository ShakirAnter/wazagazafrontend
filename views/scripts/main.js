document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // Show A Nice Fade-In Animation When The Page loads
  function fadeInAnimation() {
    container.classList.add("fade-in-animation");
  }
  fadeInAnimation();

  // NavBar Toggler Functionality to display
  // the navigation bar after clicking the menu bars
  const navBarToggler = document.querySelectorAll(".nav-bar-toggler");
  const navBar = document.querySelector(".nav-bar");

  navBarToggler.forEach((toggler) => {
    toggler.onclick = () => {
      if (navBar.classList.contains("toggle")) {
        navBar.classList.remove("toggle");
      } else {
        navBar.classList.add("toggle");
      }
    };
  });

  // Function to display the To-Top Button when
  // A user scrolls and go back to the top on click.
  function toTop() {
    const toTopButton = document.querySelector(".to-top-btn");

    if (window.scrollY > 150) {
      toTopButton.classList.add("display-to-top-btn");
    } else {
      toTopButton.classList.remove("display-to-top-btn");
    }

    toTopButton.addEventListener("click", () => {
      document.body.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }
  document.addEventListener("scroll", toTop);

  // Function To Expand each image on click
  const imagesGrid = document.querySelector(".images-grid");
  const images = document.querySelectorAll(".image-wrapper img");

  const singleImageOverlay = document.querySelector(".single-image-overlay");
  images.forEach((image) => {
    image.onclick = () => {
      singleImageOverlay.style.display = "block";

      const existingImage = singleImageOverlay.querySelector("img");
      if (existingImage) {
        existingImage.remove();
      }

      const img = document.createElement("img");
      img.setAttribute("src", image.src);
      img.alt = "Single Image";
      singleImageOverlay.append(img);
      singleImageOverlay.style.transform = "scale(1)";
      singleImageOverlay.style.transition = "3s ease";
      document.body.classList.add("no-scroll");

      singleImageOverlay.addEventListener("click", (e)=>{
        if(e.target === singleImageOverlay){
          singleImageOverlay.style.display = "none";
          document.body.classList.remove("no-scroll");
        }
      });

    };
  });

  document.body.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) {
      singleImageOverlay.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  });
});
