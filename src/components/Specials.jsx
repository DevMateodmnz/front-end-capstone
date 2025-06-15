import SpecialsCard from './SpecialsCard';

export default function Specials() {
  const specials = [
    { id: 1, name: "Greek Salad", price: "$12.99" },
    { id: 2, name: "Bruschetta", price: "$7.99" },
    { id: 3, name: "Lemon Dessert", price: "$5.99" }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Weekly Specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-cards">
        {specials.map(item => (
          <SpecialsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}