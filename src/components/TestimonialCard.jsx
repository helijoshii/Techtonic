// TestimonialCard.jsx
import React from "react";

const TestimonialCard = ({ text, name, title }) => {
  return (
    <div className="w-[366px] h-[306px] bg-white rounded-xl shadow-lg p-6 mx-4">
      <p className="text-gray-700 text-lg mb-4">{text}</p>
      <p className="font-semibold text-lg text-gray-900">{name}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
};

export default TestimonialCard;
