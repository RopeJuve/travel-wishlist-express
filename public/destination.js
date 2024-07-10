const visitBtn = document.getElementById("visit-btn");

const updateTrip = async (code, url) => {
  const res = await fetch(`${url}/${code}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status === 200) {
    window.location.href = "/";
  }
};

visitBtn.addEventListener("click", async () => {
  const code = visitBtn.getAttribute("data-code");
  await updateTrip(code, "https://travel-wishlist-one.vercel.app/api/countries");
});
