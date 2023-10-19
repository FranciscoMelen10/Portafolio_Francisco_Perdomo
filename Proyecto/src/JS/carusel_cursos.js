const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".item");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currdeg = 0;

next.addEventListener("click", function() {
  rotate("n");
});

prev.addEventListener("click", function() {
  rotate("p");
});

function rotate(direction) {
  if (direction === "n") {
    currdeg -= 60;
  }
  if (direction === "p") {
    currdeg += 60;
  }

  carousel.style.transform = `rotateY(${currdeg}deg)`;

  items.forEach((item) => {
    item.style.transform = `rotateY(${-currdeg}deg)`;
  });
}