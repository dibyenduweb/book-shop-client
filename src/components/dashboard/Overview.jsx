import useAuth from "../../hooks/useAuth";

const Overview = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center w-full">
      <h3 className="text-4xl font-bold text-center">
        Welcome Back{" "}
        <span className="px-2 rounded-lg bg-yellow-400 text-sky-900">
          {user.email}
        </span>
      </h3>
    </div>
  );
};

export default Overview;
