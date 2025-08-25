"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar, FaShoppingBag } from "react-icons/fa";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {console.log("he",data);
        setProducts(data.slice(0, 6)); // শুধু 3টি highlight
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-12">
        <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-500 border-solid"></span>
      </div>
    );

  return (
    <section className="bg-gradient-to-br  py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 drop-shadow-lg">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition flex flex-col items-center relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <FaStar className="text-yellow-400 text-xl" />
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold shadow">
                  Best Seller
                </span>
              </div>
              <FaShoppingBag className="text-green-400 text-5xl mb-4 mt-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{p.name}</h3>
              <p className="mb-2 text-gray-600 text-center">{p.description}</p>
              <p className="font-bold text-green-600 text-xl mb-4">${p.price}</p>
              <Link
                href={`/products/${p.id}`}
                className="mt-auto inline-block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow transition font-semibold"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
        {/* Category badges */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <span className="px-6 py-3 bg-white rounded-full shadow text-yellow-700 text-base font-semibold border border-yellow-100">
            Fresh Vegetables
          </span>
          <span className="px-6 py-3 bg-white rounded-full shadow text-yellow-700 text-base font-semibold border border-yellow-100">
            Raw Meats
          </span>
          <span className="px-6 py-3 bg-white rounded-full shadow text-yellow-700 text-base font-semibold border border-yellow-100">
            Milk & Dairies
          </span>
          <span className="px-6 py-3 bg-white rounded-full shadow text-yellow-700 text-base font-semibold border border-yellow-100">
            Canned & Frozen Food
          </span>
        </div>
      </div>
    </section>
  );
}