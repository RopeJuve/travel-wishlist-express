const addTripBtn = document.getElementById("add-trip");
const closeBtn = document.querySelector(".close-button");
const modal = document.querySelector(".modal");
const addBtn = document.getElementById("add-btn");


addTripBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

 

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

addBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
