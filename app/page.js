import items from './data/items';
import ItemCard from './components/ui/products/ItemCard';

export default function Home() {
  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Utforsk Spill, Musikk og Biler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.ref} item={item} />
        ))}
      </div>
    </main>
  );
}
