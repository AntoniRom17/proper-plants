import CartItem from "./CartItem";

export default function Cart({ cart, increment, decrement }) {
  return (
    <div>
      <h2>Your Cart</h2>

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