import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div>
      <section className="px-4 md:px-10 mt-12 py-20 bg-[#A2D2FF] text-[#2B2D42] text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Upgrade Your Tech?
        </h2>
        <p className="mb-6 text-lg">Explore our latest gadgets today.</p>
        <Link
          href="/items"
          className="btn bg-[#7209B7] hover:bg-[#3A0CA3] text-white px-8 py-3 rounded"
        >
          View All Gadgets
        </Link>
      </section>
    </div>
  );
};

export default CallToAction;
