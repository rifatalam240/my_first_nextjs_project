// app/api/products/[id]/route.js

// Use a shared products array (for demo, import from main route or keep in-memory)
let products = [
  { id: 1, name: "Product 1", description: "Desc 1", price: 20 },
  { id: 2, name: "Product 2", description: "Desc 2", price: 35 },
  // Add more products as needed
];

export async function GET(req, { params }) {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  if (!product) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }
  return new Response(JSON.stringify(product), { status: 200 });
}