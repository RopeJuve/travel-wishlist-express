import { getDestinations } from "../services/data.js";

export const getIndexHTML = async (req, res) => {
  const { visited, wishlist } = req.query;

  let countries;
  if (visited === "true") {
    countries = await getDestinations({ visited: "visited" });
    if (!countries) {
      return res.status(500).json({ message: "Error fetching data" });
    }
    res.render("index", { countries });
  } else if (wishlist === "true") {
    countries = await getDestinations({ visited: "wishlist" });
    if (!countries) {
      return res.status(500).json({ message: "Error fetching data" });
    }
    res.render("index", { countries });
  } else {
    countries = await getDestinations("");
    if (!countries) {
      return res.status(500).json({ message: "Error fetching data" });
    }
    res.render("index", { countries });
  }
};


export const getDestinationHTML = async (req, res) => {
  const code = req.params.code;
  const country = await getDestinations({ code });
  if (!country) {
    return res.status(500).json({ message: "Error fetching data" });
  }
  res.render("destination", { country });
}
