import Country from "../model/country.js";

export const getCountries = async (req, res) => {
  try {
    const { sort, visited, wishlist } = req.query;
    if (sort === "true") {
      const countries = await Country.find().sort({ name: 1 });
      return res.json(countries);
    }
    if (visited === "true") {
      const countries = await Country.find({ visited: true });
      return res.json(countries);
    }
    if (wishlist === "true") {
      const countries = await Country.find({ visited: false });
      return res.json(countries);
    }
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCountryByCode = async (req, res) => {
  try {
    res.json(req.country);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCountry = async (req, res) => {
  const country = req.body;
  try {
    const newCountry = new Country(country);
    await newCountry.save();
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCountry = async (req, res) => {
  try {
    const updatedCountry = await Country.findOneAndUpdate(
      {
        $or: [{ alpha2Code: req.params.code }, { alpha3Code: req.params.code }],
      },
      req.body,
      { new: true }
    );
    res.json(updatedCountry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCountry = async (req, res) => {
  try {
    const country = await Country.findOneAndUpdate(
      {
        $or: [{ alpha2Code: req.params.code }, { alpha3Code: req.params.code }],
      },
      { visited: true },
      { new: true }
    );
    res.json(country);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
