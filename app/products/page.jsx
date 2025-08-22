"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-bold mt-2">${p.price}</p>
            <Link href={`/products/${p.id}`} className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
