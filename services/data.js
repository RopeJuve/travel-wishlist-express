export const getDestinations = async (query) => {
  const { visited } = query;

  if (visited == "visited") {
    try {
      const response = await fetch(
        `https://travel-wishlist-one.vercel.app//api/countries?visited=true`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  } else if (visited == "wishlist") {
    try {
      const response = await fetch(
        `https://travel-wishlist-one.vercel.app//api/countries?wishlist=true`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    try {
      const response = await fetch("https://travel-wishlist-one.vercel.app//api/countries");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
};
