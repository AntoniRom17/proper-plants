export default function CartItem({ item, increment, decrement }) {
  return (
    <div>
      <span>{item.image}</span>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => decrement(item.id)}>-</button>
      <button onClick={() => increment(item.id)}>+</button>
    </div>
  );
}