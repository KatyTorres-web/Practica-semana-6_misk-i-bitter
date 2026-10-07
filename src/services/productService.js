import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export async function getProducts(signal) {
  const response = await axios.get(API_URL, {
    params: {
      limit: 12,
    },
    signal,
  });

  return response.data.products;
}
