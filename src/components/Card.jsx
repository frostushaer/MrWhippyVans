import React from "react";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="w-[300px] h-[450px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden flex flex-col">
      
      {/* Top Half - Image */}
      <a href={link} className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </a>

      {/* Bottom Half - Content */}
      <div className="h-1/2 p-4 flex flex-col justify-between">
        <div>
          <a href={link}>
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
              {title}
            </h5>
          </a>
          <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
            {description}
          </p>
        </div>
        
        <a
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#e88ba4] rounded-lg hover:bg-[#744350] focus:ring-4 focus:outline-none focus:bg-[#e1b3bf] dark:bg-[#e88ba4] dark:hover:bg-[#744350] dark:focus:ring-[#e1b3bf]"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
