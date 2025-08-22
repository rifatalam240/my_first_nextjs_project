"use client";
import { useEffect, useState } from "react";

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const { id } = params;

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProduct(data.find(p => p.id === parseInt(id))));
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  );
}
