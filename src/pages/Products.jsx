import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Products() {
  const { data, loading, error } = useProducts();

  if (loading) {
    return (
      <section>
        <h1>Nuestros productos</h1>

        <div className="status-message">
          <p>☕ Preparando nuestros productos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h1>Nuestros productos</h1>

        <div className="status-message error">
          <p>{error}</p>

          <p>Intenta nuevamente más tarde.</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="products-header">
        <div>
          <span className="section-label">Misk'i & Bitter</span>

          <h1>Nuestros productos</h1>

          <p>
            Descubre nuestra selección de productos cuidadosamente elegidos.
          </p>
        </div>

        <span className="product-count">{data.length} productos</span>
      </div>

      {data.length > 0 ? (
        <div className="products-grid">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="status-message">
          <p>No hay productos disponibles.</p>
        </div>
      )}
    </section>
  );
}

export default Products;
