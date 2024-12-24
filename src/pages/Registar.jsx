import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Correct import of the useAuth hook
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // For navigation after successful registration
import GoogleLogin from "../components/login-registration/GoogleLogin"; // Import GoogleLogin component
import axios from "axios";
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    const { email, password, role, fullName, image } = data;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];

    const userData = { email, fullName, role, status, wishlist, image };

    createUser(email, password)
      .then(() => {
        axios.post('http://localhost:5000/users', userData)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration successful",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/"); // Redirect to home after successful registration
            }
          })
          .catch((error) => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Registration failed, please try again later.",
              showConfirmButton: true
            });
          });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left max-w-md mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800">Register now!</h1>
          <p className="py-4 text-gray-600 text-sm">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-lg p-4 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4">
            {/* Full Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
                {...register("fullName", {
                  required: "Full Name is required",
                  minLength: {
                    value: 3,
                    message: "Full Name must be at least 3 characters long",
                  },
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Image Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm">Image Url</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-full"
                {...register("image", {
                  required: "Image is required",
                  minLength: {
                    value: 3,
                    message: "Image must be a valid URL",
                  },
                })}
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered w-full"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords must match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Role Selection */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm">Role</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                {...register("role", { required: true })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Your Role
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm">You must select a role</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </div>

            {/* Google Login Button */}
            <div className="mt-4">
              <GoogleLogin /> {/* Google login button */}
            </div>

            {/* Link to Login Page */}
            <p className="my-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
