import React from "react";

const TopBrands = () => {
  const brands = [
    "Apple",
    "Samsung",
    "Dell",
    "Sony",
    "HP",
    "Lenovo",
    "Asus",
    "Acer",
    "Microsoft",
    "Google",
    "OnePlus",
    "Xiaomi",
    "LG",
    "Huawei",
    "Realme",
  ];
  return (
    <div>
      <section className="px-4 md:px-10 text-center mt-12">
        <h2 className="text-3xl font-semibold mb-6">Top Brands</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className=" px-10 py-5 rounded shadow-xl  hover:scale-105 transition-transform duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopBrands;
