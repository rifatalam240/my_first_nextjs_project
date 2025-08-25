"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!product || product.error)
    return <div className="p-8 text-center text-red-500">Product not found</div>;

  return (
    <section className="py-16  dark:bg-[#23255A] min-h-[60vh] flex items-center justify-center">
      <div className="max-w-xl w-full border-1 dark:bg-[#2d2350] rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-4  dark:text-white">{product.name}</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">{product.description}</p>
        <p className="font-bold text-green-600 dark:text-green-300 text-xl mb-4">${product.price}</p>
      </div>
    </section>
  );
}