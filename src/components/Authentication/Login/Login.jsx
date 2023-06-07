import React, { useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../assets/images/authentication/login.json";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = (data) => console.log(data);
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 justify-center items-center mt-5 ">
      <div className="">
        <Lottie className="" animationData={loginAnimation} loop={true} />;
      </div>
      <div className="">
        <div className="card mx-auto flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
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
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Registration here
              </Link>
            </p>
          </form>

          <button
            // onClick={handleGoogleSignIn}
            className="py-2 mb-5 w-full flex items-center justify-center font-semibold  "
          >
            <img
              width="20"
              height="20"
              className="mr-2"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
            <p>Sign In With Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
