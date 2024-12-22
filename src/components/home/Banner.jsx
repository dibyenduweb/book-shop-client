const Banner = () => {
  return (
    <div className="mt-20 grid md:grid-cols-3 gap-6 py-8 px-4 md:px-16 bg-gradient-to-r from-blue-700 to-blue-400 font-sans overflow-hidden">
      <div className="md:col-span-2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Welcome to MY-Ebbok!
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-gray-200 mt-4">
          Discover a wide range of eBooks, from bestsellers to hidden gems.
          Enjoy seamless browsing, secure payments, and instant downloads. Start
          building your digital library today!
        </p>
        <button type="button" className="btn btn-warning mt-8">
          Get Started
        </button>
      </div>

      <div className="hidden md:block relative">
        <img
          src="https://assets.penguinrandomhouse.com/wp-content/uploads/2023/01/26130756/KN_-Life-Changing-Books_1200x628purple.jpg"
          alt="Banner Image"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="md:hidden flex justify-center mt-8">
        <img
          src="https://assets.penguinrandomhouse.com/wp-content/uploads/2023/01/26130756/KN_-Life-Changing-Books_1200x628purple.jpg"
          alt="Banner Image"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
