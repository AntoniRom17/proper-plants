import PlantCard from "./PlantCard";

export default function Plants({ plants, cart, addToCart }) {
  return (
    <div>
      <h2>Available Plants</h2>

      <div className="plants-grid">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            cart={cart}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}