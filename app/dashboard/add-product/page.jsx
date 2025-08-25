// filepath: d:\NextJs_projects\ecommerce_next\app\dashboard\add-product\page.jsx
"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddProduct() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [loading, setLoading] = useState(false);
  if (status === "loading") return <div className="p-8 text-center">Loading...</div>;
  if (!session) {
    router.push("/login");
    return null;
  }
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    alert("Product added!");
    router.push("/products");
  };
  return (
    <section className="py-16  dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-xl border-1 rounded-2xl shadow p-8">
        <h2 className="text-3xl font-bold mb-6 dark:text-red-500">Add New Product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="name" placeholder="Name" required className="border rounded px-4 py-2" value={form.name} onChange={handleChange} />
          <textarea name="description" placeholder="Description" required className="border rounded px-4 py-2" value={form.description} onChange={handleChange} />
          <input name="price" type="number" placeholder="Price" required className="border rounded px-4 py-2" value={form.price} onChange={handleChange} />
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition" disabled={loading}>
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </section>
  );
}