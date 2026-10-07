function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-content">
        <span className="product-category">{product.category}</span>

        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <div className="product-footer">
          <strong>S/ {product.price}</strong>

          <span>⭐ {product.rating}</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
