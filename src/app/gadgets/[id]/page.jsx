import Image from "next/image";
import React from "react";

async function getProducts() {
  const res = await fetch("http://localhost:3000/products.json", {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}
const GadgetsDatails = async ({ params }) => {
  const { id } = params; // id from URL
  const products = await getProducts();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-gray-500 mt-20">Product not found</p>;
  }
  return (
    <div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-80 relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <p className="text-gray-700 mb-4">{product.description}</p>
            <span className="text-2xl font-bold text-indigo-600 mb-4">
              ${product.price}
            </span>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GadgetsDatails;
