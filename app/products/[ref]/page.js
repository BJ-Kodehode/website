import items from '@/app/data/items';

export async function generateStaticParams() {
  return items.map((item) => ({ ref: item.ref }));
}

export default function ItemPage({ params }) {
  const item = items.find((i) => i.ref === params.ref);

  if (!item) return <div className="p-6">Fant ikke elementet</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <img src={item.image} alt={item.title} className="my-4 rounded-xl w-full max-h-[500px] object-cover" />
      <span className="uppercase text-sm text-gray-500">{item.category}</span>
      <p className="mt-2 text-lg">{item.description}</p>
    </div>
  );
}
