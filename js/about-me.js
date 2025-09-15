var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true, // 👈 Esto centra el slide activo
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


    const boton = document.getElementById("toggleHistoria");
  const corto = document.querySelector(".historia-texto.corto");
  const completo = document.querySelector(".historia-texto.completo");

  boton.addEventListener("click", () => {
    corto.classList.toggle("d-none");
    completo.classList.toggle("d-none");

    if (completo.classList.contains("d-none")) {
      boton.textContent = "Ver más";
    } else {
      boton.textContent = "Ver menos";
    }
  });