const header = document.querySelector("header");
const navbarCollapse = document.getElementById("navbarNav");

navbarCollapse.addEventListener("show.bs.collapse", () => {
  header.style.height = "50vh";
  nav.style.height="50vh"; // El header ocupa toda la pantalla
});

navbarCollapse.addEventListener("hidden.bs.collapse", () => {
  header.style.height = "auto"; // Vuelve al tamaño normal
});
