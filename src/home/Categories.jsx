import React from "react";

const Categories = () => {
  const categories = [
    "Mobile",
    "Laptop",
    "Headphones",
    "Computer",
    "Mouse",
    "Key Pad",
    "Accessories",
  ];

  return (
    <section className="px-4 md:px-10 mt-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Browse by Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className="bg-white text-gray-800 font-medium px-10 py-5 rounded-lg shadow-xl 
                      hover:scale-105 transition-transform duration-300"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
