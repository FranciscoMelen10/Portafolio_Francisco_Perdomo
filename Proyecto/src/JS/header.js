

document.addEventListener('astro:page-load', () => {
    //Acciones del nav
    //Definimos las constantes para las acciones de los botones
    const menu = document.querySelector(".screen_ph");
    const abrir = document.querySelector("#hambuerguesa");
    const cerrar = document.querySelector("#close");

    // Agrega la etiqueta visible para que entre a la propiedad del css y lo cambie
    abrir.addEventListener("click", () => {
        menu.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        menu.classList.remove("visible");
    });
});