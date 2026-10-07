import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);

        const products = await getProducts(controller.signal);

        setData(products);
      } catch (error) {
        if (error.name === "CanceledError") {
          return;
        }

        if (error.name === "AbortError") {
          return;
        }

        setError("No fue posible cargar los productos.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export default useProducts;
