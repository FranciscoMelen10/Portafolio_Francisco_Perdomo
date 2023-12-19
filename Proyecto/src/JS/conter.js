function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = `+${Math.floor(progress * (end - start) + start)}`;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const torneos = document.getElementById("con_torneos");
const trofeos = document.getElementById("con_trofeos");
const cursos = document.getElementById("con_cursos");
const equipos = document.getElementById("con_equipos");

animateValue(torneos, 500, 10, 1000);
animateValue(trofeos, 500, 6, 2000);
animateValue(cursos, 500, 5, 3000);
animateValue(equipos, 500, 2, 4000);

