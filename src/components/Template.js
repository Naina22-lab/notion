import React from "react";
import background from "../assets/background.png";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex w-full max-w-[1160px] mx-auto py-12 bg-black">
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-4">
        <h1 className="text-white font-semibold text-3xl mb-4">{title}</h1>
        <p className="text-white text-base mb-4">
          <span>{desc1}</span>
          <br />
          <span className="italic text-blue-500">{desc2}</span>
        </p>
        {formtype === "Signup" ? (
          <SignUpForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex items-center mt-6 mb-8">
          <div className="flex-1 border-b border-gray-500 "></div>
          <p className="mx-2 text-sm text-gray-500">OR</p>
          <div className="flex-1 border-b border-gray-500"></div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 w-[400px]">
          Sign in with Google
        </button>
      </div>
      <div className="hidden lg:flex justify-center items-center w-1/2 px-4">
        <img
          src={background}
          alt="pattern"
          width={279}
          height={252}
          loading="lazy"
          className="mr-4"
        />
        <img
          src={image}
          alt="pattern"
          width={279}
          height={245}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;