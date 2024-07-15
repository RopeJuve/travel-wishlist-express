const addTripBtn = document.getElementById("add-trip");
const closeBtn = document.querySelector(".close-button");
const modal = document.querySelector(".modal");
const addBtn = document.getElementById("add-btn");
const form = document.querySelector(".form");

addTripBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

const getAlpha2Code3Code = async (name) => {
  console.log(typeof name, name);
  try {
    const response = await fetch(
      `https://travel-wishlist-one.vercel.app/api/countries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    return response.body;
  } catch (error) {
    console.error("Error:", error);
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  await getAlpha2Code3Code(data.get("name"));
  location.reload();
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
