import { Schema, model } from "mongoose";

const countrySchema = new Schema({
  name: { type: String, required: true },
  alpha2Code: { type: String, required: true },
  alpha3Code: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  visited: { type: Boolean, default: false },
});

const Country = model("Country", countrySchema);

export default Country;
