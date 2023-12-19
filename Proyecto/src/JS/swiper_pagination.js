
document.addEventListener('astro:page-load', () => {
  const swiperEl = document.querySelector('swiper-container')
  Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  swiperEl.initialize();


  //Se encontro un bug en donde el swiper se coloca encima del header y este es la solución:
  const abrir = document.querySelector("#hambuerguesa");
  const cerrar = document.querySelector("#close");

  abrir.addEventListener("click", () => {
    swiperEl.classList.add("ocultar");
  });

  cerrar.addEventListener("click", () => {
    swiperEl.classList.remove("ocultar");
  });
});