import axios from "axios";

export const getDestinations = async (query) => {
  const { visited, code } = query;

  if (visited == "visited") {
    try {
      const response = await fetch(
        `${process.env.APP_URL}api/countries?visited=true`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  } else if (visited == "wishlist") {
    try {
      const response = await fetch(
        `${process.env.APP_URL}api/countries?wishlist=true`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  } else if (code) {
    try {
      const response = await fetch(
        `${process.env.APP_URL}api/countries/${code}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    try {
      const response = await fetch(`${process.env.APP_URL}api/countries`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

export const getImageAndCountryCode = async (countryName) => {
  try {
    const countryResponse = await axios.get(
      `${process.env.COUNTRY_API_URL}${countryName}`
    );
    const imageResponse = await axios.get(
      `${process.env.UNSPLASH_URL}?query=${countryName}&client_id=${process.env.UNSPLASH_CLIENT_ID}`
    );
    const [countryData, imageData] = await Promise.all([
      countryResponse,
      imageResponse,
    ]);

    const { regular } = imageData.data.urls;

    const { name, alpha2Code, alpha3Code } = countryData.data[0];

    return { name, alpha2Code, alpha3Code, image: regular };
  } catch (error) {
    console.error("Error:", error);
  }
};
