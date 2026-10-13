import "./index.css";
import useCartStore from "./store/useCartStore";
import ProductCard from "./components/ProductCard";
import products from "./data/Products";
import Cart from "./components/Cart";
function App() {
  const itemsCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  return (
    <div className="shop-page">
      <section className="product-section">
        <p className="product-section__cart-count">
          item in cart : {itemsCount}
        </p>

        <header className="product-section__header">
          <h1 className="product-section__title">
            Shopping Cart Mini App
          </h1>
       
        </header>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Cart />
    </div>
  );
}

export default App;
