import { NextResponse } from "next/server";

let products = [
  { id: 1, name: "Product 1", description: "Desc 1", price: 20 },
  { id: 2, name: "Product 2", description: "Desc 2", price: 35 },
];

// GET → All products
export async function GET() {
  return NextResponse.json(products);
}

// POST → Add new product (Protected later)
export async function POST(req) {
  const body = await req.json();
  const newProduct = { id: products.length + 1, ...body };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
