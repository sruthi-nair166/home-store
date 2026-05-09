import Image from "../assets/about_img.jpg";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 pt-28 pb-10 sm:px-10 lg:px-20 lg:pt-10">
        <Link to="/" className="absolute top-6 left-6 flex items-center gap-3">
          <img src={Logo} alt="" className="h-8" />
          <span className="text-2xl font-bold font-logo">Havenly</span>
        </Link>

        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Sign Up</h1>

          <form className="flex flex-col gap-8">
            <label htmlFor="name" className="flex flex-col">
              <p className="mb-3">
                Your name: <span className="text-red-500">*</span>
              </p>

              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border-2 border-slate-400 p-4 rounded-lg"
              />
            </label>

            <label htmlFor="email" className="flex flex-col">
              <p className="mb-3">
                Email address: <span className="text-red-500">*</span>
              </p>

              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="border-2 border-slate-400 p-4 rounded-lg"
              />
            </label>

            <label htmlFor="password" className="flex flex-col">
              <p className="mb-3">
                Password: <span className="text-red-500">*</span>
              </p>

              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border-2 border-slate-400 p-4 rounded-lg"
              />
            </label>

            <button
              type="submit"
              className="bg-dark border-2 border-dark text-white hover:bg-white hover:text-dark transition p-4 font-medium text-lg rounded-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-10 text-center lg:text-left">
            Already have an account?{" "}
            <Link to="/signin" className="text-dark font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <img className="h-full w-full object-cover" src={Image} alt="" />
      </div>
    </div>
  );
}

export default SignUp;
