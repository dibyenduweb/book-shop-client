import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <PacmanLoader
          className="mb-4"
          color="red"
          loading={true}
          size={150}
        />
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
