import useCartStore from "../store/useCartStore";
import "./ProductCard.css";

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <article className="product-card">

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">${product.price}</p>
      </div>

      <button
        type="button"
        className="product-card__button"
        aria-label={`Add ${product.name} to cart`}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;