import items from '@/app/data/items';
import Image from 'next/image';

export async function generateStaticParams() {
  return items.map((item) => ({ ref: item.ref }));
}

export default async function ItemPage({ params }) {
  const { ref } = await params; // ✅ Await params if you're using async function
  const item = items.find((i) => i.ref === ref);

  if (!item) return <div className="p-6">Fant ikke elementet</div>;

  return (
    <div className="p-6">
      {/* render your item */}
    </div>
  );


}
