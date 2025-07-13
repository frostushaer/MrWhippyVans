import React from "react";

const Footer = () => (
  <footer className="bg-white pt-16 pb-8 px-4 md:px-0 border-t">
  {/* Logo at the top */}
        <div className="mb-4 flex justify-center flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/10">
  <div className="flex items-start gap-2 text-2xl font-bold text-pink-600 leading-tight">
    <span role="img" aria-label="ice cream">🍦</span>
    <div className="flex flex-col">
      <span>Mr. Whippy Vans</span>
      <span className="text-blue-900 ml-[0.2rem]">Australia</span>
    </div>
  </div>
</div>

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 ">
      {/* About */}
      
      <div className="flex-1  bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/10">
      
        <h2 className="text-xl font-bold mb-2">About Mr. Whippy Vans</h2>
        <p className="text-gray-700">
          At Mr.WHIPPY we believe that ice cream brings people together.
        </p>
      </div>
      {/* Main Pages */}
      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/10 ">
        <h2 className="text-xl font-bold mb-2">Main Pages</h2>
        <ul className="space-y-1">
          <li className="text-gray-400 cursor-not-allowed">Home</li>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Menu</a></li>
          <li><a href="#" className="hover:underline">Events</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
      {/* Other Pages */}
      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/10">
        <h2 className="text-xl font-bold mb-2">Other Pages</h2>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
      {/* Contact Us */}
      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/10">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <address className="not-italic text-gray-700 mb-2">
          725-727 Old Gympie Road<br />
          Narangba 4504<br />
          Queensland
        </address>
        <div className="mb-1">
          <span className="block">Email: <a href="mailto:mrwhippyvans1@yahoo.com" className="hover:underline">mrwhippyvans1@yahoo.com</a></span>
          <span className="block">Tel: 0405233635</span>
          <span className="block">Hours: Mon-Fri 7:00AM - 8:00PM</span>
        </div>
        <div className="flex space-x-4 mt-2">
          <a href="#" aria-label="Facebook" className="text-xl hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="text-xl hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-xl hover:text-pink-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    {/* Newsletter */}
    <div className="mt-12 text-center flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/10">
      <h2 className="text-2xl font-bold mb-2">Subscribe To Our Newsletter</h2>
      <p className="mb-4 text-gray-700">Get On The List And Get 10% Off Your First Order!</p>
      <form className="flex justify-center">
        <input
          type="email"
          placeholder="Your Email Address"
          className="px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-900 text-white rounded-r hover:bg-blue-700 transition"
        >
          &rarr;
        </button>
      </form>
    </div>
    {/* Copyright */}
    <div className="mt-8 text-center text-gray-600 text-sm flex-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md border border-white/10">
      &copy; 2025 All Rights Reserved.
    </div>
  </footer>
  
);

export default Footer;
