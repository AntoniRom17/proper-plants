export default function PlantCard({ plant, cart, addToCart }) {
  return (
    <div>
      <span>{plant.image}</span>
      <h3>{plant.name}</h3>
    </div>
  );
}