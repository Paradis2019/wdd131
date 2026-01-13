const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.textContent = "☰";

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");

  menuButton.textContent = navigation.classList.contains("show")
    ? "X"
    : "☰";
});

const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;
