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

animateValue(torneos, 0, 100, 3000);
animateValue(trofeos, 0, 100, 3000);
animateValue(cursos, 0, 100, 3000);
animateValue(equipos, 0, 100, 3000);

console.log("mamama")

