import Country from "../model/country.js";

export const checkCountryExists = async (req, res, next) => {
  const { code } = req.params;
  try {
    const country = await Country.findOne({
      $or: [{ alpha2Code: code }, { alpha3Code: code }],
    });
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }
    req.country = country;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkBeforeCreate = async (req, res, next) => {
  const { alpha2Code, alpha3Code } = req.body;
  try {
    const country = await Country.findOne({
      $or: [{ alpha2Code }, { alpha3Code }],
    });
    if (country) {
      return res.status(400).json({ message: "Country already exists" });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
