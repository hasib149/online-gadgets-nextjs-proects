import React from "react";

const WhyChooseUs = () => {
  const features = [
    "100% Original Products",
    "Fast Delivery",
    "Warranty Support",
    "Secure Payment",
  ];
  return (
    <div>
      <section className="px-4 md:px-10 mt-12">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {features.map((feature) => (
            <div key={feature} className=" p-16 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
              <h3 className="">{feature}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
