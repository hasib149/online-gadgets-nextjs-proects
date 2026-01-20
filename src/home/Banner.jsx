import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="bg-[#7209B7] text-white py-32 px-4 md:px-10">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-10 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Discover the Latest Electronics & Gadgets
            </h1>
            <p className="text-gray-200 text-lg md:text-xl">
              Shop premium smartphones, laptops, headphones, and accessories.
            </p>
            <Link
              href="/items"
              className="btn bg-[#7209B7] hover:bg-[#3A0CA3] text-white px-6 py-3 rounded"
            >
              Explore Gadgets
            </Link>
          </div>
          <div className="mt-10 lg:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1573148195900-7845dcb9b127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Gadgets"
              className="w-full rounded shadow-lg"
              width={64}
              height={64}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
