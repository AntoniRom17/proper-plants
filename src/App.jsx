import { useState } from "react";
import PLANTS from "./data";
import Plants from "./components/Plants/Plants";
import Cart from "./components/Cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const exists = cart.find((item) => item.id === plant.id);

    if (exists) {
      // increment quantity
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // add new item
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
        .filter((item) => item.quantity > 0) // remove if quantity hits 0
    );
  }

  return (
    <div>
      <h1>Proper Plants</h1>

      <Plants plants={PLANTS} addToCart={addToCart} cart={cart} />

      <Cart cart={cart} increment={increment} decrement={decrement} />
    </div>
  );
}