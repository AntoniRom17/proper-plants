import CartItem from "./CartItem";

export default function Cart({ cart, increment, decrement, clearCart }) {
  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length > 0 && (
        <button className="clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
      )}

      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </div>
    </div>
  );
}