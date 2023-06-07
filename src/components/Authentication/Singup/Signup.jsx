import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import signupAnimation from "../../../assets/images/authentication/signup.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 justify-center items-center mt-5 ">
      <div className="">
        <Lottie className="" animationData={signupAnimation} loop={true} />;
      </div>
      <div className="">
        <div className="card mx-auto flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-800">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>

              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Your Photo Url"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-800">photoURL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-800">Email is required</span>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "passwords"}
                  {...register("passwords", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
                />
                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEye className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FaEyeSlash className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>

              {errors.password && (
                <p className="text-red-800">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">is less than 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">don't have a capital letter</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">don't have a special character</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "confirmPassword"}
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Confirm password"
                  className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
                />
                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <FaEye className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FaEyeSlash className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-800">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">is less than 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">don't have a capital letter</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">don't have a special character</p>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Registration"
              />
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
