"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description: desc, price }),
    });
    if (res.ok) {
      alert("Product added!");
      router.push("/products");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 rounded"/>
        <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} className="border p-2 rounded"/>
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} className="border p-2 rounded"/>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Product</button>
      </form>
    </div>
  );
}
