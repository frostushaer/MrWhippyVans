import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-900">
          <div className="flex flex-col">
            <span>Mr. Whippy Vans</span>
            <span className="text-blue-900 ml-[0.2rem]">Australia</span>
          </div>
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden block text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      {/* Menu */}
      <div
        className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <a className="md:p-4 py-2 block" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block" href="#">
                Menu
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block" href="#">
                Events
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block md:mb-0 mb-2" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
