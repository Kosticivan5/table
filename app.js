const btnUp = document.querySelector(".btn-top");
const btnDown = document.querySelector(".btn-bottom");
const table = document.querySelector(".table-top");

btnUp.addEventListener("click", () => {
  if (table.classList.contains("move-down")) {
    table.classList.remove("move-down");
  }
  table.classList.add("move-up");
});

btnDown.addEventListener("click", () => {
  if (table.classList.contains("move-up")) {
    table.classList.remove("move-up");
  }
  table.classList.add("move-down");
});
