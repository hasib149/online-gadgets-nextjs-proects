import React from "react";

const CustomerReviews = () => {
  const reviews = [
    { name: "Rahim Ahmed", review: "Great quality gadgets and fast delivery!" },
    { name: "Karim Khan", review: "Excellent service and authentic products." },
    { name: "Sadia Noor", review: "Highly recommend GadgetMart to everyone." },
    {
      name: "Tariq Islam",
      review: "Amazing customer support and timely delivery.",
    },
    {
      name: "Fatema Begum",
      review: "Products are exactly as described, very satisfied.",
    },
    {
      name: "Nayeem Hossain",
      review: "Wide range of gadgets and reasonable prices.",
    },
    { name: "Ayesha Rahman", review: "Fast shipping and excellent packaging." },
    {
      name: "Imran Sarker",
      review: "I always shop here, very reliable store.",
    },
  ];
  return (
    <div>
      <section className="px-4 md:px-10 text-center mt-12">
        <h2 className="text-3xl font-semibold mb-6">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {reviews.map((r) => (
            <div
              key={r.name}
              className=" p-6 rounded-lg shadow-xl   hover:scale-105 transition-transform duration-300"
            >
              <p className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</p>
              <p className="italic">"{r.review}"</p>
              <p className="mt-2 font-semibold">{r.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerReviews;
