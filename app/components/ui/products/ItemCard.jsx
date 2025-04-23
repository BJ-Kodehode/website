'use client';
import Link from 'next/link';
import Image from 'next/image';

const ItemCard = ({ item }) => {
  return (
    <Link href={`/products/${item.ref}`} className="block border rounded-2xl p-4 shadow-md hover:shadow-xl transition">
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={250}
        className="rounded-lg w-full h-48 object-cover"
      />
      <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
      <p className="text-sm text-gray-600">{item.category.toUpperCase()}</p>
      <p className="text-gray-700">{item.description}</p>
    </Link>
  );
};

export default ItemCard;
