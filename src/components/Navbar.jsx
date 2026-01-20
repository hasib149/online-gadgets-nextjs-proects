import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/" className="hover:text-[#A2D2FF]">
          Home
        </Link>
      </li>
      <li>
        <Link href="/gadgets" className="hover:text-[#A2D2FF]">
          Gadgets
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#3A0CA3] text-white shadow-sm px-4 md:px-10">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#3A0CA3] rounded-box w-52 text-white"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          GadgetMart
        </Link>
      </div>

      {/* Navbar Center (Desktop Links) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End (Button) */}
      <div className="navbar-end">
        <Link
          href="/login"
          className="btn  bg-[#7209B7] hover:bg-[#3A0CA3] text-white"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
