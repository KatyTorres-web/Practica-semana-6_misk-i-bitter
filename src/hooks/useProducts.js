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

        // El estado se actualiza solo cuando la petición finaliza correctamente.
        // El cleanup cancela la solicitud si el componente se desmonta.
        if (!controller.signal.aborted) {
          setData(products);
        }
      } catch (error) {
        if (error.name === "CanceledError" || error.name === "AbortError") {
          return;
        }

        if (!controller.signal.aborted) {
          setError("No fue posible cargar los productos.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
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
