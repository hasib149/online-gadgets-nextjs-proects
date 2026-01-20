import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/products.json", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

const Gadgets = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <section className=" mx-auto max-w-11/12 px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          🛒 GadgetMart Items
        </h1>
        <p className="text-gray-500 mt-2">
          Explore the latest gadgets and electronics
        </p>
      </div>

      {/* Empty State */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          No products available.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="group border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between h-190px">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-indigo-600">
                    ${item.price}
                  </span>
                  <Link
                    href={`/gadgets/${item.id}`}
                    className="px-3 py-1.5 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gadgets;
