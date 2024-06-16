import React from "react";
import {Link} from "react-router-dom" 
import SignUp from "./SignUp";

const LoginSignUp = () => {
  return (
    <div className=" flex py-[5%] justify-center ">
      <form
        action=""
        className="bg-white rounded-md md:w-[30vw] w-[90vw]  p-8 space-y-2 text-left"
      >
        <h1 className="font-bold text-2xl">Login</h1>
        <div>
          <p className="text-left">Username:</p>
          <input
            className="w-[100%] border-[1px] border-[#cdcdcd] py-2 px-1 rounded-sm"
            type="text"
            placeholder="Enter Your Username"
          />
        </div>
        <div>
          <p className="text-left">Email:</p>
          <input
            required
            className="w-[100%] border-[1px] border-[#cdcdcd] py-2 px-1 rounded-sm"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <p className="text-left">Password:</p>
          <input
            className="w-[100%] border-[1px] border-[#cdcdcd] py-2 px-1 rounded-sm"
            type="Password"
            placeholder="Enter Your Password"
          />
        </div>
        <button className="w-[100%] border-[1px] border-[#cdcdcd] text-white rounded-sm bg-orange-500 py-2 font-bold">Login</button>
        <p className="text-xs">
          Don't have an account?{" "}
          <Link to="/SignUp" element={<SignUp/>} className="text-orange-600 font-semibold">
            Sign Up Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginSignUp;
