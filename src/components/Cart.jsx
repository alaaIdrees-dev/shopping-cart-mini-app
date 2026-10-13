import useCartStore from "../store/useCartStore";
import "./Cart.css";

function Cart() {
  const items = useCartStore((state) => state.items);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity,
  );
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity,
  );
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart,
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price} each</p>
            </div>

            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={() => decreaseQuantity(item.id)}
              >
                −
              </button>

              <span className="quantity-value">{item.quantity}</span>

              <button
                className="quantity-btn"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>

            <div className="cart-item-total">
              ${item.price * item.quantity}
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <span className="total-label">Total:</span>
        <span className="total-value">${totalPrice}</span>
      </div>
    </div>
  );
}

export default Cart;
