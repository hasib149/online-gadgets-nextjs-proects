import Image from "next/image";
import React from "react";

const Featured = () => {
  const products = [
    {
      name: "iPhone 14",
      description: "Latest iPhone with A15 Bionic chip and advanced camera.",
      price: "$999",
      image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fHww",
    },
    {
      name: "MacBook Pro",
      description: "High-performance laptop for professionals.",
      price: "$1999",
      image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Samsung Galaxy S23",
      description: "Flagship Samsung phone with stunning display.",
      price: "$899",
      image: "https://images.unsplash.com/photo-1678958274412-563119ec18ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2Ftc3VuZyUyMEdhbGF4eSUyMFMyM3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Sony Headphones",
      description: "Noise-cancelling over-ear headphones.",
      price: "$199",
      image: "https://images.unsplash.com/photo-1697055656373-720a6a0e9b4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNvbnklMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww",
    },
  ];

  return (
    <section className="px-4 md:px-10 mt-8">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Featured Gadgets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.name}
            className="shadow-xl p-6 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded mb-4"
              width={400} // numeric value
              height={160} // numeric value, h-40 ~ 160px
            />{" "}
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-700 text-sm mt-1">{item.description}</p>
            <p className="mt-2 font-bold text-indigo-600">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
