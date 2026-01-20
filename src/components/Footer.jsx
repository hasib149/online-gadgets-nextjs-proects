import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#3A0CA3] text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / Logo */}
        <div>
          <h1 className="text-2xl font-bold mb-4">GadgetMart</h1>
          <p className="text-gray-200">
            Discover the latest electronics and gadgets at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#A2D2FF]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-[#A2D2FF]">
                Gadgets
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-[#A2D2FF]">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>Email: support@gadgetmart.com</p>
          <p>Phone: +880 123 456 789</p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[#A2D2FF]">
              Facebook
            </a>
            <a href="#" className="hover:text-[#A2D2FF]">
              Twitter
            </a>
            <a href="#" className="hover:text-[#A2D2FF]">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-300 border-t border-gray-400 pt-4">
        &copy; 2026 GadgetMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
