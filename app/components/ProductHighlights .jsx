"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.slice(0, 3)); // শুধু 3টি highlight
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center p-6">Loading...</p>;

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2">{p.description}</p>
              <p className="font-bold mt-2">${p.price}</p>
              <Link
                href={`/products/${p.id}`}
                className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
