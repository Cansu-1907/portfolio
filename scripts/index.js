window.onload = function () {
  let hamburgerNav = document.getElementById("hamburgerNav");

  let closeHamburgerNavOverlayBtn = document.getElementById(
    "closeHamburgerNavOverlayBtn"
  );
  let hamburgerNavOverlay = document.getElementById("hamburgerNavOverlay");
  let backContainer = document.getElementById("backContainer");

  hamburgerNav.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerNavOverlay.style.display = "flex";
  });

  closeHamburgerNavOverlayBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerNavOverlay.style.display = "none";
  });

  backContainer.addEventListener("click", (e) => {
    e.preventDefault();
    window.history.back();
  });
};
