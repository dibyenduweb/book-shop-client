/* eslint-disable no-unused-vars */
import React from "react";

// Function to get random number between a range
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Sample data for random selection
const names = ["Mark Adair", "Jessica Smith", "James Brown", "Emily Davis", "Michael Lee"];
const companies = ["Web Designer | Software Hub PVT. LTD.", "Frontend Developer | TechnoCorp", "Product Manager | Web Solutions", "UI/UX Designer | Creative Agency", "Full Stack Developer | DevStudio"];
const testimonials = [
  "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  "The design was clean and modern, really appreciated the attention to detail. Great experience overall.",
  "Had an amazing time with this product, the quality exceeded my expectations and the delivery was quick.",
  "Excellent service, the team was very professional, and the design was exactly what I was looking for.",
  "Fantastic experience, the website was easy to use, and the support team was super responsive."
];

const Review = () => {
  // Randomizing content
  const randomIndex = getRandomNumber(0, names.length - 1);
  const name = names[randomIndex];
  const company = companies[randomIndex];
  const testimonialText = testimonials[getRandomNumber(0, testimonials.length - 1)];
  const starRating = getRandomNumber(3, 5); // Random rating between 3 and 5 stars

  const generateStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg
            key={i}
            className="w-5 fill-[#facc15]"
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 fill-[#CED5D8]"
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="font-[sans-serif]  max-w-6xl  h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
      <img
        src="https://readymadeui.com/profile_2.webp"
        alt="profile"
        className="w-16 h-16 rounded-full absolute right-0 left-0 mx-auto -top-7"
      />
      <div className="mt-6 text-center">
        <div>
          <h4 className="text-sm font-extrabold text-gray-800">{name}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{company}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-extrabold text-gray-800 mb-2">
            Amazing Design Inspiration
          </h2>
          <p className="text-sm text-gray-800 leading-relaxed">{testimonialText}</p>
        </div>

        <div className="flex justify-center space-x-1 mt-4">
          {generateStars(starRating)}
        </div>
      </div>
    </div>
  );
};

export default Review;
