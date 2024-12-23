/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBook } from 'react-icons/fa'; // Importing the book icon from React Icons

const About = () => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to <span className="text-blue-500">My eBook</span>
        </h1>
        <div className="mt-4 text-xl text-gray-600">
          <FaBook className="inline-block text-blue-500 text-6xl mb-4" />
          <p>
            We offer a wide selection of eBooks, ranging from fiction, non-fiction,
            and educational books. Our mission is to provide you with an easy and convenient
            platform to browse, purchase, and enjoy your favorite books at any time, anywhere.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600">
          At My eBook, we are dedicated to providing a seamless reading experience. Our platform
          ensures that you can find the right book to suit your interests, whether youre an avid reader
          or looking for something new to explore.
        </p>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
        <div className="mt-6 flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full mb-2">
              {/* Placeholder for team member image */}
              <img src="https://png.pngtree.com/png-clipart/20231017/original/pngtree-3d-employee-video-chat-png-image_13340388.png" alt="Team Member 1" className="rounded-full" />
            </div>
            <p className="text-lg text-gray-600">John Doe</p>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full mb-2">
              {/* Placeholder for team member image */}
              <img src="https://t3.ftcdn.net/jpg/05/90/59/88/360_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg" alt="Team Member 2" className="rounded-full" />
            </div>
            <p className="text-lg text-gray-600">Jane Smith</p>
            <p className="text-sm text-gray-500">Chief Marketing Officer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
