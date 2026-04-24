export default function PlantCard({ plant, cart, addToCart }) {
  const inCart = cart.find((item) => item.id === plant.id);

  return (
    <div>
      <span>{plant.image}</span>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>
        {inCart ? "Add another" : "Add to cart"}
      </button>
    </div>
  );
}