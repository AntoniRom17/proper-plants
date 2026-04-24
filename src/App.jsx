import { useState } from "react";
import PLANTS from "./data";
import Plants from "./components/Plants/Plants";
import Cart from "./components/Cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const exists = cart.find((item) => item.id === plant.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function increment(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrement(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div>
      <h1>Proper Plants</h1>

      <Plants
        plants={PLANTS}
        cart={cart}
        addToCart={addToCart}
      />

      <Cart
        cart={cart}
        increment={increment}
        decrement={decrement}
        clearCart={clearCart}
      />
    </div>
  );
}
