import Swiper from "swiper/bundle";
document.addEventListener('astro:page-load', () => {


  // Obtén el ancho de la pantalla
  const anchoPantalla = window.innerWidth;

  let slides = 1;
  let wthCard = 600;

  while (anchoPantalla > wthCard) {
    wthCard = wthCard + 600;
    slides++;
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: slides,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});